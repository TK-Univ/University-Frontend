import http from "k6/http";
import { check, sleep } from "k6";
import { SharedArray } from "k6/data";
import exec from "k6/execution"; // [수정] scenario 대신 exec로 변경

// 1. 유저 데이터 생성 (메모리 공유)
const users = new SharedArray("users", function () {
  const data = [];
  // DB에 1000명의 학생이 있다고 가정
  for (let i = 1; i <= 1000; i++) {
    data.push({
      studentId: i,
      email: `student${i}@univ.ac.kr`,
      password: "password1234",
    });
  }
  return data;
});

export const options = {
  scenarios: {
    enrollment_scenario: {
      executor: "per-vu-iterations",
      vus: 100, // 100명이 동시에
      iterations: 1, // 1인당 1회 실행
      maxDuration: "30s",
    },
  },
  thresholds: {
    http_req_duration: ["p(95)<2000"], // 95% 요청이 2초 이내
    http_req_failed: ["rate<0.01"], // 실패율 1% 미만
  },
};

const BASE_URL = "http://localhost:8080";

export default function () {
  // [수정] exec.vu.idInTest 사용
  // idInTest는 1부터 시작하므로 -1을 해줘야 배열 인덱스(0부터)와 맞음
  const userIndex = (exec.vu.idInTest - 1) % users.length;
  const user = users[userIndex];

  // === Step 1: 로그인 ===
  const loginPayload = JSON.stringify({
    userId: user.studentId.toString(),
    password: user.password,
  });

  const loginHeaders = { "Content-Type": "application/json" };
  const loginRes = http.post(`${BASE_URL}/api/auth/login`, loginPayload, { headers: loginHeaders });

  // 로그인 실패 시 바로 종료
  if (!check(loginRes, { "login successful": (r) => r.status === 200 })) {
    console.error(`Login failed for user ${user.studentId}: ${loginRes.status} ${loginRes.body}`);
    return;
  }

  // 토큰 추출
  const authToken = loginRes.json("accessToken");
  const authHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authToken}`,
  };

  // 현실적인 딜레이
  sleep(Math.random() * 0.4 + 0.1);

  // === Step 2: 수강 신청 ===
  const enrollPayload = JSON.stringify({
    studentId: user.studentId,
    lectureId: 1, // 1번 강의에 몰림
  });

  const enrollRes = http.post(`${BASE_URL}/api/enrollment/register`, enrollPayload, { headers: authHeaders });

  check(enrollRes, {
    // 200(성공) 혹은 409(이미 신청됨/정원초과)는 서버가 죽은 게 아니므로 '처리됨'으로 간주
    "request processed": (r) => r.status === 200 || r.status === 409,
    // 실제 성공 여부
    "enrollment success": (r) => r.status === 200,
  });
}

import { lectureApi } from "@/api/lecture/lectureApi";
import { DETAIL_COURSE_INFO } from "@/constants/Admin/courseInfo.constants";
import { useQuery } from "@tanstack/react-query";
import CourseModalRow from "./CourseModalRow";
import CloseCircle from "@/assets/close-circle.svg?react";
import { useEffect, useRef, useState } from "react";

interface CourseModalProps {
  lectureId: number | undefined;
  modalCloseHandler: () => void;
}

const CourseModal = ({ lectureId, modalCloseHandler }: CourseModalProps) => {
  // 대기열 상태 관리
  const [isPolling, setIsPolling] = useState(false); // 폴링 중인지 여부
  const [queueRank, setQueueRank] = useState<number | null>(null); // 내 대기 순번
  const [statusMessage, setStatusMessage] = useState(""); // 사용자에게 보여줄 메시지

  // ✅ 1. 타이머 ID와 중복 실행 방지 가드(Guard)를 위한 Ref
  const intervalIdRef = useRef<number | undefined>(undefined);
  const isCheckingResultRef = useRef(false);

  const query = useQuery({
    queryKey: ["lecture-detail", lectureId],
    queryFn: () => {
      if (!lectureId) throw new Error("No student selected");
      return lectureApi.detail(lectureId);
    },
    enabled: lectureId != null,
    retry: false,
  });

  const courseData = query.data?.result;

  const registerClickHandler = async () => {
    const STUDENT_ID = localStorage.getItem("user-id");
    if (STUDENT_ID && lectureId) {
      try {
        await lectureApi.enqueue(STUDENT_ID, String(lectureId));
        setStatusMessage("대기열 진입 중...");
        setIsPolling(true);
      } catch (error) {
        alert("수강신청 요청 실패!");
        console.error(error);
      }
    }
  };

  const checkFinalResult = async (studentId: string) => {
    if (!lectureId) return;
    setStatusMessage("결과 확인 중...");

    try {
      const result = await lectureApi.getResult(String(lectureId), studentId);

      if (!result) return;

      if (result === "SUCCESS") {
        alert("🎉 수강신청 성공!");
        query.refetch();
        modalCloseHandler();
      } else if (result.startsWith("FAIL")) {
        const reason = result.split(":")[1] || "알 수 없는 오류";
        alert(`😭 수강신청 실패: ${reason}`);
      } else if (result === "PROCESSING") {
        setTimeout(() => checkFinalResult(studentId), 1000);
        return;
      }
    } catch (error) {
      alert("결과 확인 중 오류 발생");
    } finally {
      setIsPolling(false);
      setQueueRank(null);
      setStatusMessage("");
      // isCheckingResultRef.current = false; // 필요하다면 여기서 초기화 (보통 unmount됨)
    }
  };

  useEffect(() => {
    const pollQueue = async () => {
      const STUDENT_ID = localStorage.getItem("user-id");
      if (!STUDENT_ID || !lectureId) return;

      try {
        const rank = await lectureApi.getOrder(String(lectureId), STUDENT_ID);

        // ✅ 2. 수정됨: rank가 0일 때도 정상 처리되도록 조건 변경
        // (null이나 undefined일 때만 무시)
        if (rank === null || rank === undefined) return;

        if (rank === -1) {
          // ✅ 3. 중복 실행 방지: 이미 결과 확인 중이면 무시
          if (isCheckingResultRef.current) return;
          isCheckingResultRef.current = true; // 문 잠그기

          stopPolling(); // 즉시 타이머 종료
          checkFinalResult(STUDENT_ID);
        } else {
          setQueueRank(rank);
          setStatusMessage(`현재 대기 인원: ${rank}명`);
        }
      } catch (error) {
        console.error("Polling error:", error);
        stopPolling(); // 에러 발생 시 안전하게 종료
        setIsPolling(false);
      }
    };

    const startPolling = () => {
      if (!intervalIdRef.current) {
        intervalIdRef.current = window.setInterval(pollQueue, 1000);
      }
    };

    const stopPolling = () => {
      if (intervalIdRef.current) {
        window.clearInterval(intervalIdRef.current);
        intervalIdRef.current = undefined;
      }
    };

    if (isPolling) {
      isCheckingResultRef.current = false; // 상태 초기화
      startPolling();
    } else {
      stopPolling();
    }

    return () => {
      stopPolling();
    };
  }, [isPolling, lectureId]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={modalCloseHandler}>
      {/* 로딩 상태거나 폴링 중일 때 오버레이 표시 */}
      {(query.isLoading || isPolling) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 z-60 text-white">
          <div className="text-xl font-bold mb-2">{isPolling ? "수강신청 대기 중..." : "로딩중"}</div>
          {isPolling && <div className="text-lg bg-gray-800 px-4 py-2 rounded-lg opacity-90">{statusMessage}</div>}
        </div>
      )}

      <div className="bg-white rounded-md p-6 w-150 h-150 flex flex-col justify-start items-center gap-5" onClick={(e) => e.stopPropagation()}>
        <div className="w-full flex flex-row justify-between items-center">
          <button
            className={`bg-main text-white rounded-md p-3 cursor-pointer ${isPolling ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={registerClickHandler}
            disabled={isPolling} // 대기 중엔 버튼 비활성화
          >
            수강신청
          </button>
          <CloseCircle className="w-10 h-10 cursor-pointer" onClick={modalCloseHandler} />
        </div>

        {courseData &&
          DETAIL_COURSE_INFO.map((info) => {
            return <CourseModalRow key={info.id} {...info} data={courseData[info.value]} />;
          })}
      </div>
    </div>
  );
};

export default CourseModal;

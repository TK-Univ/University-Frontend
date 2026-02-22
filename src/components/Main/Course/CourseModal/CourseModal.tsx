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
  const [isPolling, setIsPolling] = useState(false);
  const [queueRank, setQueueRank] = useState<number | null>(null);
  const [statusMessage, setStatusMessage] = useState("");

  const intervalIdRef = useRef<number | undefined>(undefined);
  const timeoutIdRef = useRef<number | undefined>(undefined); // ✅ setTimeout 전용 금고 추가
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

  // ✅ 상태 초기화 헬퍼 함수
  const resetPollingState = () => {
    setIsPolling(false);
    setQueueRank(null);
    setStatusMessage("");
  };

  // ✅ checkFinalResult 로직 개선 (finally 제거)
  const checkFinalResult = async (studentId: string) => {
    if (!lectureId) return;
    setStatusMessage("결과 확인 중...");

    try {
      const result = await lectureApi.getResult(studentId, String(lectureId));

      if (!result) return;

      if (result === "SUCCESS") {
        alert("🎉 수강신청 성공!");
        query.refetch();
        modalCloseHandler();
        resetPollingState(); // 최종 완료 시에만 상태를 초기화합니다.
      } else if (result.startsWith("FAIL")) {
        const reason = result.split(":")[1] || "알 수 없는 오류";
        alert(`😭 수강신청 실패: ${reason}`);
        resetPollingState(); // 최종 실패 시에만 상태를 초기화합니다.
      } else if (result === "PROCESSING") {
        // 처리 중일 때는 UI를 유지한 채로 1초 뒤에 자기 자신을 다시 호출합니다.
        timeoutIdRef.current = window.setTimeout(() => checkFinalResult(studentId), 1000);
      }
    } catch (error) {
      alert("결과 확인 중 오류 발생");
      resetPollingState();
    }
  };

  useEffect(() => {
    const pollQueue = async () => {
      const STUDENT_ID = localStorage.getItem("user-id");
      if (!STUDENT_ID || !lectureId) return;

      try {
        const rank = await lectureApi.getOrder(STUDENT_ID, String(lectureId));

        if (rank === null || rank === undefined) return;

        if (rank === -1) {
          if (isCheckingResultRef.current) return;
          isCheckingResultRef.current = true;

          stopPolling();
          checkFinalResult(STUDENT_ID);
        } else {
          setQueueRank(rank);
          setStatusMessage(`현재 대기 인원: ${rank}명`);
        }
      } catch (error) {
        console.error("Polling error:", error);
        stopPolling();
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
      isCheckingResultRef.current = false;
      startPolling();
    } else {
      stopPolling();
    }

    // ✅ 컴포넌트가 사라질 때 setInterval과 setTimeout을 모두 사살합니다.
    return () => {
      stopPolling();
      if (timeoutIdRef.current) {
        window.clearTimeout(timeoutIdRef.current);
      }
    };
  }, [isPolling, lectureId]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={modalCloseHandler}>
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
            disabled={isPolling}
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

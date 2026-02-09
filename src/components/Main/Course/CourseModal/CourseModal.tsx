import { lectureApi } from "@/api/lecture/lectureApi";
import { DETAIL_COURSE_INFO } from "@/constants/Admin/courseInfo.constants";
import { useQuery } from "@tanstack/react-query";
import CourseModalRow from "./CourseModalRow";
import CloseCircle from "@/assets/close-circle.svg?react";

interface CourseModalProps {
  lectureId: number | undefined;
  modalCloseHandler: () => void;
}

const CourseModal = ({ lectureId, modalCloseHandler }: CourseModalProps) => {
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
      const response = await lectureApi.register(STUDENT_ID, String(lectureId));
      if (response.success) {
        alert("수강신청 성공!");
        query.refetch();
        return;
      }
      alert("수강신청 실패!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={modalCloseHandler}>
      {query.isLoading && <div>로딩중</div>}
      <div className="bg-white rounded-md p-6 w-150 h-150 flex flex-col justify-start items-center gap-5" onClick={(e) => e.stopPropagation()}>
        <div className="w-full flex flex-row justify-between items-center">
          <button className="bg-main text-white rounded-md p-3 cursor-pointer" onClick={registerClickHandler}>
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

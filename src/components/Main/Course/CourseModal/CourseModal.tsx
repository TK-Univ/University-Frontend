import { lectureApi } from "@/api/lecture/lectureApi";
import { DETAIL_COURSE_INFO } from "@/constants/Admin/courseInfo.constants";
import { useQuery } from "@tanstack/react-query";
import CourseModalRow from "./CourseModalRow";

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

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={modalCloseHandler}>
      {query.isLoading && <div>로딩중</div>}
      <div className="bg-white rounded-md p-6 w-150 h-150 flex flex-col justify-start items-center gap-5" onClick={(e) => e.stopPropagation()}>
        {courseData &&
          DETAIL_COURSE_INFO.map((info) => {
            return <CourseModalRow key={info.id} {...info} data={courseData[info.value]} />;
          })}
      </div>
    </div>
  );
};

export default CourseModal;

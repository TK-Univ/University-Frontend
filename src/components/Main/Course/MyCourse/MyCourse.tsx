import { lectureApi } from "@/api/lecture/lectureApi";
import { useQuery } from "@tanstack/react-query";

const MyCourse = () => {
  const query = useQuery({
    queryKey: ["my-course"],
    queryFn: () => {
      const STUDENT_ID = localStorage.getItem("user-id");
      if (STUDENT_ID) {
        return lectureApi.registerInfo(STUDENT_ID);
      }
    },
    retry: false,
  });

  const myCourseData = query.data?.result;
  return (
    <div className="w-full p-5">
      <table className="w-full">
        <thead>
          <tr className="font-bold text-center align-middle">
            <td>강의명</td>
            <td>담당교수</td>
            <td>강의실</td>
            <td>시작시간</td>
            <td>종료시간</td>
            <td>성적</td>
          </tr>
        </thead>
        <tbody>
          {myCourseData &&
            myCourseData.map((course) => {
              const profName = course.professorNames.join(", ");
              return (
                <tr className="text-center align-middle">
                  <td className="py-3">{course.lectName}</td>
                  <td>{profName}</td>
                  <td>{course.classroom}</td>
                  <td>{course.startTime}</td>
                  <td>{course.endTime}</td>
                  <td>{course.grade ? course.grade : "아직 성적이 나오지 않았습니다"}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default MyCourse;

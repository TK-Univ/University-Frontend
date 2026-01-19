import { useQuery } from "@tanstack/react-query";
import { useSelectedStudent } from "../StudentList/SelectedStudentContext";
import { studentApi } from "@/api/student/studentApi";
import StudentDetailRow from "./StudentDetailRow";

const STUDENT_LABEL_MAP: Record<string, string> = {
  id: "학번",
  name: "이름",
  deptName: "학과",
  grade: "학년",
  birth: "생년월일",
  contact: "연락처",
  sex: "성별",
  status: "재학상태",
};

const StudentDetail = () => {
  const { selectedId } = useSelectedStudent();

  const query = useQuery({
    queryKey: ["students-detail", selectedId],
    queryFn: () => {
      if (!selectedId) throw new Error("No student selected");
      return studentApi.detail(selectedId);
    },
    enabled: selectedId != null,
    retry: false,
  });

  const studentData = query.data?.result;

  if (query.isLoading) return <div>로딩중...</div>;
  if (!studentData) return <div>데이터가 없습니다.</div>;

  return (
    <div className="w-full p-5">
      <div className="flex flex-row gap-5">
        <img src="" alt="학생 사진" className="w-80 h-100 bg-white rounded-md" />
        <div className="flex-1 grid grid-cols-2">
          {Object.entries(studentData).map(([key, value]) => {
            const label = STUDENT_LABEL_MAP[key];

            if (!label) return null;

            return <StudentDetailRow key={key} label={label} value={value} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;

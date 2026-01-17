import { useQuery } from "@tanstack/react-query";
import { useSelectedStudent } from "../StudentList/SelectedStudentContext";
import { studentApi } from "@/api/student/studentApi";
import { useEffect } from "react";

const StudentDetail = () => {
  const { selectedId } = useSelectedStudent();

  useEffect(() => {
    console.log(selectedId);
  }, [selectedId]);

  const query = useQuery({
    queryKey: ["students-detail", selectedId],
    queryFn: () => {
      console.log("뭐ㅓ꼬 왜안되");
      if (!selectedId) throw new Error("No student selected");
      return studentApi.detail(selectedId);
    },
    enabled: selectedId != null,
    retry: false,
  });

  return <div>{query.data?.result?.deptName}</div>;
};

export default StudentDetail;

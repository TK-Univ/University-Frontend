import { SelectedStudentProvider } from "./SelectedStudentContext";
import { CONTENT_TYPE, type ContentType } from "@/types/adminContentsTypes";
import { StudentListProvider } from "./StudentListContext";
import StudentList from "./StudentList";
import StudentDetail from "../StudentDetail/StudentDetail";

const StudentProxy = ({ type }: { type: ContentType }) => {
  return (
    <SelectedStudentProvider>
      {type === CONTENT_TYPE.List ? (
        <StudentListProvider>
          <StudentList />
        </StudentListProvider>
      ) : (
        <StudentDetail />
      )}
    </SelectedStudentProvider>
  );
};

export default StudentProxy;

import LectureList from "./LectureList";
import { LectureListProvider } from "./LectureListContext";

const CourseRegister = () => {
  return (
    <LectureListProvider>
      <LectureList />
    </LectureListProvider>
  );
};

export default CourseRegister;

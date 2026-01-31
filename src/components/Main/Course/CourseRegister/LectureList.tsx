import { useState } from "react";
import { useLectureList } from "./LectureListContext";
import LectureListRow from "./LectureListRow";
import CourseModal from "../CourseModal/CourseModal";

const LectureList = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedLectureId, setSelectedLectureId] = useState<number | undefined>(undefined);

  const modalOpenHandler = (id: number) => {
    setModalOpen(true);
    setSelectedLectureId(id);
  };

  const modalCloseHandler = () => {
    setModalOpen(false);
    setSelectedLectureId(undefined);
  };

  const lectureList = useLectureList();
  return (
    <div className="p-5">
      <table className="w-full border-separate border-spacing-y-3 bg-white">
        <thead>
          <tr>
            <th>과목이름</th>
            <th>담당교수</th>
          </tr>
        </thead>
        <tbody>
          {lectureList.map((lecture) => {
            return <LectureListRow {...lecture} key={lecture.id} clickHandler={modalOpenHandler} />;
          })}
        </tbody>
      </table>
      {modalOpen && <CourseModal modalCloseHandler={modalCloseHandler} lectureId={selectedLectureId} />}
    </div>
  );
};

export default LectureList;

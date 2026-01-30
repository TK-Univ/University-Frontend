import { useLectureList } from "./LectureListContext";
import LectureListRow from "./LectureListRow";

const LectureList = () => {
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
            return <LectureListRow {...lecture} key={lecture.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LectureList;

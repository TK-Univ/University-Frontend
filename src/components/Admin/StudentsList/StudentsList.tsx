import { useContext } from "react";
import { StudentsListContext } from "./StudentsListProvider";
import StudentsListRow from "./StudentsListRow";

const StudentsList = () => {
  const studentsList = useContext(StudentsListContext);
  if (!studentsList) return;
  return (
    <div className="p-5">
      <table className="w-full border-separate border-spacing-y-3 bg-white">
        <thead>
          <tr>
            <th>학번</th>
            <th>이름</th>
            <th>학과</th>
          </tr>
        </thead>
        <tbody>
          {studentsList.map((student) => {
            return <StudentsListRow {...student} key={student.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;

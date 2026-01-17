import { CONTENT_TYPE } from "@/types/adminContentsTypes";
import { useSelectedMenu } from "./SelectedMenuContext";
import { useSelectedStudent } from "./SelectedStudentContext";

interface StudentListRowProps {
  id: number;
  name: string;
  department: string;
}

const StudentListRow = ({ id, name, department }: StudentListRowProps) => {
  const { setSelectedId } = useSelectedStudent();
  const { setSelectedMenu } = useSelectedMenu();

  const clickHandler = () => {
    setSelectedId(id);
    setSelectedMenu(CONTENT_TYPE.Detail);
  };

  return (
    <tr onClick={clickHandler} className="cursor-pointer">
      <td className="text-center align-middle">{id}</td>
      <td className="text-center align-middle">{name}</td>
      <td className="text-center align-middle">{department}</td>
    </tr>
  );
};

export default StudentListRow;

import type { BriefProfessorInfo } from "@/types/lectureTypes";

interface LectureRowProps {
  id: number;
  lectName: string;
  professors: BriefProfessorInfo[];
  clickHandler: (id: number) => void;
}

const LectureListRow = ({ id, lectName, professors, clickHandler }: LectureRowProps) => {
  return (
    <tr className="cursor-pointer" onClick={() => clickHandler(id)}>
      <td className="text-center align-middle">{lectName}</td>
      <td className="text-center align-middle">{professors.map((professor) => professor.name)}</td>
    </tr>
  );
};

export default LectureListRow;

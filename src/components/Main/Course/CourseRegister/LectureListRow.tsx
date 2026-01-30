import type { BriefProfessorInfo } from "@/types/lectureTypes";

interface LectureRowProps {
  id: number;
  lectName: string;
  professors: BriefProfessorInfo[];
}

const LectureListRow = ({ lectName, professors }: LectureRowProps) => {
  return (
    <tr className="cursor-pointer">
      <td className="text-center align-middle">{lectName}</td>
      <td className="text-center align-middle">{professors.map((professor) => professor.name)}</td>
    </tr>
  );
};

export default LectureListRow;

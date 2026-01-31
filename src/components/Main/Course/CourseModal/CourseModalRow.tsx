import type { BriefProfessorInfo } from "@/types/lectureTypes";

interface CourseModalRowProps {
  id: number;
  label: string;
  value: string;
  data: string | number | BriefProfessorInfo[];
}

const CourseModalRow = ({ id, label, value, data }: CourseModalRowProps) => {
  const displayValue = Array.isArray(data) ? data.map((professor) => professor.name).join(", ") : data;
  return (
    <div className="w-full flex flex-row justify-around">
      <div className="w-[50%] font-bold">{label}</div>
      <div className="w-[50%]">{displayValue}</div>
    </div>
  );
};

export default CourseModalRow;

import { STUDENT_STATUS_MAP } from "@/components/Admin/StudentDetail/StudentDetailRow";

interface AcademicStatusRowProps {
  label: string;
  value: string;
}

const AcademicStatusRow = ({ label, value }: AcademicStatusRowProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div>{label}</div>
      <div>{label === "재학상태" ? STUDENT_STATUS_MAP[value] : value}</div>
    </div>
  );
};

export default AcademicStatusRow;

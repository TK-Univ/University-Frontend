interface StudentDetailRowProps {
  label: string;
  value: string;
}

export const STUDENT_STATUS_MAP: Record<string, string> = {
  ENROLLED: "재학",
  ON_LEAVE: "휴학",
  WITHDRAWN: "자퇴",
  DEFERRED: "졸업유예",
  GRADUATED: "졸업",
};

const StudentDetailRow = ({ label, value }: StudentDetailRowProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div>{label}</div>
      <div>{label === "재학상태" ? STUDENT_STATUS_MAP[value] : value}</div>
    </div>
  );
};

export default StudentDetailRow;

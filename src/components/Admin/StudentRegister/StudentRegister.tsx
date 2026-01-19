import { STUDENT_INFOS } from "@/constants/Admin/studentRegister.constants";
import StudentRegisterRow from "./StudentRegisterRow";

const StudentRegister = () => {
  return (
    <div className="w-full flex flex-col p-5 gap-5">
      {STUDENT_INFOS.map((info) => (
        <StudentRegisterRow {...info} />
      ))}
    </div>
  );
};

export default StudentRegister;

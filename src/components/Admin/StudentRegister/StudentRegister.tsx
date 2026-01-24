import { STUDENT_INFOS } from "@/constants/Admin/studentRegister.constants";
import StudentRegisterRow from "./StudentRegisterRow";
import { FormProvider, useForm } from "react-hook-form";
import StudentRegisterRowPlural from "./StudentRegisterRowPlural";
import { studentApi } from "@/api/student/studentApi";

const StudentRegister = () => {
  const methods = useForm({
    defaultValues: {
      departments: [],
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    console.log("제출될 데이터:", data);

    if (await studentApi.register(data)) {
      await studentApi.list();
      alert("등록되었습니다!");
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col p-5 gap-5">
        {STUDENT_INFOS.map((info) =>
          info.type === "text" ? (
            <StudentRegisterRow {...info} />
          ) : (
            <StudentRegisterRowPlural {...info} />
          ),
        )}

        <button className="w-full h-12 bg-amber-300 cursor-pointer">등록</button>
      </form>
    </FormProvider>
  );
};

export default StudentRegister;

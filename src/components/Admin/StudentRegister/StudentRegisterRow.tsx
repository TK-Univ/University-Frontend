import { useFormContext } from "react-hook-form";

interface StudentRegisterRowProps {
  id: number;
  label: string;
  value: string;
}

const StudentRegisterRow = ({ id, label, value }: StudentRegisterRowProps) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="w-full flex flex-col gap-3">
      <div>
        <label htmlFor={String(id)} className="font-bold">
          {label}
        </label>
      </div>
      <input
        {...register(value)}
        id={String(id)}
        type="text"
        className="bg-white h-10 rounded-md px-3"
      />
    </div>
  );
};

export default StudentRegisterRow;

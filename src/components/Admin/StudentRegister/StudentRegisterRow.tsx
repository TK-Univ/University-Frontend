interface StudentRegisterRowProps {
  id: number;
  label: string;
}

const StudentRegisterRow = ({ id, label }: StudentRegisterRowProps) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div>
        <label htmlFor={String(id)} className="font-bold">
          {label}
        </label>
      </div>
      <input id={String(id)} type="text" className="bg-white h-10 rounded-md px-3" />
    </div>
  );
};

export default StudentRegisterRow;

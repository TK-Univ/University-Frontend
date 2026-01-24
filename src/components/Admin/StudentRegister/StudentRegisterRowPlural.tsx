import { useEffect, useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

interface StudentRegisterRowPluralProps {
  id: number;
  label: string;
  value: string;
}

const StudentRegisterRowPlural = ({ id, label, value }: StudentRegisterRowPluralProps) => {
  const { control, register, watch } = useFormContext();

  const [inputValue, setInputValue] = useState("");

  const { fields, append, remove } = useFieldArray({
    control,
    name: value,
  });

  const currentDepartments = watch(value);

  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    append(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    console.log(currentDepartments);
  }, [currentDepartments]);

  return (
    <div className="w-full flex flex-col gap-3">
      <div>
        <label htmlFor={String(id)} className="font-bold">
          {label}
        </label>
      </div>
      <div className="flex gap-2">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-white h-10 rounded-md px-3 border flex-1"
          placeholder="추가할 학과를 입력하세요"
        />
        <button
          type="button"
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 rounded-md"
        >
          추가
        </button>
      </div>
      <ul className="flex flex-wrap gap-2">
        {fields.map((field, index) => (
          <li key={field.id} className="bg-gray-200 px-2 py-1 rounded-md flex items-center gap-2">
            <input
              {...register(`${value}.${index}` as const)}
              className="bg-transparent border-none"
              readOnly
            />
            <button type="button" onClick={() => remove(index)} className="text-red-500">
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentRegisterRowPlural;

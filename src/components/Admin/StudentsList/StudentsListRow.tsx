interface StudentsListRowProps {
  id: string;
  name: string;
  department: string;
}

const StudentsListRow = ({ id, name, department }: StudentsListRowProps) => {
  const clickHandler = () => {};

  return (
    <tr onClick={clickHandler}>
      <td className="text-center align-middle">{id}</td>
      <td className="text-center align-middle">{name}</td>
      <td className="text-center align-middle">{department}</td>
    </tr>
  );
};

export default StudentsListRow;

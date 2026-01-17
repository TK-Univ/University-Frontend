import { AdminBodyMenuMapper } from "./AdminBodyMenuMapper";
import { useSelectedMenu } from "./StudentList/SelectedMenuContext";

const AdminBodyBox = () => {
  const { selectedMenu } = useSelectedMenu();

  return (
    <div className="flex-1 min-h-screen bg-lightPurple rounded-xl">
      {AdminBodyMenuMapper[selectedMenu]}
    </div>
  );
};

export default AdminBodyBox;

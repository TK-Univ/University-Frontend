import { AdminBodyMenuMapper } from "./AdminBodyMenuMapper";
import { useAdminSelectedMenu } from "./AdminSelectedMenuContext";

const AdminBodyBox = () => {
  const { selectedMenu } = useAdminSelectedMenu();

  return <div className="flex-1 min-h-screen bg-lightPurple rounded-xl">{AdminBodyMenuMapper[selectedMenu]}</div>;
};

export default AdminBodyBox;

import { ADMIN_SIDEBAR_MENUS } from "@/constants/Admin/adminSideBar.constants";
import SideBar from "../common/SideBar";
import { useAdminSelectedMenu } from "./AdminSelectedMenuContext";

const AdminSideBar = () => {
  const { selectedMenu, setSelectedMenu } = useAdminSelectedMenu();

  return <SideBar source={ADMIN_SIDEBAR_MENUS} selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />;
};

export default AdminSideBar;

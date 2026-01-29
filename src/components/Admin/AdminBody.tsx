import SideBar from "../common/SideBar";
import AdminBodyBox from "./AdminBodyBox";
import { AdminSelectedMenuProvider } from "./AdminSelectedMenuContext";
import { ADMIN_SIDEBAR_MENUS } from "@/constants/Admin/adminSideBar.constants";
import { CONTENT_TYPE, type ContentType } from "@/types/adminContentsTypes";

const AdminBody = () => {
  return (
    <div className="w-full min-h-screen flex flex-row justify-start gap-5 p-5">
      <AdminSelectedMenuProvider initialValue={CONTENT_TYPE.List}>
        <SideBar source={ADMIN_SIDEBAR_MENUS} />
        <AdminBodyBox />
      </AdminSelectedMenuProvider>
    </div>
  );
};

export default AdminBody;

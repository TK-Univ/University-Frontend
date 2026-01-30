import AdminBodyBox from "./AdminBodyBox";
import { AdminSelectedMenuProvider } from "./AdminSelectedMenuContext";
import { CONTENT_TYPE } from "@/types/adminContentsTypes";
import AdminSideBar from "./AdminSideBar";

const AdminBody = () => {
  return (
    <div className="w-full min-h-screen flex flex-row justify-start gap-5 p-5">
      <AdminSelectedMenuProvider initialValue={CONTENT_TYPE.List}>
        <AdminSideBar />
        <AdminBodyBox />
      </AdminSelectedMenuProvider>
    </div>
  );
};

export default AdminBody;

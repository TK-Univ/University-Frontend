import AdminBodyBox from "./AdminBodyBox";
import SideBar from "./SideBar";
import { SelectedMenuProvider } from "./StudentList/SelectedMenuContext";

const AdminBody = () => {
  return (
    <div className="w-full min-h-screen flex flex-row justify-start gap-5 p-5">
      <SelectedMenuProvider>
        <SideBar />
        <AdminBodyBox />
      </SelectedMenuProvider>
    </div>
  );
};

export default AdminBody;

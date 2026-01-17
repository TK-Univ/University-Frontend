import AdminBodyBox from "./AdminBodyBox";
import SideBar from "./SideBar";

const AdminBody = () => {
  return (
    <div className="w-full min-h-screen flex flex-row justify-start gap-5 p-5">
      <SideBar />
      <AdminBodyBox />
    </div>
  );
};

export default AdminBody;

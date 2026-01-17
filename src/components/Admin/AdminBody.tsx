import { CONTENT_TYPE, type ContentType } from "@/types/adminContentsTypes";
import AdminBodyBox from "./AdminBodyBox";
import SideBar from "./SideBar";
import { useState } from "react";

const AdminBody = () => {
  const [selectedMenu, setSelectedMenu] = useState<ContentType>(CONTENT_TYPE.List);

  return (
    <div className="w-full min-h-screen flex flex-row justify-start gap-5 p-5">
      <SideBar setSelectedMenu={setSelectedMenu} />
      <AdminBodyBox selectedMenu={selectedMenu} />
    </div>
  );
};

export default AdminBody;

import type { ContentType } from "@/types/adminContentsTypes";
import { AdminBodyMenuMapper } from "./AdminBodyMenuMapper";

interface AdminBodyBoxProps {
  selectedMenu: ContentType;
}

const AdminBodyBox = ({ selectedMenu }: AdminBodyBoxProps) => {
  return (
    <div className="flex-1 min-h-screen bg-lightPurple rounded-xl">
      {AdminBodyMenuMapper[selectedMenu]}
    </div>
  );
};

export default AdminBodyBox;

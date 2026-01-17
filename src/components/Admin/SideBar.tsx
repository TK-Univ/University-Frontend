import { CONTENT_TYPE, type ContentType } from "@/types/adminContentsTypes";
import type { Dispatch, SetStateAction } from "react";

interface SideBarProps {
  setSelectedMenu: Dispatch<SetStateAction<ContentType>>;
}

const SideBar = ({ setSelectedMenu }: SideBarProps) => {
  return (
    <div className="w-32 min-h-16 flex flex-col justify-start items-center bg-main p-5 rounded-xl">
      <span className="text-white" onClick={() => setSelectedMenu(CONTENT_TYPE.List)}>
        학생정보
      </span>
    </div>
  );
};

export default SideBar;

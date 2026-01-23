import clsx from "clsx";
import { useSelectedMenu } from "./StudentList/SelectedMenuContext";
import { CONTENT_TYPE, type ContentType } from "@/types/adminContentsTypes";
import SideBarRowChild from "./SideBarRowChild";
import { useState } from "react";
import type { SideBarMenu } from "@/constants/Admin/sideBar.constants";

interface SideBarRowProps {
  label: string;
  value: ContentType;
  children: SideBarMenu[] | null;
}

const SideBarRow = ({ label, value, children }: SideBarRowProps) => {
  const [childrenOpen, setChildrenOpen] = useState<boolean>(false);

  const clickHandler = () => {
    setChildrenOpen((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col">
      <span className={"text-white cursor-pointer flex-center"} onClick={clickHandler}>
        {label}
      </span>
      <div>
        {childrenOpen && children?.map((child) => <SideBarRowChild key={child.id} child={child} />)}
      </div>
    </div>
  );
};

export default SideBarRow;

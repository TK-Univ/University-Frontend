import type { SideBarMenu } from "@/constants/common/sideBar.constants";
import SideBarRowChild from "./SideBarRowChild";
import { useState } from "react";

interface SideBarRowProps<T> {
  label: string;
  children: SideBarMenu<T>[] | null;
}

const SideBarRow = <T,>({ label, children }: SideBarRowProps<T>) => {
  const [childrenOpen, setChildrenOpen] = useState<boolean>(false);

  const clickHandler = () => {
    setChildrenOpen((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col">
      <span className={"text-white cursor-pointer flex-center"} onClick={clickHandler}>
        {label}
      </span>
      <div>{childrenOpen && children?.map((child) => <SideBarRowChild key={child.id} child={child} />)}</div>
    </div>
  );
};

export default SideBarRow;

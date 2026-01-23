import type { SideBarMenu } from "@/constants/Admin/sideBar.constants";
import { useSelectedMenu } from "./StudentList/SelectedMenuContext";
import { CONTENT_TYPE } from "@/types/adminContentsTypes";
import clsx from "clsx";

interface SideBarRowChildProps {
  child: SideBarMenu;
}

const SideBarRowChild = ({ child }: SideBarRowChildProps) => {
  const { selectedMenu, setSelectedMenu } = useSelectedMenu();

  const clickHandler = () => {
    if (child.value === CONTENT_TYPE.Detail) return;
    setSelectedMenu(child.value);
  };
  return (
    <div className="w-full flex-center text-black bg-gray-300" onClick={clickHandler}>
      {child ? (
        <span
          className={clsx([
            "cursor-pointer flex-center",
            selectedMenu === child.value && "text-sub",
          ])}
        >
          {child.label}
        </span>
      ) : (
        "하위 목록이 없습니다"
      )}
    </div>
  );
};

export default SideBarRowChild;

import { CONTENT_TYPE } from "@/types/adminContentsTypes";
import clsx from "clsx";
import { useSideBarContext } from "./SideBarContext";
import type { SideBarMenu } from "@/constants/common/sideBar.constants";

interface SideBarRowChildProps<T> {
  child: SideBarMenu<T>;
}

const SideBarRowChild = <T,>({ child }: SideBarRowChildProps<T>) => {
  const { selectedMenu, setSelectedMenu } = useSideBarContext();

  const clickHandler = () => {
    if (child.value === CONTENT_TYPE.Detail) return;
    setSelectedMenu(child.value);
  };

  return (
    <div className="w-full flex-center text-black bg-gray-300" onClick={clickHandler}>
      {child ? (
        <span className={clsx(["cursor-pointer flex-center", selectedMenu === child.value && "text-sub"])}>{child.label}</span>
      ) : (
        "하위 목록이 없습니다"
      )}
    </div>
  );
};

export default SideBarRowChild;

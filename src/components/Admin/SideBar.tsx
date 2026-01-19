import { SIDEBAR_MENUS } from "@/constants/sideBar.constants";
import SideBarRow from "./SideBarRow";

const SideBar = () => {
  return (
    <div className="w-32 min-h-16 flex flex-col justify-start items-center gap-5 bg-main p-5 rounded-xl">
      {SIDEBAR_MENUS.map((menu) => (
        <SideBarRow key={menu.id} label={menu.label} value={menu.value} />
      ))}
    </div>
  );
};

export default SideBar;

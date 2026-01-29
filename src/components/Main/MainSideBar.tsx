import { MAIN_SIDEBAR_MENUS } from "@/constants/Main/mainSideBar.constants";
import SideBar from "../common/SideBar";
import { useMainSelectedMenu } from "./MainSelectedMenuContext";

const MainSideBar = () => {
  const { selectedMenu, setSelectedMenu } = useMainSelectedMenu();

  return <SideBar source={MAIN_SIDEBAR_MENUS} selectedMenu={selectedMenu} onMenuSelect={setSelectedMenu} />;
};

export default MainSideBar;

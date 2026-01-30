import { MainBodyMenuMapper } from "./MainBodyMenuMapper";
import { useMainSelectedMenu } from "./MainSelectedMenuContext";

const MainBodyBox = () => {
  const { selectedMenu } = useMainSelectedMenu();

  return <div className="flex-1 min-h-screen bg-lightPurple rounded-xl">{MainBodyMenuMapper[selectedMenu]}</div>;
};

export default MainBodyBox;

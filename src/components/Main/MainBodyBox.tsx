import { MainBodyMenuMapper } from './MainBodyMenuMapper';
import { useMainSelectedMenu } from './MainSelectedMenuContext';

const MainBodyBox = () => {
  const { selectedMenu } = useMainSelectedMenu();

  return <div className="flex-1 min-h-screen bg-white rounded-xl border-gray-300 border-2">{MainBodyMenuMapper[selectedMenu]}</div>;
};

export default MainBodyBox;

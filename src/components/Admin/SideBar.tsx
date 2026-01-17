import { CONTENT_TYPE } from "@/types/adminContentsTypes";
import { useSelectedMenu } from "./StudentList/SelectedMenuContext";

const SideBar = () => {
  const { setSelectedMenu } = useSelectedMenu();

  return (
    <div className="w-32 min-h-16 flex flex-col justify-start items-center bg-main p-5 rounded-xl">
      <span className="text-white" onClick={() => setSelectedMenu(CONTENT_TYPE.List)}>
        학생정보
      </span>
    </div>
  );
};

export default SideBar;

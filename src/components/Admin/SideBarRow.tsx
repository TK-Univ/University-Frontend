import clsx from "clsx";
import { useSelectedMenu } from "./StudentList/SelectedMenuContext";
import { CONTENT_TYPE, type ContentType } from "@/types/adminContentsTypes";

interface SideBarRowProps {
  label: string;
  value: ContentType;
}

const SideBarRow = ({ label, value }: SideBarRowProps) => {
  const { selectedMenu, setSelectedMenu } = useSelectedMenu();

  const clickHandler = () => {
    if (value === CONTENT_TYPE.Detail) return;
    setSelectedMenu(value);
  };

  return (
    <span
      className={clsx(["text-white cursor-pointer", selectedMenu === value && "text-yellow-300"])}
      onClick={clickHandler}
    >
      {label}
    </span>
  );
};

export default SideBarRow;

// import { type SideBarMenu } from "@/constants/Admin/adminSideBar.constants";
// import SideBarRow from "./SideBarRow";

// const SideBar = ({ source }: { source: SideBarMenu[] }) => {
//   return (
//     <div className="w-32 min-h-16 flex flex-col justify-start items-center gap-5 bg-main p-5 rounded-xl">
//       {source.map((menu) => (
//         <SideBarRow key={menu.id} label={menu.label} value={menu.value} children={menu.children} />
//       ))}
//     </div>
//   );
// };

// export default SideBar;
// src/components/common/SideBar.tsx
import { type SideBarMenu } from "@/constants/Admin/adminSideBar.constants";
import SideBarRow from "./SideBarRow";
import { SideBarProvider } from "./SideBarContext";

interface SideBarProps<T> {
  source: SideBarMenu[];
  selectedMenu: T;
  onMenuSelect: (value: T) => void;
}

const SideBar = <T,>({ source, selectedMenu, onMenuSelect }: SideBarProps<T>) => {
  return (
    <SideBarProvider value={{ selectedMenu, setSelectedMenu: onMenuSelect }}>
      <div className="w-32 min-h-16 flex flex-col justify-start items-center gap-5 bg-main p-5 rounded-xl">
        {source.map((menu) => (
          <SideBarRow key={menu.id} label={menu.label} value={menu.value} children={menu.children} />
        ))}
      </div>
    </SideBarProvider>
  );
};

export default SideBar;

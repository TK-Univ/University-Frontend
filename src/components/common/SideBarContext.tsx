import { createContext, useContext } from "react";

type SideBarContextState<T = any> = {
  selectedMenu: T;
  setSelectedMenu: (value: T) => void;
};

const SideBarContext = createContext<SideBarContextState | undefined>(undefined);

export const SideBarProvider = SideBarContext.Provider;

export const useSideBarContext = () => {
  const ctx = useContext(SideBarContext);
  if (!ctx) throw new Error("SideBar 컴포넌트 내부에서만 사용할 수 있습니다.");
  return ctx;
};

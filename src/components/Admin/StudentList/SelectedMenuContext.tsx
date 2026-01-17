import { CONTENT_TYPE, type ContentType } from "@/types/adminContentsTypes";
import { createContext, useContext, useState, type Dispatch, type SetStateAction } from "react";

type SelectedMenuState = {
  selectedMenu: ContentType;
  setSelectedMenu: Dispatch<SetStateAction<ContentType>>;
};

export const SelectedMenuContext = createContext<SelectedMenuState | undefined>(undefined);

export const SelectedMenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState<ContentType>(CONTENT_TYPE.List);

  return (
    <SelectedMenuContext.Provider value={{ selectedMenu, setSelectedMenu }}>
      {children}
    </SelectedMenuContext.Provider>
  );
};

export const useSelectedMenu = (): SelectedMenuState => {
  const ctx = useContext(SelectedMenuContext);
  if (!ctx) throw new Error("useSelectedMenu must be used within SelectedMenuProvider");
  return ctx;
};

import React, { createContext, useContext, useState } from "react";

type SelectedStudentState = {
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
};

const SelectedStudentContext = createContext<SelectedStudentState | undefined>(undefined);

export const SelectedStudentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  return <SelectedStudentContext.Provider value={{ selectedId, setSelectedId }}>{children}</SelectedStudentContext.Provider>;
};

export const useSelectedStudent = (): SelectedStudentState => {
  const ctx = useContext(SelectedStudentContext);
  if (!ctx) throw new Error("useSelectedStudent must be used within SelectedStudentProvider");
  return ctx;
};
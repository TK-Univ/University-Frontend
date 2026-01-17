import { studentApi } from "@/api/student/studentApi";
import type { BriefStudentInfo } from "@/types/studentTypes";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";

export const StudentListContext = createContext<BriefStudentInfo[] | undefined>(undefined);

export const StudentListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const query = useQuery({
    queryKey: ["student-list"],
    queryFn: () => studentApi.list(),
    retry: false,
  });

  return (
    <StudentListContext.Provider value={query.data?.result ?? []}>
      {children}
    </StudentListContext.Provider>
  );
};

export const useStudentList = (): BriefStudentInfo[] => {
  const ctx = useContext(StudentListContext);
  if (!ctx) throw new Error("useStudentList must be used within StudentListProvider");
  return ctx;
};

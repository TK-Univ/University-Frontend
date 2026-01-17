import { studentApi } from "@/api/student/studentApi";
import type { BriefStudentInfo } from "@/types/studentsListTypes";
import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";

export const StudentsListContext = createContext<BriefStudentInfo[] | undefined>(undefined);

interface ContextProviderProps {
  children: React.ReactNode;
}

export function StudentsListProvider({ children }: ContextProviderProps) {
  const query = useQuery({
    queryKey: ["students-list"],
    queryFn: () => studentApi.list(),
    retry: false,
  });

  return (
    <StudentsListContext.Provider value={query.data?.result}>
      {children}
    </StudentsListContext.Provider>
  );
}

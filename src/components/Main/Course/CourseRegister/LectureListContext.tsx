import { lectureApi } from "@/api/lecture/lectureApi";
import type { BriefLectureInfo } from "@/types/lectureTypes";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";

export const LectureListContext = createContext<BriefLectureInfo[] | undefined>(undefined);

export const LectureListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const query = useQuery({
    queryKey: ["lecture-list"],
    queryFn: () => lectureApi.list(),
    retry: false,
  });

  return <LectureListContext.Provider value={query.data?.result ?? []}>{children}</LectureListContext.Provider>;
};

export const useLectureList = (): BriefLectureInfo[] => {
  const ctx = useContext(LectureListContext);
  if (!ctx) throw new Error("useLectureList must be used within LectureListProvider");
  return ctx;
};

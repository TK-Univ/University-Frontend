import type { BriefStudentInfo, StudentInfo } from "@/types/studentTypes";
import { client, type ApiResponse } from "../client";

export const studentApi = {
  list: async () => {
    return await client.get("student/list").json<ApiResponse<BriefStudentInfo[]>>();
  },
  detail: async (id: number) => {
    return await client.get(`student/detail/${id}`).json<ApiResponse<StudentInfo>>();
  },
};

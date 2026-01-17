import type { BriefStudentInfo } from "@/types/studentsListTypes";
import { client, type ApiResponse } from "../client";

export const studentApi = {
  list: async () => {
    return await client.get("student/list").json<ApiResponse<BriefStudentInfo[]>>();
  },
};

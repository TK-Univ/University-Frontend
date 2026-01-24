import type { BriefStudentInfo, StudentInfo, StudentRegisterDTO } from "@/types/studentTypes";
import { client, type ApiResponse } from "../client";

export const studentApi = {
  list: async () => {
    return await client.get("student/list").json<ApiResponse<BriefStudentInfo[]>>();
  },
  detail: async (id: number) => {
    return await client.get(`student/detail/${id}`).json<ApiResponse<StudentInfo>>();
  },
  register: async (data: StudentRegisterDTO) => {
    return await client.post("student/register", { json: data }).json<ApiResponse<boolean>>();
  },
};

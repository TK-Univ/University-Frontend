import type { BriefLectureInfo, DetailLectureInfo, EnrollmentInfo } from "@/types/lectureTypes";
import { client, type ApiResponse } from "../client";

export const lectureApi = {
  list: async () => {
    return await client.get("lecture/list").json<ApiResponse<BriefLectureInfo[]>>();
  },
  detail: async (lectureId: number) => {
    return await client.get(`lecture/info/${lectureId}`).json<ApiResponse<DetailLectureInfo>>();
  },
  register: async (studentId: string, lectureId: string) => {
    const data = {
      lectureId: lectureId,
      studentId: studentId,
    };
    return await client.post("enrollment/register", { json: data }).json<ApiResponse<string>>();
  },
  registerInfo: async (studentId: string) => {
    return await client.get(`enrollment/list/${studentId}`).json<ApiResponse<EnrollmentInfo[]>>();
  },
};

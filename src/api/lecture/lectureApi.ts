import type { BriefLectureInfo, DetailLectureInfo } from "@/types/lectureTypes";
import { client, type ApiResponse } from "../client";

export const lectureApi = {
  list: async () => {
    return await client.get("lecture/list").json<ApiResponse<BriefLectureInfo[]>>();
  },
  detail: async (lectureId: number) => {
    return await client.get(`lecture/info/${lectureId}`).json<ApiResponse<DetailLectureInfo>>();
  },
};

import type { BriefLectureInfo } from "@/types/lectureTypes";
import { client, type ApiResponse } from "../client";

export const lectureApi = {
  list: async () => {
    return await client.get("lecture/list").json<ApiResponse<BriefLectureInfo[]>>();
  },
};

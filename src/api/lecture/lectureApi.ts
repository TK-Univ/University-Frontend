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
  /**
   *
   * @param studentId
   * @param lectureId
   * @returns 대기열 진입 메시지
   */
  enqueue: async (studentId: string, lectureId: string) => {
    const data = {
      lectureId: lectureId,
      studentId: studentId,
    };
    const response = await client.post("enrollment/register", { json: data }).json<ApiResponse<string>>();
    return response.result;
  },
  /**
   *
   * @param studentId
   * @param lectureId
   * @returns 대기 순번
   */
  getOrder: async (studentId: string, lectureId: string) => {
    const response = await client.get(`enrollment/order?studentId=${studentId}&lectureId=${lectureId}`).json<ApiResponse<number>>();
    return response.result;
  },
  /**
   *
   * @param studentId
   * @param lectureId
   * @returns 최종결과("SUCCESS", "FAIL:사유", "PROCESSING")
   */
  getResult: async (studentId: string, lectureId: string) => {
    const response = await client.get(`enrollment/result?studentId=${studentId}&lectureId=${lectureId}`).json<ApiResponse<string>>();
    return response.result;
  },
  registerInfo: async (studentId: string) => {
    return await client.get(`enrollment/list/${studentId}`).json<ApiResponse<EnrollmentInfo[]>>();
  },
};

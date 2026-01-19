import type { LoginResponse } from "@/types/authTypes";
import { type ApiResponse, client } from "../client";

export const authApi = {
  login: async (userId: string, password: string) => {
    const data = {
      userId: userId,
      password: password,
    };
    return await client.post("auth/login", { json: data }).json<ApiResponse<LoginResponse>>();
  },
};

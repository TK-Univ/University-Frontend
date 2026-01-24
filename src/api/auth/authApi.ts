import type { LoginResponse, PasswordSetResponse } from "@/types/authTypes";
import { type ApiResponse, client } from "../client";

export const authApi = {
  login: async (userId: string, password: string) => {
    const data = {
      userId: userId,
      password: password,
    };
    return await client.post("auth/login", { json: data }).json<ApiResponse<LoginResponse>>();
  },
  requestAuthCode: async (email: string) => {
    const data = {
      email: email,
    };
    return await client.post("auth/email-send", { json: data }).json<ApiResponse>();
  },
  verifyAuthCode: async (email: string, authCode: string) => {
    const data = {
      email: email,
      code: authCode,
    };
    return await client.post("auth/email-verify", { json: data }).json<ApiResponse>();
  },
  setPassword: async (email: string, password: string) => {
    const data = {
      email: email,
      password: password,
    };
    return await client.post("auth/set-password", { json: data }).json<ApiResponse<PasswordSetResponse>>();
  },
};

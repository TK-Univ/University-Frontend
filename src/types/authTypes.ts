export interface LoginResponse {
  id: string;
  name: string;
  auth: string;
  token: string;
}

export interface PasswordSetResponse {
  id: string;
}

//
export const AUTH = {
  Admin: "ADMIN",
  Student: "STUDENT",
} as const;

export type Auth = (typeof AUTH)[keyof typeof AUTH];

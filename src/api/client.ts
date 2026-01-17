import ky from "ky";

export interface ApiResponse<T = unknown> {
  success: boolean;
  code: string;
  message: string;
  result?: T;
}

export const client = ky.create({
  prefixUrl: import.meta.env.VITE_API_URL,
  hooks: {
    afterResponse: [
      async (request, options, response) => {
        const apiResponse = (await response.clone().json()) as ApiResponse;
      },
    ],
  },
  retry: {
    limit: 2,
    methods: ["get", "put", "head", "delete", "options", "trace"],
  },
});

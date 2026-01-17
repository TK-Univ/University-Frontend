export const CONTENT_TYPE = {
  List: "LIST",
  Detail: "DETAIL",
} as const;

export type ContentType = (typeof CONTENT_TYPE)[keyof typeof CONTENT_TYPE];

export const CONTENT_TYPE = {
  MyInfo: "MY_INFO",
  MyGrade: "MY_GRADE",
  CourseRegister: "COURSE_REGISTER",
  MyCourse: "MY_COURSE",
} as const;

export type ContentType = (typeof CONTENT_TYPE)[keyof typeof CONTENT_TYPE];

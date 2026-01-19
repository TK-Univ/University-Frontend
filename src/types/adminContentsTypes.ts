export const CONTENT_TYPE = {
  List: "LIST",
  Detail: "DETAIL",
  StudentRegister: "STUDENT_REGISTER",
  ProfessorRegister: "PROFESSOR_REGISTER",
  StaffRegister: "STAFF_REGISTER",
} as const;

export type ContentType = (typeof CONTENT_TYPE)[keyof typeof CONTENT_TYPE];

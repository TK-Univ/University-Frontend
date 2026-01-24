export interface BriefStudentInfo {
  id: number;
  name: string;
  department: string;
}

export interface StudentInfo {
  id: number;
  name: string;
  birth: string;
  sex: string;
  grade: number;
  status: StudentStatus;
  contact: string;
  deptName: string;
}

export interface StudentRegisterDTO {
  name: string;
  birth: string;
  sex: string;
  status: StudentStatus;
  contact: string;
  deptName: string;
}

//

export const STUDENT_STATUS = {
  Enrolled: "ENROLLED",
  OnLeave: "ON_LEAVE",
  Withdrawn: "WITHDRAWN",
  Deferred: "DEFERRED",
  Graduated: "GRADUATED",
} as const;

export type StudentStatus = (typeof STUDENT_STATUS)[keyof typeof STUDENT_STATUS];

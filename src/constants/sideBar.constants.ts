import { CONTENT_TYPE } from "@/types/adminContentsTypes";

export const SIDEBAR_MENUS = [
  {
    id: 0,
    label: "학생정보",
    value: CONTENT_TYPE.List,
  },
  {
    id: 1,
    label: "학생상세",
    value: CONTENT_TYPE.Detail,
  },
  {
    id: 2,
    label: "학생등록",
    value: CONTENT_TYPE.StudentRegister,
  },
  {
    id: 3,
    label: "교수등록",
    value: CONTENT_TYPE.ProfessorRegister,
  },
  {
    id: 4,
    label: "교직원등록",
    value: CONTENT_TYPE.StaffRegister,
  },
];

import { CONTENT_TYPE, type ContentType } from "@/types/adminContentsTypes";

export interface SideBarMenu {
  id: number;
  label: string;
  value: ContentType;
  children: SideBarMenu[] | null;
}

export const ADMIN_SIDEBAR_MENUS: SideBarMenu[] = [
  {
    id: 1,
    label: "학생정보",
    value: CONTENT_TYPE.List,
    children: [
      {
        id: 1,
        label: "학생목록",
        value: CONTENT_TYPE.List,
        children: null,
      },
      {
        id: 2,
        label: "학생상세",
        value: CONTENT_TYPE.Detail,
        children: null,
      },
    ],
  },
  {
    id: 2,
    label: "데이터등록",
    value: CONTENT_TYPE.StaffRegister,
    children: [
      {
        id: 1,
        label: "학생등록",
        value: CONTENT_TYPE.StudentRegister,
        children: null,
      },
      {
        id: 2,
        label: "교수등록",
        value: CONTENT_TYPE.ProfessorRegister,
        children: null,
      },
      {
        id: 3,
        label: "교직원등록",
        value: CONTENT_TYPE.StaffRegister,
        children: null,
      },
    ],
  },
];

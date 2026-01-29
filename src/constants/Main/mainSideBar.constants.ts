import { CONTENT_TYPE } from "@/types/adminContentsTypes";
import type { SideBarMenu } from "../Admin/adminSideBar.constants";

export const MAIN_SIDEBAR_MENUS: SideBarMenu[] = [
  {
    id: 1,
    label: "학적",
    value: CONTENT_TYPE.List,
    children: [
      {
        id: 1,
        label: "내 학적",
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
    label: "수업",
    value: CONTENT_TYPE.StaffRegister,
    children: [
      {
        id: 1,
        label: "수강신청",
        value: CONTENT_TYPE.StudentRegister,
        children: null,
      },
      {
        id: 2,
        label: "강의목록",
        value: CONTENT_TYPE.StudentRegister,
        children: null,
      },
    ],
  },
  {
    id: 3,
    label: "성적",
    value: CONTENT_TYPE.StaffRegister,
    children: [
      {
        id: 1,
        label: "성적확인",
        value: CONTENT_TYPE.StudentRegister,
        children: null,
      },
    ],
  },
];

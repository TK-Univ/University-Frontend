import { CONTENT_TYPE, type ContentType } from "@/types/mainContentsTypes";
import type { SideBarMenu } from "../common/sideBar.constants";

export type MainSideBarMenu = SideBarMenu<ContentType>;

export const MAIN_SIDEBAR_MENUS: MainSideBarMenu[] = [
  {
    id: 1,
    label: "학적",
    value: CONTENT_TYPE.MyInfo,
    children: [
      {
        id: 1,
        label: "내 학적",
        value: CONTENT_TYPE.MyInfo,
        children: null,
      },
    ],
  },
  {
    id: 2,
    label: "수업",
    value: CONTENT_TYPE.CourseRegister,
    children: [
      {
        id: 1,
        label: "수강신청",
        value: CONTENT_TYPE.CourseRegister,
        children: null,
      },
      {
        id: 2,
        label: "강의목록",
        value: CONTENT_TYPE.CourseRegister,
        children: null,
      },
    ],
  },
  {
    id: 3,
    label: "성적",
    value: CONTENT_TYPE.MyGrade,
    children: [
      {
        id: 1,
        label: "성적확인",
        value: CONTENT_TYPE.MyGrade,
        children: null,
      },
    ],
  },
];

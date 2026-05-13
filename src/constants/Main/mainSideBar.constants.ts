import { CONTENT_TYPE, type ContentType } from '@/types/mainContentsTypes';
import type { SideBarMenu } from '../common/sideBar.constants';
import Profile from '@/assets/profile.svg?react';
import Book from '@/assets/book.svg?react';

export type MainSideBarMenu = SideBarMenu<ContentType>;

export const MAIN_SIDEBAR_MENUS: MainSideBarMenu[] = [
  {
    id: 1,
    label: '학적',
    icon: Profile,
    value: CONTENT_TYPE.MyInfo,
    children: [
      {
        id: 1,
        label: '내 학적',
        icon: Profile,
        value: CONTENT_TYPE.MyInfo,
        children: null,
      },
    ],
  },
  {
    id: 2,
    label: '수업',
    icon: Book,
    value: CONTENT_TYPE.CourseRegister,
    children: [
      {
        id: 1,
        label: '수강신청',
        icon: Profile,
        value: CONTENT_TYPE.CourseRegister,
        children: null,
      },
      {
        id: 2,
        label: '내 강의',
        icon: Profile,
        value: CONTENT_TYPE.MyCourse,
        children: null,
      },
    ],
  },
];

import { CONTENT_TYPE, type ContentType } from '@/types/mainContentsTypes';
import { type JSX } from 'react';
import AcademicStatus from './AcademicStatus/AcademicStatus';
import CourseRegister from './Course/CourseRegister/CourseRegister';
import MyCourse from './Course/MyCourse/MyCourse';
import NotificationBox from './Notification/NotificationBox';
import { NotificationListProvider } from './Notification/NotificationListContext';

export const MainBodyMenuMapper: Record<ContentType, JSX.Element> = {
  [CONTENT_TYPE.MyInfo]: <AcademicStatus />,
  [CONTENT_TYPE.CourseRegister]: <CourseRegister />,
  [CONTENT_TYPE.MyCourse]: <MyCourse />,
  [CONTENT_TYPE.Notification]: (
    <NotificationListProvider>
      <NotificationBox />
    </NotificationListProvider>
  ),
};

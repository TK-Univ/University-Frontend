export const CONTENT_TYPE = {
  MyInfo: 'MY_INFO',
  CourseRegister: 'COURSE_REGISTER',
  MyCourse: 'MY_COURSE',
  Notification: 'NOTIFICATION',
} as const;

export type ContentType = (typeof CONTENT_TYPE)[keyof typeof CONTENT_TYPE];

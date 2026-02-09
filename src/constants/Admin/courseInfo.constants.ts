import type { DetailLectureInfo } from "@/types/lectureTypes";

type CourseInfo = {
  id: number;
  label: string;
  value: keyof DetailLectureInfo;
};

export const DETAIL_COURSE_INFO: CourseInfo[] = [
  { id: 0, label: "강의명", value: "lectName" },
  { id: 1, label: "강의연도", value: "lectureYear" },
  { id: 2, label: "강의학기", value: "lectureTerm" },
  { id: 3, label: "강의실", value: "classroom" },
  { id: 4, label: "시작시간", value: "startTime" },
  { id: 5, label: "종료시간", value: "endTime" },
  { id: 6, label: "수강인원", value: "enrollCnt" },
  { id: 7, label: "정원", value: "maxEnrollCnt" },
  { id: 8, label: "학수번호", value: "subjectId" },
  { id: 9, label: "담당교수", value: "professors" },
];

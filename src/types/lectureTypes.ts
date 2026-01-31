export interface BriefLectureInfo {
  id: number;
  lectName: string;
  professors: BriefProfessorInfo[];
}

export interface BriefProfessorInfo {
  id: string;
  name: string;
}

export interface DetailLectureInfo {
  id: number;
  lectName: string;
  professors: BriefProfessorInfo[];
  lectureYear: number;
  lectureTerm: number;
  classroom: string;
  startTime: string;
  endTime: string;
  enrollCnt: number;
  maxEnrollCnt: number;
  subjectId: string;
}

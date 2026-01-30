export interface BriefLectureInfo {
  id: number;
  lectName: string;
  professors: BriefProfessorInfo[];
}

export interface BriefProfessorInfo {
  id: string;
  name: string;
}

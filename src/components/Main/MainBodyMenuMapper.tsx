import { CONTENT_TYPE, type ContentType } from "@/types/mainContentsTypes";
import { type JSX } from "react";
import AcademicStatus from "./AcademicStatus/AcademicStatus";

export const MainBodyMenuMapper: Record<ContentType, JSX.Element> = {
  [CONTENT_TYPE.MyInfo]: <AcademicStatus />,
  [CONTENT_TYPE.MyGrade]: <AcademicStatus />,
  [CONTENT_TYPE.CourseRegister]: <AcademicStatus />,
};

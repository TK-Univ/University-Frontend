import { CONTENT_TYPE, type ContentType } from "@/types/adminContentsTypes";
import { type JSX } from "react";
import StudentProxy from "./StudentList/StudentProxy";
import StudentRegister from "./StudentRegister/StudentRegister";

export const AdminBodyMenuMapper: Record<ContentType, JSX.Element> = {
  [CONTENT_TYPE.List]: <StudentProxy type={CONTENT_TYPE.List} />,
  [CONTENT_TYPE.Detail]: <StudentProxy type={CONTENT_TYPE.Detail} />,
  [CONTENT_TYPE.StudentRegister]: <StudentRegister />,
  [CONTENT_TYPE.ProfessorRegister]: <StudentProxy type={CONTENT_TYPE.ProfessorRegister} />,
  [CONTENT_TYPE.StaffRegister]: <StudentProxy type={CONTENT_TYPE.StaffRegister} />,
};

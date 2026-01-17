import { CONTENT_TYPE, type ContentType } from "@/types/adminContentsTypes";
import { type JSX } from "react";
import { StudentsListProvider } from "./StudentsList/StudentsListProvider";
import StudentsList from "./StudentsList/StudentsList";

export const AdminBodyMenuMapper: Record<ContentType, JSX.Element> = {
  [CONTENT_TYPE.List]: (
    <StudentsListProvider>
      <StudentsList />
    </StudentsListProvider>
  ),
  [CONTENT_TYPE.Detail]: <div>ccc</div>,
};

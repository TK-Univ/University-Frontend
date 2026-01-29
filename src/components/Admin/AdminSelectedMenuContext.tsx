import { type ContentType } from "@/types/adminContentsTypes";
import { createSelectedContext } from "../common/SelectedMenuContext";

export const { Provider: AdminSelectedMenuProvider, useSelected: useAdminSelectedMenu } = createSelectedContext<ContentType>();

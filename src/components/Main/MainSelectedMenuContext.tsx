import type { ContentType } from "@/types/mainContentsTypes";
import { createSelectedContext } from "../common/SelectedMenuContext";

export const { Provider: MainSelectedMenuProvider, useSelected: useMainSelectedMenu } = createSelectedContext<ContentType>();

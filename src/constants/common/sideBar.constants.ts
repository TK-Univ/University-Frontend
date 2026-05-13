import { type FunctionComponent, type SVGProps } from 'react';

export interface SideBarMenu<T> {
  id: number;
  label: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  value: T;
  children: SideBarMenu<T>[] | null;
}

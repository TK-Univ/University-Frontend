export interface SideBarMenu<T> {
  id: number;
  label: string;
  value: T;
  children: SideBarMenu<T>[] | null;
}

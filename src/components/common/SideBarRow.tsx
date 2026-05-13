import type { SideBarMenu } from '@/constants/common/sideBar.constants';
import SideBarRowChild from './SideBarRowChild';
import { useState, type FunctionComponent, type SVGProps } from 'react';

interface SideBarRowProps<T> {
  label: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  children: SideBarMenu<T>[] | null;
}

const SideBarRow = <T,>({ label, icon, children }: SideBarRowProps<T>) => {
  const [childrenOpen, setChildrenOpen] = useState<boolean>(false);

  const Icon = icon;

  const clickHandler = () => {
    setChildrenOpen((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-2 border-b border-gray-300">
      <div className={'flex flex-row gap-2 text-black cursor-pointer'} onClick={clickHandler}>
        <Icon className="w-5 h-5 mr-2" />
        {label}
      </div>
      {childrenOpen && (
        <div className="flex flex-col mt-4 gap-2 text-sm">
          {children?.map((child) => (
            <SideBarRowChild key={child.id} child={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBarRow;

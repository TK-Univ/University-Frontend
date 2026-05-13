import MainBodyBox from './MainBodyBox';
import { CONTENT_TYPE } from '@/types/mainContentsTypes';
import { MainSelectedMenuProvider } from './MainSelectedMenuContext';
import MainSideBar from './MainSideBar';

const MainBody = () => {
  return (
    <div className="w-full min-h-screen flex flex-row justify-start gap-5 p-5 bg-lightPurple">
      <MainSelectedMenuProvider initialValue={CONTENT_TYPE.MyInfo}>
        <MainSideBar />
        <MainBodyBox />
      </MainSelectedMenuProvider>
    </div>
  );
};

export default MainBody;

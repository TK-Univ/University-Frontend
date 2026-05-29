import { useState } from 'react';
import { useNotificationList } from './NotificationListContext';
import NotificationRow from './NotificationRow';
import LeftArrow from '@/assets/left-arrow.svg?react';
import RightArrow from '@/assets/right-arrow.svg?react';

const NotificationBox = () => {
  const { list, page, setPage } = useNotificationList();
  const [pageOrder, setPageOrder] = useState<number>(0); // 페이지 리스트 회차
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1 + pageOrder);

  return (
    <div className="w-full p-5 flex flex-col gap-5">
      <div className="text-2xl">공지사항</div>
      <div className="w-full flex flex-col justify-start items-center">
        {list.map((notify, idx) => {
          return <NotificationRow data={notify} key={idx} />;
        })}
      </div>
      <div className="w-full flex flex-row items-center justify-center gap-5">
        <LeftArrow
          className="w-8 h-8 cursor-pointer"
          onClick={() =>
            setPageOrder((prev) => {
              setPage(prev - 10);
              return prev - 10;
            })
          }
        />
        {numbers.map((number) => (
          <div
            key={number}
            onClick={() => setPage(number - 1)}
            className={`flex items-center justify-center cursor-pointer border w-8 p-1 rounded transition-colors ${
              number === page + 1 ? 'bg-blue-500 text-white border-blue-500 font-bold' : 'bg-white text-black border-black hover:bg-gray-100'
            }`}
          >
            {number}
          </div>
        ))}
        <RightArrow
          className="w-8 h-8 cursor-pointer"
          onClick={() => {
            setPageOrder((prev) => {
              setPage(prev + 10);
              return prev + 10;
            });
          }}
        />
      </div>
    </div>
  );
};

export default NotificationBox;

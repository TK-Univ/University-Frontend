import { useNotificationList } from './NotificationListContext';
import NotificationRow from './NotificationRow';

const NotificationBox = () => {
  const { list, page, setPage } = useNotificationList();
  return (
    <div>
      <div>테스트입니다</div>
      {list.map((notify, idx) => {
        return <NotificationRow data={notify} key={idx} />;
      })}
    </div>
  );
};

export default NotificationBox;

import type { Notification } from '@/types/notificationTypes';

const NotificationRow = ({ data }: { data: Notification }) => {
  return (
    <div>
      <span>{data.title}</span>
      <span>{data.writer}</span>
      <span>{data.content}</span>
    </div>
  );
};

export default NotificationRow;

import type { NotificationFormat } from '@/types/notificationTypes';
import { formatDate } from '@/util/dateFormatter';

const NotificationRow = ({ data }: { data: NotificationFormat }) => {
  return (
    <div className="w-full flex flex-row justify-between items-center border-b border-black first:border-t p-3">
      <span>{data.title}</span>
      <span>
        {data.writerName} <span> | </span>
        {formatDate(data.updatedAt)}
      </span>
    </div>
  );
};

export default NotificationRow;

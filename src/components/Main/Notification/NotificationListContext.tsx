import { notificationApi } from '@/api/notification/notificationApi';
import type { NotificationFormat } from '@/types/notificationTypes';
import { useQuery } from '@tanstack/react-query';
import { createContext, useContext, useState } from 'react';

type NotificationListContextType = {
  list: NotificationFormat[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const NotificationListContext = createContext<NotificationListContextType | undefined>(undefined);

export const NotificationListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [page, setPage] = useState<number>(0);

  const query = useQuery({
    queryKey: ['notification-list', page],
    queryFn: () => notificationApi.list(page),
    retry: false,
  });

  const list = query.data?.result?.content ?? [];

  return <NotificationListContext.Provider value={{ list, page, setPage }}>{children}</NotificationListContext.Provider>;
};

export const useNotificationList = () => {
  const ctx = useContext(NotificationListContext);
  if (!ctx) throw new Error('useNotificationList must be used within NotificationListProvider');
  return ctx;
};

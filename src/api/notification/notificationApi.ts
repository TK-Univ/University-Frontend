import type { NotificationDTO } from '@/types/notificationTypes';
import { client, type ApiResponse } from '../client';

const PAGE_SIZE = 10;

export const notificationApi = {
  list: async (page: number) => {
    return await client
      .get('notification', {
        searchParams: {
          page: page.toString(),
          size: PAGE_SIZE.toString(),
        },
      })
      .json<ApiResponse<NotificationDTO>>();
  },
};

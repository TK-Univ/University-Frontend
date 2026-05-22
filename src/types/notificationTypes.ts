export interface NotificationDTO {
  content: NotificationFormat[];
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
}

export interface NotificationFormat {
  id: number;
  title: string;
  content: string;
  writer: string;
}

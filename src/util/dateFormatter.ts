/**
 *
 * @param date YYYY-MM-DDTHH:MM:SS.ssssss
 * @returns YYYY-MM-DD HH:MM
 */
export const formatDate = (date: string) => {
  return date ? date.replace('T', ' ').slice(0, 16) : '';
};

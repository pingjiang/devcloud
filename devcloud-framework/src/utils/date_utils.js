import dayjs from 'dayjs';

export function parseDate(str) {
  return dayjs(str);
}

// '{YYYY} MM-DDTHH:mm:ss SSS [Z] A'
export function formatDate(date, format) {
  return dayjs(date).format(format);
}

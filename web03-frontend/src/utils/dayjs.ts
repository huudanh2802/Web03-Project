import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

// Extend dayjs with plugins
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

// Set default timezone
dayjs.tz.setDefault("UTC");

// Utility functions
export const formatDate = (
  date: dayjs.ConfigType,
  format: string = "YYYY-MM-DD"
): string => {
  return dayjs(date).format(format);
};

export const formatDateTime = (
  date: dayjs.ConfigType,
  format: string = "YYYY-MM-DD HH:mm:ss"
): string => {
  return dayjs(date).format(format);
};

export const fromNow = (date: dayjs.ConfigType): string => {
  return dayjs(date).fromNow();
};

export const isBefore = (
  date1: dayjs.ConfigType,
  date2: dayjs.ConfigType
): boolean => {
  return dayjs(date1).isBefore(dayjs(date2));
};

export const isAfter = (
  date1: dayjs.ConfigType,
  date2: dayjs.ConfigType
): boolean => {
  return dayjs(date1).isAfter(dayjs(date2));
};

export const isSameOrBeforeDate = (
  date1: dayjs.ConfigType,
  date2: dayjs.ConfigType
): boolean => {
  return dayjs(date1).isSameOrBefore(dayjs(date2));
};

export const isSameOrAfterDate = (
  date1: dayjs.ConfigType,
  date2: dayjs.ConfigType
): boolean => {
  return dayjs(date1).isSameOrAfter(dayjs(date2));
};

export const toUTC = (date: dayjs.ConfigType): dayjs.Dayjs => {
  return dayjs(date).utc();
};

export const toLocal = (date: dayjs.ConfigType): dayjs.Dayjs => {
  return dayjs(date).local();
};

export const toTimezone = (
  date: dayjs.ConfigType,
  timezone: string
): dayjs.Dayjs => {
  return dayjs(date).tz(timezone);
};

export default dayjs;

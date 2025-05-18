import dayjs from "dayjs";
import type { DayItem } from "./types";



export const getWeekDaysFromDate = (dateStr: string): DayItem[] => {
  const date = dayjs(dateStr);
  const startOfWeek = date.startOf('week');

  return Array.from({ length: 7 }, (_, i) => ({
    day: startOfWeek.add(i, 'day').format('ddd'),
    date: startOfWeek.add(i, 'day').date()
  })
  );
};

export const getMonthDaysFromDate = (dateStr: string): DayItem[] => {
  const date = dayjs(dateStr);
  const daysInMonth = date.daysInMonth();
  const startOfMonth = date.startOf('month');

  return Array.from({ length: daysInMonth }, (_, i) =>({
    day: startOfMonth.add(i, 'day').format('ddd'),
    date: startOfMonth.add(i, 'day').date(),
  }));
};

export const getMonthNumberOfDays = (dateStr: string): number => {
  const date = dayjs(dateStr);
  return date.daysInMonth();

}

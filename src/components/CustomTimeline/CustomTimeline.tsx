import { useRef, useState, type ReactElement } from "react";

import styles from './CustomTimeline.module.scss';
import type { Dayjs } from "dayjs";
import DaysHeader from "./components/DaysHeader/DaysHeader";
import { CalendarView } from "./utils/types";
import { getMonthDaysFromDate, getMonthNumberOfDays, getWeekDaysFromDate } from "./utils/getDaysFromDate";
import ItemView from "./components/ItemView/ItemView";
import SideBarItemList from "./components/SideBarItemList/SideBarItemList";
import dayjs from "dayjs";


export interface TimelineItem {
  title: string;
  element?: ReactElement;
  startTime: Dayjs;
  endTime: Dayjs;
}

interface Props { 
  items: TimelineItem[];
  itemOnClick?: (item: TimelineItem) => void;
  onChangeDate?: (newDate: string) => void;
}

const CustomTimeline = (props: Props) => {
  const givenDate = '2025-05-19';
  const { items, itemOnClick, onChangeDate } = props;
  const [currentDate, setCurrentDate] = useState(givenDate);
  const [currentView, setCurrentView] = useState<CalendarView>(CalendarView.week);
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    dateInputRef.current?.showPicker();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentDate(event.target.value);
    if (onChangeDate) {
      onChangeDate(event.target.value)
    }
  };

  const days = currentView === CalendarView.week ? 
      getWeekDaysFromDate(currentDate) :
      getMonthDaysFromDate(currentDate);

  const toNextSection = () => {
    const newDate = currentView === CalendarView.week ? 
      dayjs(currentDate).add(1, 'week').startOf('week') :
      dayjs(currentDate).add(1, 'month').startOf('month');
    setCurrentDate(newDate.format('YYYY-MM-DD'));
    if (onChangeDate) {
      onChangeDate(newDate.format('YYYY-MM-DD'))
    }
  }

  const toPreviousSection = () => {
    const newDate = currentView === CalendarView.week ? 
      dayjs(currentDate).subtract(1, 'week').startOf('week') :
      dayjs(currentDate).subtract(1, 'month').startOf('month');
    setCurrentDate(newDate.format('YYYY-MM-DD'));
    if (onChangeDate) {
      onChangeDate(newDate.format('YYYY-MM-DD'))
    }
  }
  
  const currentMonthYear = dayjs(currentDate).format('MMMM YYYY');

  return (
    <div className={styles.wrapper} >
      <div className={styles.header} >
        <div className={styles.view_changer_header} >
          <select 
            onChange={e => setCurrentView(e.target.value as CalendarView)}
          >
            <option value={CalendarView.week}>week</option>
            <option value={CalendarView.month}>month</option>
          </select>
        </div>
        <div className={styles.calendar_controls} >
          <div className={styles.upper_header} >
            <div onClick={() => setCurrentDate(dayjs().format('YYYY-MM-DD'))}>Today</div>
            <div onClick={handleClick} className={styles.current_date} >
              <span>{currentMonthYear}</span>
              <input
                type="date"
                className={styles.date_picker}
                ref={dateInputRef}
                onChange={handleChange}
              />
            </div>
            <div className={styles.controls} >
              <div className={styles.control} onClick={toPreviousSection}>{'<'}</div>
              <div className={styles.control} onClick={toNextSection}>{'>'}</div>
              <div>{days[0].date} - {days[days.length - 1].date} {currentMonthYear}</div>
            </div>
          </div>
          <DaysHeader viewMode={CalendarView.week} days={days} />
        </div>
      </div>
      <div className={styles.list} >
        <SideBarItemList items={items} />
        <ItemView 
          items={items} 
          days={days} 
          increments={currentView === CalendarView.week ? 7 : getMonthNumberOfDays(currentDate)}
          itemOnClick={itemOnClick}
        />
      </div>
    </div>
  )
}

export default CustomTimeline
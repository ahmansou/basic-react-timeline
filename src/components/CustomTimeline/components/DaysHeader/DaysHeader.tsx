import cx from 'classnames';

import { CalendarView, type DayItem } from '../../utils/types';
import styles from './DaysHeader.module.scss';


interface Props {
  viewMode: CalendarView;
  days: DayItem[];
}

const DaysHeader = (props: Props) => {
  const { days } = props;

  return (
    <div className={styles.days_header}>
      {days.map((it, index) => (
        <div key={index} className={cx(styles.day_col, {[styles.end_of_week_separator]: it.day === 'Sat'})} >
          <span>{it.day}</span>
          <span className={styles.date}>{it.date}</span>
        </div>
      ))}
    </div>
  )
}

export default DaysHeader
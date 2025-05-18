import Timeline, { DateHeader, TimelineHeaders } from 'react-calendar-timeline';

import styles from './TimelineCalendar.module.scss';
import dayjs from 'dayjs';


interface Group {
  id: number;
  title: string;
}

interface Item {
  id: number;
  group: number;
  title: string;
  start_time: number;
  end_time: number;
}

const groups: Group[] = [
  { id: 1, title: 'Group 1' },
  { id: 2, title: 'Group 2' },
];



const TimelineCalendar = () => {
  const visibleTimeStart = dayjs().startOf('week').valueOf();
  const visibleTimeEnd = dayjs().endOf('week').valueOf();
  
  const items: Item[] = [
    {
      id: 1,
      group: 1,
      title: 'Item 1',
      start_time: dayjs(visibleTimeStart).add(1, 'day').valueOf(),
      end_time: dayjs(visibleTimeStart).add(2, 'day').valueOf(),
    },
    {
      id: 2,
      group: 2,
      title: 'Item 2',
      start_time: dayjs(visibleTimeStart).add(1, 'day').valueOf(),
      end_time: dayjs(visibleTimeStart).add(2, 'day').valueOf(),
    },
  ];

  console.log('==', items[0].start_time, dayjs(visibleTimeStart).add(1, 'day'));
  
  return (
    <div className={styles.wrapper} >
      <Timeline 
        groups={groups} 
        items={items}
        defaultTimeStart={visibleTimeStart}
        defaultTimeEnd={visibleTimeEnd}
        visibleTimeStart={visibleTimeStart}
        visibleTimeEnd={visibleTimeEnd}
        sidebarWidth={100}
        stackItems
        canMove={false}
        canResize={false}
        onTimeChange={(start, end, updateScrollCanvas) => {
          updateScrollCanvas(visibleTimeStart, visibleTimeEnd)
        }}
        // height={300} // ✅ This is the key fix
      >
        <TimelineHeaders>
          <DateHeader 
            unit="day" 
            labelFormat={([start]) => start.format('ddd D')} 
            className={styles.days_header} 
            intervalRenderer={({ intervalContext, getIntervalProps }) => (
              <div {...getIntervalProps()}>{intervalContext.interval.startTime.format('ddd D')}</div>
            )}
          />
        </TimelineHeaders>
      </Timeline>
    </div>
  );
};

export default TimelineCalendar;
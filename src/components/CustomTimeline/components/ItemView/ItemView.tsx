import { useState, useEffect } from "react";
import cx from 'classnames';

import type { TimelineItem } from "../../CustomTimeline"
import type { DayItem } from "../../utils/types";

import styles from './ItemView.module.scss';


interface Props {
  items: TimelineItem[];
  days: DayItem[];
  increments: number;
  itemOnClick?: (item: TimelineItem) => void;
}

const ItemView = (props: Props) => {
  const { days, items, increments, itemOnClick } = props;

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = document.getElementById('item-view');
    if (!el) return;

    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const oneDayWidth = width / increments;

  const renderItem = (item: TimelineItem, index: number) => {
    const itemWidth = oneDayWidth * (item.endTime.date() - item.startTime.date() + 1);
    const position = oneDayWidth * ((item.startTime.date() - days[0].date));
    return (
      <div 
        className={styles.item}
        key={index}
        style={{
          width: `${itemWidth}px`,
          marginLeft: `${position}px`,
        }}
        onClick={() => {
          if (itemOnClick) {
            itemOnClick(item)
          }
        }}
      >
        <span>{item.title}</span>
        <span>{item.startTime.format('YYYY-MM-DD')}</span>
        <span>{item.endTime.format('YYYY-MM-DD')}</span>
      </div>
    )
  }
  
  return (
    <div className={styles.view_wrapper} >
      <div className={styles.days_separators} >
        {days.map((it, index) => (
          <span key={index} className={cx(styles.days_separator, {[styles.end_of_week_separator]: it.day === 'Sat'})}></span>
        ))}
      </div>
      <div className={styles.item_view} id='item-view' >
        {items.map((it, index) => renderItem(it, index))}
      </div>
    </div>
  )
}

export default ItemView
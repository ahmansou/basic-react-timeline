# 📅 Custom Timeline Calendar Component

A customizable weekly timeline calendar built with **React**, **TypeScript**, and **Vite**. Perfect for displaying events, schedules, or tasks across a week view (or a month view), with interactive support for clicks and dynamic date changes.

---

## 🚀 Features

- Weekly or Monthly view timeline layout
- Dynamic item rendering
- Clickable items
- Date navigation with callback support

---

## 📦 Installation

You can use this as a local component in your React `^19.1.0` + Vite `^6.3.5` + TypeScript `~5.8.3` project:

the only external packages you'll need is `dayjs`, `sass` and `classnames`:

```npm install dayjs sass classnames```

## 🛠️ Usage

- Timeline Item Interface:
```
export interface TimelineItem {
  title: string;
  startTime: Dayjs;
  endTime: Dayjs;
}
```

- Component Props:
```
interface Props { 
  items: TimelineItem[];
  itemOnClick?: (item: TimelineItem) => void;
  onChangeDate?: (newDate: string) => void;
}
```

simply feed the component with the items 
example:

```
import dayjs from 'dayjs';
import CustomTimeline, { TimelineItem } from './components/CustomTimeline';

const items: TimelineItem[] = [
  {
    title: 'item 1',
    startTime: dayjs('2025-05-19'),
    endTime: dayjs('2025-05-21')
  },
  {
    title: 'item 2',
    startTime: dayjs('2025-05-20'),
    endTime: dayjs('2025-05-22')
  },
  {
    title: 'item 6',
    startTime: dayjs('2025-05-18'),
    endTime: dayjs('2025-05-24')
  },
  {
    title: 'item 5',
    startTime: dayjs('2025-05-19'),
    endTime: dayjs('2025-05-19')
  },
  {
    title: 'item 3',
    startTime: dayjs('2025-05-21'),
    endTime: dayjs('2025-05-25')
  },
  {
    title: 'item 4',
    startTime: dayjs('2025-05-16'),
    endTime: dayjs('2025-05-26')
  },
]

<CustomTimeline items={items} />
```

## 🖼️ Screenshots
- Weekly view:
  <img width="1512" alt="Screenshot 2025-05-18 at 4 47 38 PM" src="https://github.com/user-attachments/assets/67c48941-acfc-43c6-9252-f719ca0051d2" />

- Monthly View:
  <img width="1490" alt="Screenshot 2025-05-18 at 4 59 40 PM" src="https://github.com/user-attachments/assets/92a235e9-bb45-411f-a30c-a871c21c1b12" />

## 📌 Todo
- Custom components for the timeline stripes and the sidebar elements
- Daily view support



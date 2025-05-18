import dayjs from 'dayjs'
import './App.css'
import CustomTimeline, { type TimelineItem } from './components/CustomTimeline/CustomTimeline'

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


const App = () => {
  

  return (
    <div className='main'>
      <CustomTimeline items={items} />
    </div>
  )
}

export default App

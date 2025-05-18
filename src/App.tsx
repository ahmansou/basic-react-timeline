import dayjs from 'dayjs'
import './App.css'
import CustomTimeline, { type TimelineItem } from './components/CustomTimeline/CustomTimeline'

const items: TimelineItem[] = [
  {
    title: 'item 1',
    startTime: dayjs().startOf('week').add(1, 'day'),
    endTime: dayjs().startOf('week').add(3, 'day')
  },
  {
    title: 'item 2',
    startTime: dayjs().startOf('week').add(2, 'day'),
    endTime: dayjs().startOf('week').add(4, 'day')
  },
  {
    title: 'item 6',
    startTime: dayjs().startOf('week').add(0, 'day'),
    endTime: dayjs().startOf('week').add(6, 'day')
  },
  {
    title: 'item 5',
    startTime: dayjs().startOf('week').add(1, 'day'),
    endTime: dayjs().startOf('week').add(1, 'day')
  },
  {
    title: 'item 3',
    startTime: dayjs().startOf('week').add(3, 'day'),
    endTime: dayjs().startOf('week').add(7, 'day')
  },
  {
    title: 'item 4',
    startTime: dayjs().startOf('week').subtract(2, 'day'),
    endTime: dayjs().startOf('week').add(8, 'day')
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

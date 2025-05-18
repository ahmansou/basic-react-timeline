import type { TimelineItem } from "../../CustomTimeline";

import styles from './SideBarItemList.module.scss';


interface Props {
  items: TimelineItem[];
}

const SideBarItemList = (props: Props) => {
  const { items } = props;
  return (
    <div className={styles.wrapper} >
      {items.map((it, index) => (
        <div className={styles.item_card} key={index}>{it.title}</div>
      ))}
    </div>
  )
}

export default SideBarItemList
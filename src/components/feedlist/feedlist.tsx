import { FC } from 'react'
import FeedItem from '../feed-item/feed-item'
import styles from './feedlist.module.css'

const FeedList: FC = () => {
  return (
    <div className={`${styles.feedlist} pr-2`}>
      <FeedItem />
    </div>
  );
};

export default FeedList;
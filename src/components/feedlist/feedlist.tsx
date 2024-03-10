import { FC } from 'react'
import FeedItem from '../feed-item/feed-item'
import styles from './feedlist.module.css'
import { TOrder } from '../../utils/prop-types'

interface IFeedList {
  orders: Array<TOrder>
}

const FeedList: FC<IFeedList> = ({ orders }) => {
  return (
    <div className={`${styles.feedlist} pr-2`}>
      {orders.map(feed => {
        return (
          <FeedItem feed={feed} key={feed._id} />
        )
      })}
    </div>
  );
};

export default FeedList;
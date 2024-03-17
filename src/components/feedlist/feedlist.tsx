import { FC } from 'react'
import FeedItem from '../feed-item/feed-item'
import styles from './feedlist.module.css'
import { TOrder } from '../../utils/prop-types'

interface IFeedList {
  orders: Array<TOrder>
  showStatus?: boolean
}

const FeedList: FC<IFeedList> = ({ orders, showStatus = false }) => {
  return (
    <div className={`${styles.feedlist} pr-2`}>
      {orders.map(feed => {
        return (
          <FeedItem feed={feed} showStatus={showStatus} key={feed._id} />
        )
      })}
    </div>
  );
};

export default FeedList;
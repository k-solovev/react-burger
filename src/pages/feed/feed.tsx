import FeedList from '../../components/feedlist/feedlist'
import FeedStat from '../../components/feedstat/feedstat'
import styles from './feed.module.css'

export const FeedPage = () => {
  return (
    <div className={`${styles.feed_page}`}>
      <div className={styles.feed__left}>
        <h2 className="text text_type_main-large mb-5">Лента заказов</h2>
        <FeedList />
      </div>
      <div className={styles.feed__right}>
        <FeedStat />
      </div>
    </div>
  );
};
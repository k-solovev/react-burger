import { FC } from 'react'
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './feed-item.module.css'
import { Link, useLocation } from 'react-router-dom'
import { ICompound, TOrder } from '../../utils/prop-types'
import { getCompoundByIds, statusFeedResult } from '../../utils/functions'
import icon_more from '../../images/illustration_more.png'
import { useAppSelector } from '../../hooks/useAppSelector'

interface IFeedItem {
  feed: TOrder
  showStatus?: boolean
}

const FeedItem: FC<IFeedItem> = ({ feed, showStatus = false }) => {
  const location = useLocation()
  const date = new Date(feed.createdAt)
  const allIngredients = useAppSelector(state => state.ingredients.ingredients)
  const feedCompound = getCompoundByIds(allIngredients, feed.ingredients)
  const totalPrice = Object.values(feedCompound).reduce((acc: number, ingredient: ICompound) => acc += ingredient.price * ingredient.count, 0)
  const feedIngredientsIcons = Object.values(feedCompound).map(ingredient => ingredient.image_mobile)
  const feedIngredientsIconsMain = feedIngredientsIcons.slice(0, 5)
  const status = statusFeedResult(feed.status)

  return (
    <Link
      to={`/feed/${feed.number}`}
      state={{ background: location }}
      className={`${styles.feed_item} p-6 mb-4`} >
      <div className={`${styles.feed_item__header} mb-6`}>
        <div className="text text_type_digits-default">#{feed.number}</div>
        <div className="text text_type_main-default text_color_inactive">
          <FormattedDate date={date} />
        </div>
      </div>
      <div className={`${styles.feed_item__title} text text_type_main-medium ${showStatus ? 'mb-2' : 'mb-2'}`}>{feed.name}</div>
      {showStatus && status && (<div className={`${styles.feed_item__status} ${status === 'Выполнен' && styles.feed_item__status__success} text text_type_main-small mb-6`}>{status}</div>)}
      <div className={styles.feed_item__footer}>
        {feedIngredientsIcons.length && (
          <ul className={styles.feed_item__ingredients_list}>
            {feedIngredientsIconsMain.map((image, i) => {
              return (
                <li className={styles.feed_item__ingredient} key={i} style={{ zIndex: feedIngredientsIcons.length - i }}>
                  <img src={image} alt={Object.values(feedCompound)[i].name} />
                </li>
              )
            })}
            {feedIngredientsIcons.length > 5 && (
              <li className={`${styles.feed_item__ingredient} ${styles.feed_item__ingredient_more}`}>
                <img src={icon_more} alt="" />
                <span className={`${styles.feed_item__ingredient__num} text text_type_main-small`}>+{feedIngredientsIcons.length - 5}</span>
              </li>
            )}
          </ul>
        )}
        <div className={`${styles.feed_item__order_price} text text_type_digits-default`}>
          <span className='pr-1'>{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </Link>
  );
};


export default FeedItem;
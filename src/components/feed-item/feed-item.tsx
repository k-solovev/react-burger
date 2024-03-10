import { FC } from 'react'
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './feed-item.module.css'
import { Link } from 'react-router-dom'
import { IIngredient, TOrder } from '../../utils/prop-types'
import { useSelector } from 'react-redux'
import { getIngredientsByIds } from '../../utils/functions'
import icon_more from '../../images/illustration_more.png'

interface IFeedItem {
  feed: TOrder
}

const FeedItem: FC<IFeedItem> = ({ feed }) => {
  const date = new Date(feed.createdAt)
  const allIngredients = useSelector((state: any) => state.ingredients.ingredients)
  const feedIngredients = getIngredientsByIds(allIngredients, feed.ingredients)
  const totalPrice = feedIngredients.reduce((acc: number, ingredient: IIngredient) => acc += ingredient.price, 0)
  const feedIngredientsIcons = feedIngredients.map(ingredient => ingredient.image_mobile)
  const feedIngredientsIconsMain = feedIngredientsIcons.slice(0, 5)

  return (
    <Link to='/feed/034535' className={`${styles.feed_item} p-6 mb-4`} >
      <div className={`${styles.feed_item__header} mb-6`}>
        <div className="text text_type_digits-default">#{feed.number}</div>
        <div className="text text_type_main-default text_color_inactive">
          <FormattedDate date={date} />
        </div>
      </div>
      <div className={`${styles.feed_item__title} text text_type_main-medium mb-6`}>{feed.name}</div>
      <div className={styles.feed_item__footer}>
        {feedIngredientsIcons.length && (
          <ul className={styles.feed_item__ingredients_list}>
            {feedIngredientsIconsMain.map((image, i) => {
              return (
                <li className={styles.feed_item__ingredient} key={i} style={{ zIndex: feedIngredientsIcons.length - i }}>
                  <img src={image} alt={feedIngredients[i].name} />
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
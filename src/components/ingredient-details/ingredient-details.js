import styles from './ingredients-details.module.css'
import { ingredientPropType } from '../../utils/prop-types'

const IngredientDetails = ({ prod }) => {
  return (
    <div className={styles.ingredient_details}>
      <img src={prod.image_large} />
      <p className='text text_type_main-medium mb-8'>{prod.name}</p>
      <ul className={styles.ingredient_details__props}>
        <li className='pr-5'>
          <p className={`${styles.ingredient_details__props_text} text text_type_main-default text_color_inactive`}>Калории,ккал</p>
          <p className={`${styles.ingredient_details__props_text} text text_color_inactive text_type_digits-default`}>{prod.calories}</p>
        </li>
        <li className='pr-5'>
          <p className={`${styles.ingredient_details__props_text} text text_type_main-default text_color_inactive`}>Белки, г</p>
          <p className={`${styles.ingredient_details__props_text} text text_color_inactive text_type_digits-default`}>{prod.proteins}</p>
        </li>
        <li className='pr-5'>
          <p className={`${styles.ingredient_details__props_text} text text_type_main-default text_color_inactive`}>Жиры, г</p>
          <p className={`${styles.ingredient_details__props_text} text text_color_inactive text_type_digits-default`}>{prod.fat}</p>
        </li>
        <li className='pr-5'>
          <p className={`${styles.ingredient_details__props_text} text text_type_main-default text_color_inactive`}>Углеводы, г</p>
          <p className={`${styles.ingredient_details__props_text} text text_color_inactive text_type_digits-default`}>{prod.carbohydrates}</p>
        </li>
      </ul>
    </div >
  );
};

IngredientDetails.propTypes = {
  prod: ingredientPropType.isRequired,
};

export default IngredientDetails;
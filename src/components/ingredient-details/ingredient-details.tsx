import styles from './ingredients-details.module.css'
import { useParams } from 'react-router-dom'
import { IIngredient } from '../../utils/prop-types'
import { useAppSelector } from '../../hooks/useAppSelector';

const IngredientDetails = () => {
  const { ingredientId } = useParams()
  const ingredients = useAppSelector(state => state.ingredients.ingredients)
  const activeIngredient = ingredients.find((ingredient: IIngredient) => ingredient._id === ingredientId)

  return (
    <>
      {activeIngredient && (
        <div className={styles.ingredient_details}>
          <img src={activeIngredient.image_large} alt='' />
          <p className='text text_type_main-medium mb-8'>{activeIngredient.name}</p>
          <ul className={styles.ingredient_details__props}>
            <li className='pr-5'>
              <p className={`${styles.ingredient_details__props_text} text text_type_main-default text_color_inactive`}>Калории,ккал</p>
              <p className={`${styles.ingredient_details__props_text} text text_color_inactive text_type_digits-default`}>{activeIngredient.calories}</p>
            </li>
            <li className='pr-5'>
              <p className={`${styles.ingredient_details__props_text} text text_type_main-default text_color_inactive`}>Белки, г</p>
              <p className={`${styles.ingredient_details__props_text} text text_color_inactive text_type_digits-default`}>{activeIngredient.proteins}</p>
            </li>
            <li className='pr-5'>
              <p className={`${styles.ingredient_details__props_text} text text_type_main-default text_color_inactive`}>Жиры, г</p>
              <p className={`${styles.ingredient_details__props_text} text text_color_inactive text_type_digits-default`}>{activeIngredient.fat}</p>
            </li>
            <li className='pr-5'>
              <p className={`${styles.ingredient_details__props_text} text text_type_main-default text_color_inactive`}>Углеводы, г</p>
              <p className={`${styles.ingredient_details__props_text} text text_color_inactive text_type_digits-default`}>{activeIngredient.carbohydrates}</p>
            </li>
          </ul>
        </div >
      )}
    </>
  );
};

export default IngredientDetails
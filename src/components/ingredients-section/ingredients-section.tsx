import { forwardRef, HTMLAttributes } from 'react'
import Ingredient from '../ingredient/ingredient'
import styles from './ingredients-section.module.css'
import { IIngredient } from '../../utils/prop-types'

interface IIngredientsSectionProps extends HTMLAttributes<HTMLDivElement> {
  ingredients: IIngredient[];
  sectionId: 'buns' | 'sauces' | 'main';
  title: 'Булки' | 'Соусы' | 'Начинки';
}

const IngredientsSection = forwardRef<HTMLDivElement, IIngredientsSectionProps>((props, ref) => {
  return (
    <section className='mb-10' id={props.sectionId} ref={ref}>
      <h3 className='text text_type_main-medium mb-6'>{props.title}</h3>
      <ul className={`${styles.ingredients__list} pt-0 pr-4 pb-0 pl-4`}>
        {props.ingredients.map(ingredient => {
          return (
            <Ingredient key={ingredient._id} ingredient={ingredient} />
          )
        })}
      </ul>
    </section>
  );
});

export default IngredientsSection;
import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { dataIngredients } from '../../utils/prop-types'
import Ingredient from '../ingredient/ingredient'
import styles from './ingredients-section.module.css'

const IngredientsSection = forwardRef((props, ref) => {
  return (
    <section className='mb-10' id={props.sectionId} ref={ref}>
      <h3 className='text text_type_main-medium mb-6'>{props.title}</h3>
      <ul className={`${styles.ingredients__list} pt-0 pr-4 pb-0 pl-4`}>
        {props.data.map(ingredient => {
          return (
            <Ingredient key={ingredient._id} ingredient={ingredient} />
          )
        })}
      </ul>
    </section>
  );
});

IngredientsSection.propTypes = {
  data: dataIngredients.isRequired,
  sectionId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default IngredientsSection;
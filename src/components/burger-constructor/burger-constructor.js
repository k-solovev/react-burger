import React from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css'

const BurgerConstructor = props => {
  const buns = props.data.filter(el => el.type === 'bun')
  const filling = props.data.filter(el => el.type !== 'bun')

  return (
    <section className={`${styles.burger_constructor} mt-25`}>
      <div className='ml-8'>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={20}
          thumbnail={buns[0].image}
        />
      </div>
      <ul className={`${styles.burger_constructor__list} mt-4 mb-4`}>
        {filling.map(elem => {
          return (
            <li className={`${styles.burger_constructor__item} mb-4`}>
              <span className='mr-2'>
                <DragIcon type="primary" />
              </span>
              <ConstructorElement
                text={elem.name}
                price={elem.price}
                thumbnail={elem.image}
              />
            </li>
          )
        })}
      </ul>
      <div className='ml-8 mb-10'>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={20}
          thumbnail={buns[0].image}
        />
      </div>
      <div className={`${styles.burger_constructir__bottom} pr-7`}>
        <span className="text text_type_digits-medium mr-2">610</span>
        <span className='mr-10'>
          <CurrencyIcon type="primary" />
        </span>
        <Button htmlType="button" type="primary" size="large">Оформить заказ</Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    user: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number,
  }),
};

export default BurgerConstructor;
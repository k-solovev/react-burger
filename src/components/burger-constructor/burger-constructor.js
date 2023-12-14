import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css'
import { dataIngredients } from '../../utils/prop-types';

const BurgerConstructor = ({ data }) => {
  const buns = data.filter(el => el.type === 'bun')
  const filling = data.filter(el => el.type !== 'bun')

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
            <li className={`${styles.burger_constructor__item} mb-4`} key={elem._id}>
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
  data: dataIngredients.isRequired
}

export default BurgerConstructor;
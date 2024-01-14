import PropTypes from 'prop-types';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor-item.module.css'
import { useDrag, useDrop } from 'react-dnd';
import { SORT_INGREDIENTS } from '../../services/actions/constructor'
import { useDispatch } from 'react-redux';

const BurgerConstructorItem = ({ children, index }) => {
  const dispatch = useDispatch()
  const [, dragRef] = useDrag({
    type: 'ingredientSort',
    item: () => ({ index }),
  })

  const [, dropRef] = useDrop({
    accept: 'ingredientSort',
    drop(item) {
      dispatch({ type: SORT_INGREDIENTS, from: item.index, to: index })
    },
  })

  return (
    <div ref={dropRef}>
      <li className={`${styles.burger_constructor__item} mb-4`} ref={dragRef}>
        <span className='mr-2'>
          <DragIcon type="primary" />
        </span>
        {children}
      </li>
    </div>
  );
};

BurgerConstructorItem.propTypes = {
  children: PropTypes.element.isRequired,
  index: PropTypes.number.isRequired,
};

export default BurgerConstructorItem;
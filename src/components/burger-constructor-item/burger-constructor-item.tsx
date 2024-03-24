import { FC, ReactNode } from 'react'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor-item.module.css'
import { useDrag, useDrop } from 'react-dnd';
import { SORT_INGREDIENTS } from '../../services/actions/constructor'
import { useAppDispatch } from '../../hooks/useAppDispatch';

interface IBurgerConstructorItem {
  children: ReactNode,
  index: number,
}

type TDragObject = {
  index: number
}

const BurgerConstructorItem: FC<IBurgerConstructorItem> = ({ children, index }) => {
  const dispatch = useAppDispatch()
  const [, dragRef] = useDrag({
    type: 'ingredientSort',
    item: () => ({ index }),
  })

  const [, dropRef] = useDrop<TDragObject>({
    accept: 'ingredientSort',
    drop(item) {
      dispatch({ type: SORT_INGREDIENTS, from: item.index, to: index })
    },
  })

  return (
    <li ref={dragRef}>
      <div className={`${styles.burger_constructor__item} mb-4`} ref={dropRef}>
        <span className='mr-2'>
          <DragIcon type="primary" />
        </span>
        {children}
      </div>
    </li>
  );
};

export default BurgerConstructorItem;
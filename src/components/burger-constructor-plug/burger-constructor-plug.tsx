import { FC } from 'react'
import styles from './burger-constructor-plug.module.css'

interface IBurgerConstructorPlug {
  text: string,
  position?: 'top' | 'bottom'
}

const BurgerConstructorPlug: FC<IBurgerConstructorPlug> = ({ text, position }) => {
  let classElement = 'constructor-element';
  if (position === 'top') {
    classElement += ' constructor-element_pos_top'
  } else if (position === 'bottom') {
    classElement += ' constructor-element_pos_bottom'
  }

  return (
    <div className={classElement}>
      <span className={styles.burger_constructor__empty}>{text}</span>
    </div>
  );
};

export default BurgerConstructorPlug;
import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger-constructor-plug.module.css'

const BurgerConstructorPlug = ({ text, position }) => {
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

BurgerConstructorPlug.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.string,
};

export default BurgerConstructorPlug;
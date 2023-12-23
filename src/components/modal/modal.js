import React from 'react'
import ReactDOM from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './modal.module.css'
import ModalOverlay from '../modal-overlay/modal-overlay'
import PropTypes from 'prop-types'
const modalRoot = document.getElementById('react-modals')

const Modal = ({ title, close, children, }) => {
  const onEscClick = (evt) => {
    if (evt.key === 'Escape') {
      close()
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', onEscClick)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onEscClick)
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={close} />
      <section className={styles.modal}>
        <div className={styles.modal__header}>
          {title && (<h2 className='text text_type_main-large'>{title}</h2>)}
          <button id='modal_close_btn' className={styles.close_btn} onClick={close}>
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </section>
    </>, modalRoot)
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  close: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
}

export default Modal;
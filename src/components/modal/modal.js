import { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './modal.module.css'
import ModalOverlay from '../modal-overlay/modal-overlay'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { REMOVE_ACTIVE_INGREDIENT } from '../../services/actions/active-ingredient'
import { HIDE_ORDER_DETAILS } from '../../services/actions/order-details'

const modalRoot = document.getElementById('react-modals')

const Modal = ({ title, close, children, }) => {
  const dispatch = useDispatch()

  const modalCloseHandler = () => {
    dispatch({ type: REMOVE_ACTIVE_INGREDIENT })
    dispatch({ type: HIDE_ORDER_DETAILS })
  }

  const onEscClick = (evt) => {
    if (evt.key === 'Escape') {
      modalCloseHandler()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onEscClick)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onEscClick)
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={modalCloseHandler} />
      <section className={styles.modal}>
        <div className={styles.modal__header}>
          {title && (<h2 className='text text_type_main-large'>{title}</h2>)}
          <button id='modal_close_btn' className={styles.close_btn} onClick={modalCloseHandler}>
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
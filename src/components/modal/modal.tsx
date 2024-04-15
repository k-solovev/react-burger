import { useEffect, FC } from 'react'
import ReactDOM from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './modal.module.css'
import ModalOverlay from '../modal-overlay/modal-overlay'

const modalRoot = document.getElementById('react-modals') as HTMLElement

interface IModal {
  title?: string,
  children: React.ReactElement,
  onClose: () => void,
}

const Modal: FC<IModal> = ({ title, children, onClose }) => {
  const onEscClick = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      onClose()
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
      <ModalOverlay onClick={onClose} />
      <section className={styles.modal} data-testid="modal-window">
        <div className={styles.modal__header}>
          {title && (<h2 className='text text_type_main-large'>{title}</h2>)}
          <button id='modal_close_btn' data-testid="close-modal" className={styles.close_btn} onClick={onClose}>
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </section>
    </>, modalRoot)
  );
};

export default Modal;
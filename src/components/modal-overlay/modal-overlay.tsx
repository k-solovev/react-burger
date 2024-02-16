import { FC } from 'react'
import styles from './modal-overlay.module.css'

interface IModalOverlay {
  onClick: () => void
}

const ModalOverlay: FC<IModalOverlay> = ({ onClick }) => {
  return (
    <div id='overlay' className={styles.modal_overlay} onClick={onClick}></div>
  );
}

export default ModalOverlay
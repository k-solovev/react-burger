import styles from './modal-overlay.module.css'
import PropTypes from 'prop-types'

const ModalOverlay = ({ onClick }) => {
  return (
    <div id='overlay' className={styles.modal_overlay} onClick={onClick}></div>
  );
}

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ModalOverlay;
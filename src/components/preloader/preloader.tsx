import styles from './preloader.module.css'

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader_spinner}></div>
    </div>
  );
};

export default Preloader;
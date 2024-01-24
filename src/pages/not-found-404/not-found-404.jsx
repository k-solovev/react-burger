import styles from './not-found-404.module.css'

export const NotFound404 = () => {
  return (
    <p className={`${styles.message} text text_type_main-default`}>Извините, такой страницы не существует :(</p>
  );
};
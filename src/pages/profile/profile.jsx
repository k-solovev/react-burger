import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import styles from './profile.module.css'

export const ProfilePage = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__menu}>
        <Link to='/profile' className={`text text_type_main-medium text_color_inactive mb-5 ${styles.profile__link}`}>Профиль</Link>
        <Link to='/orders' className={`text text_type_main-medium text_color_inactive mb-5 ${styles.profile__link}`}>История заказов</Link>
        <button className={`text text_type_main-medium text_color_inactive mb-20 ${styles.profile__btn}`}>Выход</button>

        <p className={`text text_type_main-default text_color_inactive ${styles.profile__footnote}`}>В этом разделе вы можете<br />изменить свои персональные данные</p>
      </div>

      <div className="profile__main">
        <form action="">
          <Input
            type={'text'}
            placeholder={'Имя'}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass={'mb-6'}
            icon={'EditIcon'}
          />
          <Input
            type={'text'}
            placeholder={'логин'}
            name={'login'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass={'mb-6'}
            icon={'EditIcon'}
          />
          <Input
            type={'password'}
            placeholder={'Пароль'}
            name={'password'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass={'mb-6'}
            icon={'EditIcon'}
          />
        </form>
      </div>
    </div>
  );
};
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './profile.module.css'
import { userLogout, userUpdate } from '../../services/actions/user'
import { FC, SyntheticEvent, ChangeEvent } from 'react'
import { useForm } from '../../hooks/useForm'
import { useAppDispatch } from '../../hooks/useAppDispatch'

interface IProfilePage {
  user: {
    name: string
    email: string
  }
}

export const ProfilePage: FC<IProfilePage> = ({ user }) => {
  const { formFields, handleChange, setFormFields } = useForm({ name: user.name, email: user.email, password: '' })

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const logoutHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(userLogout())
    navigate('/login')
  }

  const cancelHandler = () => {
    if (user) {
      setFormFields({ name: user.name, email: user.email, password: '' })
    }
  }

  const onChangeProfile = (e: SyntheticEvent) => {
    e.preventDefault()
    userUpdate(formFields.name, formFields.email, formFields.password)
  }

  return (
    <div className={styles.profile}>
      <div className={styles.profile__menu}>
        <NavLink
          to='/profile'
          className={({ isActive }) => isActive ?
            `text text_type_main-medium text_color_inactive mb-5 ${styles.profile__link} ${styles.profile__link_active}`
            :
            `text text_type_main-medium text_color_inactive mb-5 ${styles.profile__link}`
          }
        >
          Профиль
        </NavLink>
        <NavLink
          to='/profile/orders'
          className={({ isActive }) => isActive ?
            `text text_type_main-medium text_color_inactive mb-5 ${styles.profile__link} ${styles.profile__link_active}`
            :
            `text text_type_main-medium text_color_inactive mb-5 ${styles.profile__link}`
          }
        >
          История заказов
        </NavLink>

        <button
          onClick={logoutHandler}
          className={`text text_type_main-medium text_color_inactive mb-20 ${styles.profile__btn}`}
        >
          Выход
        </button>

        <p className={`text text_type_main-default text_color_inactive ${styles.profile__footnote}`}>В этом разделе вы можете<br />изменить свои персональные данные</p>
      </div>

      <div className="profile__main">
        <form action="" onChange={onChangeProfile}>
          <Input
            type={'text'}
            placeholder={'Имя'}
            name='name'
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass={'mb-6'}
            icon={'EditIcon'}
            value={formFields.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          />
          <Input
            type={'text'}
            placeholder={'Логин'}
            name='email'
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass={'mb-6'}
            icon={'EditIcon'}
            value={formFields.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          />
          <Input
            type={'password'}
            placeholder={'Пароль'}
            name='password'
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass={'mb-6'}
            icon={'EditIcon'}
            value={formFields.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          />

          <div className={styles.profile__btns}>
            <Button htmlType="button" type="secondary" size="medium" onClick={cancelHandler}>Отмена</Button>
            <Button htmlType="submit" type="primary" size="large">Сохранить</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
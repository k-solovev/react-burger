import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './profile-main.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { userUpdate } from '../../../services/actions/user'
import { SyntheticEvent, useEffect } from 'react'
import { getUser } from '../../../services/actions/user'
import { useForm } from '../../../hooks/useForm'

export const ProfileMain = () => {
  const user = useSelector((state: any) => state.user.user)
  const { formFields, handleChange, setFormFields } = useForm({ name: user.name, email: user.email, password: '' })
  const dispatch = useDispatch()

  useEffect(() => {
    if (!user) {
      dispatch<any>(getUser())
    }
  }, [dispatch, user])

  const cancelHandler = () => {
    setFormFields({ name: user.name, email: user.email, password: '' })
  }

  const onChangeProfile = (e: SyntheticEvent) => {
    e.preventDefault()
    userUpdate(formFields.name, formFields.email, formFields.password)
  }

  return (
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
          onChange={(e) => handleChange(e)}
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
          onChange={(e) => handleChange(e)}
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
          onChange={(e) => handleChange(e)}
        />

        <div className={styles.profile__btns}>
          <Button htmlType="button" type="secondary" size="medium" onClick={cancelHandler}>Отмена</Button>
          <Button htmlType="submit" type="primary" size="large">Сохранить</Button>
        </div>
      </form>
    </div>
  );
};
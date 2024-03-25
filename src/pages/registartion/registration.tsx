import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import styles from './registration.module.css'
import { userRegister } from '../../services/actions/user'
import { useForm } from '../../hooks/useForm'
import { SyntheticEvent, ChangeEvent } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'

export const RegistrationPage = () => {
  const dispatch = useAppDispatch()
  const { formFields, handleChange } = useForm({ name: '', email: '', password: '' })

  const onSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(userRegister(
      formFields.name,
      formFields.email,
      formFields.password,
    ))
  }

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
      <Input
        type={'text'}
        placeholder={'Имя'}
        name='name'
        error={false}
        errorText={'Ошибка'}
        size={'default'}
        extraClass={`mb-6 ${styles.form_input}`}
        value={formFields.name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
      <Input
        type={'email'}
        placeholder={'E-mail'}
        name='email'
        error={false}
        errorText={'Ошибка'}
        size={'default'}
        extraClass={`mb-6 ${styles.form_input}`}
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
        extraClass={`mb-6 ${styles.form_input}`}
        icon={'ShowIcon'}
        value={formFields.password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
      <Button htmlType="submit" type="primary" size="large" extraClass='mb-10'>
        Зарегистрироваться
      </Button>

      <div className='mt-10'>
        <div>
          <span className='text text_type_main-default text_color_inactive mr-2'>Уже зарегистрированы?</span>
          <Link to='/login' className={`text text_type_main-default ${styles.form__link}`}>Войти</Link>
        </div>
      </div>
    </form>
  );
};
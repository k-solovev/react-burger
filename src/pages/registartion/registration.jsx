import { useState, useRef } from 'react'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useNavigate } from 'react-router-dom'
import styles from './registration.module.css'
import { userRegister } from '../../services/actions/user'
import { useDispatch } from 'react-redux'

export const RegistrationPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState({ name: '', email: '', password: '' })
  const nameInput = useRef(null)
  const emailInput = useRef(null)
  const passwordInput = useRef(null)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(userRegister(
      nameInput.current.value,
      emailInput.current.value,
      passwordInput.current.value
    ))
  }

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
      <Input
        type={'text'}
        placeholder={'Имя'}
        name={'name'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
        extraClass={`mb-6 ${styles.form_input}`}
        ref={nameInput}
        value={formFields.name}
        onChange={(e) => setFormFields({ ...formFields, name: e.target.value })}
      />
      <Input
        type={'email'}
        placeholder={'E-mail'}
        name={'email'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
        extraClass={`mb-6 ${styles.form_input}`}
        ref={emailInput}
        value={formFields.email}
        onChange={(e) => setFormFields({ ...formFields, email: e.target.value })}
      />
      <Input
        type={'password'}
        placeholder={'Пароль'}
        name={'password'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
        extraClass={`mb-6 ${styles.form_input}`}
        icon={'ShowIcon'}
        ref={passwordInput}
        value={formFields.password}
        onChange={(e) => setFormFields({ ...formFields, password: e.target.value })}
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
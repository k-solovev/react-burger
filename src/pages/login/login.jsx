import { useState, useRef, useEffect } from 'react'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useNavigate } from 'react-router-dom'
import styles from './login.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../services/actions/user'

export const LoginPage = () => {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState({ email: '', password: '' })
  const emailInput = useRef(null)
  const passwordInput = useRef(null)
  const isLoggedIn = useSelector(state => state.user.isLogedIn)
  const navigate = useNavigate()

  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(userLogin(
      emailInput.current.value,
      passwordInput.current.value
    ))
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
  }, [isLoggedIn, navigate])

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h1 className="text text_type_main-medium mb-6">Вход</h1>
      <Input
        type={'email'}
        placeholder={'E-mail'}
        name={'email'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
        extraClass={`mb-6 ${styles.form_input}`}
        value={formFields.email}
        onChange={(e) => setFormFields({ ...formFields, email: e.target.value })}
        ref={emailInput}
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
        value={formFields.password}
        onChange={(e) => setFormFields({ ...formFields, password: e.target.value })}
        ref={passwordInput}
      />
      <Button htmlType="submit" type="primary" size="large" extraClass='mb-10'>
        Войти
      </Button>

      <div className='mt-10'>
        <div>
          <span className='text text_type_main-default text_color_inactive mr-2'>Вы — новый пользователь?</span>
          <Link to='/register' className={`text text_type_main-default ${styles.form__link}`}>Зарегистрироваться</Link>
        </div>
        <div className=''>
          <span className='text text_type_main-default text_color_inactive mr-2'>Забыли пароль?</span>
          <Link to='/forgot-password' className={`text text_type_main-default ${styles.form__link}`}>Восстановить пароль</Link>
        </div>
      </div>
    </form>
  );
};
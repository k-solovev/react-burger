import { SyntheticEvent, useEffect, ChangeEvent } from 'react'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './login.module.css'
import { userLogin } from '../../services/actions/user'
import { useForm } from '../../hooks/useForm'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'

export const LoginPage = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const { formFields, handleChange } = useForm({ email: '', password: '' })
  const isLoggedIn = useAppSelector(state => state.user.isLoggedIn)
  const navigate = useNavigate()
  const navigateTo = location.state?.from?.pathname ? location.state?.from?.pathname : '/'

  const onSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(userLogin(
      formFields.email,
      formFields.password,
    ))

    navigate(navigateTo)
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate(navigateTo)
    }
  }, [isLoggedIn, navigate, navigateTo])

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h1 className="text text_type_main-medium mb-6">Вход</h1>
      <Input
        data-testid="email"
        type={'email'}
        placeholder={'E-mail'}
        name={'email'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
        extraClass={`mb-6 ${styles.form_input}`}
        value={formFields.email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
      <Input
        data-testid="password"
        type={'password'}
        placeholder={'Пароль'}
        name={'password'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
        extraClass={`mb-6 ${styles.form_input}`}
        icon={'ShowIcon'}
        value={formFields.password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
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
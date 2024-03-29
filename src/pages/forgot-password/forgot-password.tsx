import { SyntheticEvent, ChangeEvent } from 'react'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useNavigate } from 'react-router-dom'
import styles from './forgot-password.module.css'
import { forgotPassword } from '../../services/actions/user'
import { useForm } from '../../hooks/useForm'
import { useAppDispatch } from '../../hooks/useAppDispatch'

export const ForgotPasswordPage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { formFields, handleChange } = useForm({ email: '' })

  const onSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(forgotPassword(formFields.email))
    navigate('/reset-password')
  }

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <Input
        type={'email'}
        placeholder={'Укажите e-mail'}
        name='email'
        error={false}
        errorText={'Ошибка'}
        size={'default'}
        extraClass={`mb-6 ${styles.form_input}`}
        value={formFields.email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => { handleChange(e) }}
      />
      <Button htmlType="submit" type="primary" size="large" extraClass='mb-10'>
        Восстановить
      </Button>

      <div className='mt-10'>
        <div>
          <span className='text text_type_main-default text_color_inactive mr-2'>Вспомнили пароль?</span>
          <Link to='/login' className={`text text_type_main-default ${styles.form__link}`}>Войти</Link>
        </div>
      </div>
    </form>
  );
};
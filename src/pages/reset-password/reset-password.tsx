import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import styles from './reset-password.module.css'
import { resetPassword } from '../../services/actions/user'
import { useForm } from '../../hooks/useForm'
import { SyntheticEvent } from 'react'

export const ResetPasswordPage = () => {
  const { formFields, handleChange } = useForm({ password: '', token: '' })

  const onSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault()
    resetPassword(formFields.password, formFields.token)
  }

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <Input
        type={'password'}
        placeholder={'Введите новый пароль'}
        name={'password'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
        extraClass={`mb-6 ${styles.form_input}`}
        icon={'ShowIcon'}
        value={formFields.password}
        onChange={(e) => handleChange(e)}
      />
      <Input
        type={'text'}
        placeholder={'Введите код из письма'}
        name={'text'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
        extraClass={`mb-6 ${styles.form_input}`}
        value={formFields.token}
        onChange={(e) => handleChange(e)}
      />
      <Button htmlType="submit" type="primary" size="large" extraClass='mb-10'>
        Сохранить
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
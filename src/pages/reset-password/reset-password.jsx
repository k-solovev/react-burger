import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './reset-password.module.css'
import { resetPassword } from '../../services/actions/user'

export const ResetPasswordPage = () => {
  const [formFields, setFormFields] = useState({ password: '', token: '' })

  const onSubmitHandler = (e) => {
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
        onChange={(e) => setFormFields({ ...formFields, password: e.target.value })}
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
        onChange={(e) => setFormFields({ ...formFields, token: e.target.value })}
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
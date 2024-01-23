import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import styles from './forgot-password.module.css'

export const ForgotPasswordPage = () => {
  return (
    <form className={styles.form}>
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
      />
      <Input
        type={'text'}
        placeholder={'Введите код из письма'}
        name={'text'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
        extraClass={`mb-6 ${styles.form_input}`}
      />
      <Button htmlType="button" type="primary" size="large" extraClass='mb-10'>
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
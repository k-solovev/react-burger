import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import styles from './registration.module.css'

export const RegistrationPage = () => {
  return (
    <form className={styles.form}>
      <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
      <Input
        type={'text'}
        placeholder={'Имя'}
        name={'name'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
        extraClass={`mb-6 ${styles.form_input}`}
      />
      <Input
        type={'email'}
        placeholder={'E-mail'}
        name={'email'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
        extraClass={`mb-6 ${styles.form_input}`}
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
      />
      <Button htmlType="button" type="primary" size="large" extraClass='mb-10'>
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
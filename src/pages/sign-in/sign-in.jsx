import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import styles from './sign-in.module.css'

export const SignInPage = () => {
  return (
    <form className={styles.form}>
      <h1 class="text text_type_main-medium mb-6">Вход</h1>
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
        Войти
      </Button>

      <div className='mt-10'>
        <div>
          <span className='text text_type_main-default text_color_inactive mr-2'>Вы — новый пользователь?</span>
          <Link to='/registration' className={`text text_type_main-default ${styles.form__link}`}>Зарегистрироваться</Link>
        </div>
        <div className=''>
          <span className='text text_type_main-default text_color_inactive mr-2'>Забыли пароль?</span>
          <Link to='/forgot' className={`text text_type_main-default ${styles.form__link}`}>Восстановить пароль</Link>
        </div>
      </div>
    </form>
  );
};
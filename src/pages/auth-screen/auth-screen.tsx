import {FormEvent, LegacyRef, MutableRefObject, useRef} from "react";
import {useAppDispatch} from "../../hooks";
import {sendLogin} from "../../store/api-actions";

function AuthScreen(): JSX.Element {
  const dispatch = useAppDispatch()
  const loginInp = useRef<HTMLInputElement | null>(null)
  const passInp = useRef<HTMLInputElement | null>(null)
  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loginInp.current && passInp.current) {
      const formData = {
        email: loginInp.current.value,
        password: passInp.current.value
      }
      dispatch(sendLogin(formData)) // Oliver.conner@gmail.com    12345678

    }

  }
  return (
    <section className="login">
      <div className="login__logo"><img src="/img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/></div>
      <h2 className="login__title">Вы настоящий меломан!</h2>
      <p className="login__text">Хотите узнать свой результат? Представтесь!</p>
      <form className="login__form" action="" onSubmit={onFormSubmit}>
        <p className="login__field">
          <label className="login__label" htmlFor="name">Логин</label>
          <input className="login__input" type="text" name="name" id="name" ref={loginInp}/>
        </p>
        <p className="login__field">
          <label className="login__label" htmlFor="password">Пароль</label>
          <input className="login__input" type="text" name="password" id="password" ref={passInp}/>
          <span className="login__error">Неверный пароль</span>
        </p>
        <button className="login__button button" type="submit">Войти</button>
      </form>
      <button className="replay" type="button">Сыграть ещё раз</button>
    </section>
  )
}

export default AuthScreen

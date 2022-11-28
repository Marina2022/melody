import {useNavigate} from "react-router-dom";
import {logout} from "../../store/api-actions";
import {useAppDispatch} from "../../hooks";
import {MouseEventHandler} from "react";

function WinScreen(): JSX.Element {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onReplay = () => {
    navigate('/')
  }

  const onExit:MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
    dispatch(logout())
  }




  return (
    <section className="result">
      <div className="result-logout__wrapper">
        <a className="result-logout__link" href="#" onClick={onExit}>Выход</a>
      </div>
      <div className="result__logo"><img src="/img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы ответили правильно на 6 вопросов и совершили 2 ошибки</p>
      <button className="replay" type="button" onClick={onReplay}>Сыграть ещё раз</button>

    </section>
  )
}

  export default WinScreen

import {Link} from "react-router-dom";
import {resetGame} from "../../store/actions";
import {useAppDispatch} from "../../hooks";


function WelcomeScreen(): JSX.Element {
const dispatch = useAppDispatch()
  const onBtnClick = () =>{
    dispatch(resetGame())
  }
  return (
    <section className="welcome">
      <div className="welcome__logo"><img src="/img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
      </div>
      <Link to="/game">
        <button className="welcome__button" onClick={onBtnClick}><span className="visually-hidden">Начать игру</span></button>
      </Link>
      <h2 className="welcome__rules-title">Правила игры</h2>
      <p className="welcome__text">Правила просты:</p>
      <ul className="welcome__rules-list">
        <li>Нужно ответить на все вопросы.</li>
        <li>Можно допустить 3 ошибки.</li>
      </ul>
      <p className="welcome__text">Удачи!</p>
    </section>
  )
}

export default WelcomeScreen

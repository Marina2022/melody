import {Link} from "react-router-dom";
import {QuestionGenre} from "../../mocks/question";
import {ChangeEventHandler, useState} from "react";

type GenreQuestionScreenProps = {
  question: QuestionGenre,
  onAnswer: (arg: string)=>void
}

function GenreQuestionScreen({question, onAnswer}: GenreQuestionScreenProps): JSX.Element {
  const [userAnswers, setUserAnswers] = useState([false, false, false, false])
  const onChange=(index: number)=>{
    setUserAnswers(
      [...userAnswers.slice(0, index), !userAnswers[index],  ...userAnswers.slice(index+1)]
    )
  }

  return (
    <section className="game game--genre">
      <header className="game__header">
        <Link to={"/"} className="game__back">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="/img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </Link>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
                  style=
                    {
                      {
                        "filter": "url(#blur)",
                        "transform": "rotate(-90deg) scaleY(-1)",
                        "transformOrigin": "center"
                      }
                    }
          />
        </svg>
        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите инди-рок треки</h2>
        <form className="game__tracks">

          {question.answers.map((answer, id) =>
            (<GenreAnswer
              key={`${answer.src}-${id}`}
              src={answer.src} id={id}
              checkValue={userAnswers[id]}
              onChange={()=>onChange(id)}
            /> ))
          }
          <button className="game__submit button" type="submit" onClick={()=> {
            onAnswer('haha')
          }}>Ответить</button>
        </form>
      </section>
    </section>
  )
}

type GenreAnswerProps = {
  src: string,
  id: number,
  checkValue: boolean,
  onChange: ChangeEventHandler<HTMLInputElement>
}

const GenreAnswer = ({src, id, checkValue, onChange}:GenreAnswerProps) => (
  <div className="track">
    <button className="track__button track__button--play" type="button"></button>
    <div className="track__status">
      <audio src={src}></audio>
    </div>
    <div className="game__answer">
      <input checked={checkValue} className="game__input visually-hidden" type="checkbox" name="answer" value={`genre-${id+1}`}
             id={`answer-${id+1}`} onChange={onChange}/>
      <label className="game__check" htmlFor={`answer-${id + 1}`}>Отметить</label>
    </div>
  </div>
)


export default GenreQuestionScreen

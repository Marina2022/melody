import {Link} from "react-router-dom";
import {ChangeEventHandler, useState} from "react";
import AudioPlayer from "../../components/audio-player/audio-player";
import {QuestionGenre} from "../../types/questions";
import Mistakes from "../../components/Mistakes";

type GenreQuestionScreenProps = {
  question: QuestionGenre,
  onAnswer: (question: QuestionGenre, response: boolean[]) => void
}

function GenreQuestionScreen({question, onAnswer}: GenreQuestionScreenProps): JSX.Element {
  const [userAnswers, setUserAnswers] = useState([false, false, false, false])
  const onChange = (index: number) => {
    setUserAnswers(
      [...userAnswers.slice(0, index), !userAnswers[index], ...userAnswers.slice(index + 1)]
    )
  }
  const [idPlaying, setIdPlaying] = useState(0)
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
        <Mistakes/>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите инди-рок треки</h2>
        <form className="game__tracks" onSubmit={(e) => {
          e.preventDefault()
          onAnswer(question, userAnswers)
        }}>

          {question.answers.map((answer, id) =>
            (<GenreAnswer
              key={`${answer.src}-${id}`}
              src={answer.src} id={id}
              checkValue={userAnswers[id]}
              onChange={() => onChange(id)}
              idPlaying={idPlaying}
              setIdPlaying={setIdPlaying}
            />))
          }
          <button className="game__submit button" type="submit" >Ответить
          </button>
        </form>
      </section>
    </section>
  )
}

type GenreAnswerProps = {
  src: string,
  id: number,
  checkValue: boolean,
  onChange: ChangeEventHandler<HTMLInputElement>,
  setIdPlaying: (id: number) => void,
  idPlaying: number
}

const GenreAnswer = ({src, id, checkValue, onChange, setIdPlaying, idPlaying}: GenreAnswerProps) => (
  <div className="track">

    <AudioPlayer src={src} setIdPlaying={setIdPlaying} idPlaying={idPlaying} id={id}/>

    <div className="game__answer">
      <input checked={checkValue} className="game__input visually-hidden" type="checkbox" name="answer"
             value={`genre-${id + 1}`}
             id={`answer-${id + 1}`} onChange={onChange}/>
      <label className="game__check" htmlFor={`answer-${id + 1}`}>Отметить</label>
    </div>
  </div>
)

export default GenreQuestionScreen

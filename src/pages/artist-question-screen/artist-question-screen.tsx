import {Link} from "react-router-dom";
import {ChangeEvent, useState} from "react";
import AudioPlayer from "../../components/audio-player/audio-player";
import {QuestionArtist} from "../../types/questions";
import Mistakes from "../../components/Mistakes";

type ArtistQuestionScreenProps = {
  question: QuestionArtist,
  onAnswer: (question: QuestionArtist, response: string) => void
}

function ArtistQuestionScreen({question, onAnswer}: ArtistQuestionScreenProps): JSX.Element {
  const [idPlaying, setIdPlaying] = useState(0)

  return (
    <section className="game game--artist">
      <header className="game__header">
        <Link to={"/"} className="game__back">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="/img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </Link>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
                  style={{
                    "filter": "url(#blur)",
                    "transform": "rotate(-90deg) scaleY(-1)",
                    "transformOrigin": "center"
                  }}
          />
        </svg>

        <Mistakes/>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <AudioPlayer src={question.song.src} id={0} idPlaying={idPlaying} setIdPlaying={setIdPlaying}/>
          </div>
        </div>
        <form className="game__artist">
          {question.answers.map((answer, index) =>(
            <div className="artist" key={answer.artist}>
              <input className="artist__input visually-hidden"
                     type="radio"
                     name="answer"
                     value={`artist-${index + 1}`}
                     id={`answer-${index}`}
                     onChange={(evt)=> {

                       onAnswer(question, answer.artist)
                     }}
              />
              <label className="artist__name" htmlFor={`answer-${index}`}>
                <img className="artist__picture" src={answer.picture} alt={answer.artist}/>
                {answer.artist}
              </label>
            </div>))
          }


        </form>
      </section>
    </section>
  )
}

type ArtistAnswerProps = {
  id: number,
  answer: any,
  onAnswer: (question: QuestionArtist, response: string) => void,
  question: QuestionArtist
}



export default ArtistQuestionScreen

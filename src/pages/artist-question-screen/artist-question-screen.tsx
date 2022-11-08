import {Link} from "react-router-dom";
import {QuestionArtist} from "../../mocks/question";
import {ChangeEvent, FormEventHandler, MouseEventHandler, useState} from "react";
import AudioPlayer from "../../components/audio-player/audio-player";

type ArtistQuestionScreenProps = {
  question: QuestionArtist,
  onAnswer: (arg: string) => void
}

function ArtistQuestionScreen({question, onAnswer}: ArtistQuestionScreenProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false)
  const [idPlaying, setIdPlaying] = useState(0)

  const onPlayBtnClick = (id: number) => {
    if (isPlaying) {  // если уже играет музыка
      setIsPlaying(idPlaying !== id)  // то если эта музыка соответствует нажимаемому треку - ставим на паузу
    } else {
      setIsPlaying(true)  // а если другому треку, то играем музыку
    }
    setIdPlaying(id) // и по-любому сетаем текущий id
  }


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

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">

              <AudioPlayer src={question.song.src} id={0} idPlaying={idPlaying} setIdPlaying={setIdPlaying}/>

          </div>
        </div>

        <form className="game__artist">
          {question.answers.map((artist, index) =>
            <Artist
              key={`${artist}-${index}`}
              id={index}
              artist={artist.artist}
              picture={artist.picture}
              onAnswer={onAnswer}
            />)}
        </form>
      </section>
    </section>
  )
}

type ArtistAnswerProps = {
  id: number,
  picture: string,
  artist: string,
  onAnswer: (arg: string) => void
}

const Artist = ({id, picture, artist, onAnswer}: ArtistAnswerProps) => {
  return (
    <div className="artist">
      <input className="artist__input visually-hidden"
             type="radio"
             name="answer"
             value={`artist-${id + 1}`}
             id={`answer-${id}`}
             onChange={(evt: ChangeEvent<HTMLInputElement>) => {
               evt.preventDefault();
               onAnswer(artist);
             }}
      />
      <label className="artist__name" htmlFor="answer-2">
        <img className="artist__picture" src={picture} alt={artist}/>
        {artist}
      </label>
    </div>)
}


export default ArtistQuestionScreen

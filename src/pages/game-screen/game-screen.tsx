import {QuestionArtist, QuestionGenre, Questions} from "../../mocks/question";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import {Navigate} from "react-router-dom";
import {useState} from "react";

type GameScreenProps = {
  questions: Questions
}
function GameScreen({questions}: GameScreenProps): JSX.Element {
  const [step, setStep] = useState(0)

  const onAnswer  = (arg: string)=> {
    setStep(step+1)
  }

  let question = questions[step];
  if ((step+1)>questions.length) return <Navigate to="/"/>
  switch (question.type) {
    case 'genre':
      return <GenreQuestionScreen question={question as QuestionGenre} onAnswer={onAnswer}/>
    case 'artist':
      return <ArtistQuestionScreen question={question as QuestionArtist} onAnswer={onAnswer} />
    default: return <Navigate to="/"/>
  }
}

export default GameScreen

import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import {Navigate} from "react-router-dom";
import {checkAnswer, incrementStep} from "../../store/actions";
import {QuestionArtist, QuestionGenre, Questions} from "../../types/questions";
import {useAppDispatch, useAppSelector} from "../../hooks";

type GameScreenProps = {
  questions: Questions,
}
function GameScreen({questions}: GameScreenProps): JSX.Element {

  const dispatch = useAppDispatch()
  const step = useAppSelector((state)=> state.step)
  const mistakes = useAppSelector((state)=> state.mistakes)
  const onAnswer  = (question: QuestionArtist|QuestionGenre, response: string|boolean[])=> {
    dispatch(checkAnswer({question: question, response: response}));
    dispatch(incrementStep())
  }


  let question = questions[step];
  if (mistakes > 2) return <Navigate to={"/lose"}  />
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

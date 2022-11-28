import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import {Navigate} from "react-router-dom";
import {checkAnswer, incrementStep} from "../../store/actions";
import {QuestionArtist, QuestionGenre, Question} from "../../types/questions";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {AppRoute, MAX_MISTAKES} from "../../const";
import {useEffect} from "react";
import {checkAuth, fetchQuestions} from "../../store/api-actions";

function GameScreen(): JSX.Element {

  const dispatch = useAppDispatch()
  const step = useAppSelector((state) => state.step)
  const mistakes = useAppSelector((state) => state.mistakes)
  const questions = useAppSelector((state) => state.questions)
  const isLoading = useAppSelector((state) => state.isLoading)
  const error = useAppSelector((state) => state.error)
  const onAnswer = (question: Question, response: string | boolean[]) => {
    dispatch(checkAnswer({question: question, response: response}));
    dispatch(incrementStep())
  }

  useEffect(() => {
    dispatch(fetchQuestions())
    dispatch(checkAuth())
  }, [])

  let question = questions[step];
  if (mistakes >= MAX_MISTAKES) return <Navigate to={AppRoute.Lose}/>
  if ((step + 1) > questions.length) return <Navigate to={AppRoute.Result}/>

  if (!isLoading && !error && questions.length > 0) {
    switch (question.type) {
      case 'genre':
        return <GenreQuestionScreen question={question as QuestionGenre} onAnswer={onAnswer}/>
      case 'artist':
        return <ArtistQuestionScreen question={question as QuestionArtist} onAnswer={onAnswer}/>
      default:
        return <Navigate to="/"/>
    }
  }
  return <div>Loading..</div>
}

export default GameScreen

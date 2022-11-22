import {QuestionArtist, QuestionGenre} from "./types/questions";

export const isResponseCorrect = (question: QuestionArtist | QuestionGenre, response: string | boolean[]) => {
  if (question.type == 'artist' && typeof response === 'string')
    return isArtistAnswerCorrect(question, response)

  if (question.type == 'genre' && Array.isArray(response))
    return isGenreAnswerCorrect(question, response)

  throw new Error('no such question type')

}

const isArtistAnswerCorrect = (question: QuestionArtist, response: string) => {
  return question.song.artist === response
}

const isGenreAnswerCorrect = (question: QuestionGenre, response: boolean[]) => {
  return response.every((answer, index) => {
      return answer === (question.genre === question.answers[index].genre)
    }
  )
}


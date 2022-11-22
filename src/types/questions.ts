export type Questions = (QuestionGenre | QuestionArtist)[]
type GenreAnswerType = {
  src: string,
  genre: string
}
type ArtistAnswerType = {
  picture: string,
  artist: string

}
export type QuestionArtist = {
  type: 'artist',
  song: {
    artist: string,
    src: string,
  },
  answers: ArtistAnswerType[]
}
export type QuestionGenre = {
  type: 'genre',
  genre: string,
  answers: GenreAnswerType[]
}

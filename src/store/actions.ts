import {createAction} from "@reduxjs/toolkit";
import {QuestionArtist, QuestionGenre} from "../types/questions";

export const incrementStep = createAction('game/incrementStep')
export const resetGame = createAction('game/resetGame')
export const checkAnswer = createAction<{question: QuestionArtist|QuestionGenre, response: string| boolean[]}>('game/checkAnswer')
export const questionLoaded = createAction<(QuestionArtist|QuestionGenre)[]>('game/questionLoaded')
export const setAuthStatus =  createAction<string>('user/setAuthStatus')
export const setLoading =  createAction<boolean>('game/setIsLoading')
export const setError =  createAction<string | null>('game/setError')

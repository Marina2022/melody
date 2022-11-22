import {createAction} from "@reduxjs/toolkit";
import {QuestionArtist, QuestionGenre} from "../types/questions";

export const incrementStep = createAction('game/incrementStep')
export const resetGame = createAction('game/resetGame')
export const checkAnswer = createAction<{question: QuestionArtist|QuestionGenre, response: string| boolean[]}>('game/checkAnswer')

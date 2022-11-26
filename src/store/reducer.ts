import {createReducer, current} from "@reduxjs/toolkit";
import {
  checkAnswer,

  incrementStep,
  questionLoaded,
  resetGame,
  setAuthStatus,
  tokenReceived
} from "./actions";
import {isResponseCorrect} from "../gameUtils";
import {AuthStatus} from "../const";
import {QuestionArtist, QuestionGenre} from "../types/questions";

const initialState = {
  mistakes: 0,
  step: 0,
  isAuthorized: AuthStatus.Unknown as string,
  questions: [{},{}] as (QuestionArtist | QuestionGenre)[]
}

const gameReducer = createReducer(initialState, (builder)=>{
  builder
    .addCase(incrementStep, (state)=> {
      state.step = state.step + 1
    })
    .addCase(resetGame, (state)=>{
      state.mistakes = 0
      state.step = 0
    })
    .addCase(checkAnswer, (state, action)=>{
      if (!isResponseCorrect(action.payload.question, action.payload.response))
         state.mistakes = state.mistakes+1
    })
    .addCase(questionLoaded, (state, action)=>{
      state.questions = action.payload
    })

    .addCase(setAuthStatus, (state, action)=>{
      state.isAuthorized = action.payload
    })


})

export default gameReducer

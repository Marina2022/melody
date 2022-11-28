import {createReducer} from "@reduxjs/toolkit";
import {checkAnswer, incrementStep, questionLoaded, resetGame, setAuthStatus, setError, setLoading,} from "./actions";
import {isResponseCorrect} from "../gameUtils";
import {AuthStatus} from "../const";
import {Question} from "../types/questions";

const initialState = {
  isLoading: true,
  mistakes: 0,
  step: 0,
  isAuthorized: AuthStatus.Unknown as string,
  questions: [] as Question[],
  error: null as string | null
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
    .addCase(setLoading, (state, action)=>{
      state.isLoading = action.payload
    })

    .addCase(setError, (state, action)=>{
      state.error = action.payload
    })


})

export default gameReducer

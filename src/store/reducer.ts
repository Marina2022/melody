import {createReducer} from "@reduxjs/toolkit";
import {checkAnswer, incrementStep, resetGame} from "./actions";
import {isResponseCorrect} from "../gameUtils";

const initialState = {
  mistakes: 0,
  step: 0
}

const gameReducer = createReducer(initialState, (builder)=>{
  builder
    .addCase(incrementStep, (state)=> {
      state.step = state.step + 1
    })
    .addCase(resetGame, (state)=>{
      return initialState
    })
    .addCase(checkAnswer, (state, action)=>{
      if (!isResponseCorrect(action.payload.question, action.payload.response))
         state.mistakes = state.mistakes+1
    })
})

export default gameReducer

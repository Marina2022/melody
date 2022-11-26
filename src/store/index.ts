import {configureStore} from "@reduxjs/toolkit";
import gameReducer from "./reducer";
import {createAPI} from "../services/api";
import {fetchQuestions} from "./api-actions";
import {useAppDispatch} from "../hooks";

const api = createAPI()

export const store = configureStore({
  reducer: gameReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk:  {
      extraArgument: api
    }
  })
})



import {configureStore} from "@reduxjs/toolkit";
import gameReducer from "./reducer";
import {createAPI} from "../services/api";
import {redirectToRoute} from "../middlewares/historyMiddleware";

const api = createAPI()

export const store = configureStore({
  reducer: gameReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk:  {
      extraArgument: api
    }
  }).concat(redirectToRoute)
})



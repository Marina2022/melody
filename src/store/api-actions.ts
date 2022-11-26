import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosInstance} from "axios";
import {AppDispatch, GlobalState} from "../types/store";
import {questionLoaded, setAuthStatus, tokenReceived} from "./actions";
import {setToken} from "../services/token";
import {AppRoute, AuthStatus} from "../const";


export const fetchQuestions = createAsyncThunk<void, undefined, {
  extra: AxiosInstance,
  dispatch: AppDispatch,
  state: GlobalState
}>('melody/getQuestions',
  async (_arg, {dispatch, extra}) => {
    const {data} = await extra.get('/questions')
    dispatch(questionLoaded(data))
  }
)

type FormDataType = {
  email: string,
  password: string
}


export const sendLogin = createAsyncThunk<void, FormDataType, {
  extra: AxiosInstance,
  dispatch: AppDispatch,
  state: GlobalState
}>('melody/sendLogin',
  async (arg, {dispatch, extra}) => {
    try {
      const {data} = await extra.post(AppRoute.Login, arg)
      setToken(data.token)
      dispatch(checkAuth())
    } catch (e) {
      console.log('чета не качнулсо токен')
    }
  }
)

export const checkAuth = createAsyncThunk<void, undefined,
  {
    extra: AxiosInstance,
    dispatch: AppDispatch,
    state: GlobalState
  }>('user/checkAuth', async (_arg, {dispatch, extra}) => {
  try {
    const data = await extra.get(AppRoute.Login)
    dispatch(setAuthStatus(AuthStatus.Auth))
  } catch (e) {
    dispatch(setAuthStatus(AuthStatus.NoAuth))
  }

})

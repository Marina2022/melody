import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosInstance} from "axios";
import {AppDispatch, GlobalState} from "../types/store";
import {questionLoaded, setAuthStatus, setError, setLoading} from "./actions";
import {dropToken, setToken} from "../services/token";
import {AppRoute, AuthStatus, ERROR_SHOW_TIME} from "../const";


export const fetchQuestions = createAsyncThunk<void, undefined, {
  extra: AxiosInstance,
  dispatch: AppDispatch,
  state: GlobalState
}>('melody/getQuestions',
  async (_arg, {dispatch, extra}) => {
    try {
      dispatch(setLoading(true))
      const {data} = await extra.get('/questions')
      dispatch(questionLoaded(data))
    } catch (e) {
      await dispatch(setError('Вопросы не подгрузились'))
      dispatch({type: 'game/redirect', payload: '/'})
      await dispatch(clearErrorAction())

    }finally {
      dispatch(setLoading(false))
    }
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
      dispatch(setLoading(true))
      const {data} = await extra.post(AppRoute.Login, arg)
      setToken(data.token)
      await dispatch(checkAuth())
      dispatch({type: 'game/redirect', payload: '/result'})
    } catch (e) {
      await dispatch(setError('Неправильный логин или пароль'))
      dispatch({type: 'game/redirect', payload: '/result'})
      await dispatch(clearErrorAction())
    } finally {
      dispatch(setLoading(false))
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
    dispatch(setLoading(true))
    const data = await extra.get(AppRoute.Login)
    if (data.status === 200) dispatch(setAuthStatus(AuthStatus.Auth))
  } catch (e) {
    dispatch(setAuthStatus(AuthStatus.NoAuth))
  } finally {
    dispatch(setLoading(false))
  }
})

export const logout = createAsyncThunk<void, undefined,
  {
    extra: AxiosInstance,
    dispatch: AppDispatch,
    state: GlobalState
  }>
('user/logout', async (_arg, {dispatch, extra}) => {
  await extra.delete('/logout');
  await dropToken()
  await dispatch(checkAuth)
  dispatch({type: 'game/redirect', payload: '/login'})
})


export const clearErrorAction = createAsyncThunk< void, undefined,
{
  extra: AxiosInstance,
  dispatch: AppDispatch,
  state: GlobalState
}
>
('game/clearError', async (_arg, {dispatch, extra}) => {
  setTimeout(()=>{
    dispatch(setError(null))
  }, ERROR_SHOW_TIME)
})

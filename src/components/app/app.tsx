import WelcomeScreen from "../../pages/welcome-screen/welcome-screen";
import WinScreen from "../../pages/win-screen/win-screen";
import AuthScreen from "../../pages/auth-screen/auth-screen";
import GameOverScreen from "../../pages/game-over-screen/game-over-screen";
import NotFoundScreen from "../../pages/not-found-screen/not-found-screen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppRoute} from "../../const";
import PrivateRoute from "../private-route/private-route";
import GameScreen from "../../pages/game-screen/game-screen";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {checkAuth, fetchQuestions} from "../../store/api-actions";
import {useEffect} from "react";


function App(): JSX.Element {
  const isAuth = useAppSelector(state=> state.isAuthorized)

  const dispatch = useAppDispatch()
useEffect(()=>{
  dispatch(fetchQuestions())
  dispatch(checkAuth())
}, [])


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<WelcomeScreen/>}/>
          <Route path={AppRoute.Result} element={
            <PrivateRoute auth={isAuth}>
              <WinScreen/>
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Login} element={<AuthScreen/>}/>
          <Route path={AppRoute.Lose} element={<GameOverScreen/>}/>
          <Route path={AppRoute.Game} element={<GameScreen/>}/>
          <Route path="*" element={<NotFoundScreen/>}/>
        </Routes>
      </BrowserRouter>
    </>


  )
}

export default App;

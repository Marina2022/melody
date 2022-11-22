import WelcomeScreen from "../../pages/welcome-screen/welcome-screen";

import GenreQuestionScreen from "../../pages/genre-question-screen/genre-question-screen";
import ArtistQuestionScreen from "../../pages/artist-question-screen/artist-question-screen";
import WinScreen from "../../pages/win-screen/win-screen";
import AuthScreen from "../../pages/auth-screen/auth-screen";
import GameOverScreen from "../../pages/game-over-screen/game-over-screen";
import NotFoundScreen from "../../pages/not-found-screen/not-found-screen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppRoute, AuthorizationStatus} from "../../const";
import PrivateRoute from "../private-route/private-route";
import {questions} from "../../mocks/question";
import GameScreen from "../../pages/game-screen/game-screen";

function App(): JSX.Element {
  const isAuth = AuthorizationStatus.NoAuth
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
          <Route path={AppRoute.Game} element={<GameScreen questions={questions}/>}/>
          <Route path="*" element={<NotFoundScreen/>}/>
        </Routes>
      </BrowserRouter>
    </>


  )
}

export default App;

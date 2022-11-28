import {BrowserHistory} from "history";
import {Router} from "react-router-dom";
import React, {useEffect, useState} from "react";

type HistoryRouteProps = {
  children: React.ReactNode,
  history: BrowserHistory
}
const HistoryRoute = ({history, children} : HistoryRouteProps): JSX.Element => {

  const [state, setState] = useState({
    location: history.location,
    action: history.action
  })

  useEffect(() => history.listen((obj)=> {
    setState(obj)
  }), []);


  return (
    <Router navigator={history} location={history.location} navigationType={history.action}>
      {children}
    </Router>
  )

}
export default  HistoryRoute

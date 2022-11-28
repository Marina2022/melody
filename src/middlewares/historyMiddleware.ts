import {Middleware} from "@reduxjs/toolkit";
import {history} from '../browserHistory'

export const redirectToRoute: Middleware = store => next => (action) => {
  if (action.type == 'game/redirect' ) {
    return history.push(action.payload)
  }

  return next(action)

}

import {Navigate, Route} from "react-router-dom";
import {AuthorizationStatus} from "../../const";

type PrivateRouteProps = {
  auth: string,
  children: JSX.Element
}

function PrivateRoute({auth, children}: PrivateRouteProps): JSX.Element {
  return auth === AuthorizationStatus.Auth ?
    children
    : <Navigate to="/"/>
}

export default PrivateRoute

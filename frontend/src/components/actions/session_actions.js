import * as APIUtil from "../util/session_api_util"
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT"
export const RECEIVE_USER_LOGIN = "RECEIVE_USER_LOGIN"

export const receiveCurrentUser = currentUser => {
   return ({
      type: RECEIVE_CURRENT_USER,
      currentUser
   })
}

export const receiveUserLogin = () => {
   return ({
      type: RECEIVE_USER_LOGIN
   })
}

export const receiveErrors = errors => {
   return ({
      type: RECEIVE_SESSION_ERRORS,
      errors
   })
}

export const logoutUser = () => {
   return({
      type: RECEIVE_USER_LOGOUT
   })
}


export const signup = user => dispatch => (
   APIUtil.signup(user).then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded))
   }).catch(err => (
      dispatch(receiveErrors(err.response.data))
   ))
);

// Upon login, set the session token and dispatch the current user. Dispatch errors on failure.
export const login = user => dispatch => {
   debugger;
   return (
      APIUtil.login(user).then(res => {
         debugger;
         const { token } = res.data;
         localStorage.setItem('jwtToken', token);
         APIUtil.setAuthToken(token);
         const decoded = jwt_decode(token);
         dispatch(receiveCurrentUser(decoded))
      })
         .catch(err => {
            debugger;
            dispatch(receiveErrors(err.response.data));
         })
   )
}

// We wrote this one earlier
export const logout = () => dispatch => {
   localStorage.removeItem('jwtToken')
   APIUtil.setAuthToken(false)
   dispatch(logoutUser())
};
import superagent from 'superagent';
import superagentPromise from 'superagent-promise';
export const LOGIN_SUCESS = "LOGIN_SUCESS";

let request = superagentPromise(superagent, Promise);
function loginSucess(user){
  return {
    type: LOGIN_SUCESS,
    user
  }
}
export const LOGIN_ERROR = "LOGIN_ERROR";
function loginError(error){
  return {
    type: LOGIN_ERROR,
    error
  }
}
export const REQUEST_LOGIN = "REQUEST_LOGIN";
function requestLogin(){
  return {
    type: REQUEST_LOGIN
  }
}
export function handleLogin(loginObject){
  return dispatch => {
    dispatch(requestLogin());
    request('POST', 'http://localhost:3001/api/v1/auth/login').send(loginObject).then((user) => {
      dispatch(loginSuccess(user));
    });
  }
}
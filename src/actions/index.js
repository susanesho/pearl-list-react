import superagent from 'superagent';
import superagentPromise from 'superagent-promise';
export const LOGIN_SUCESS = "LOGIN_SUCESS";
export const SIGNUP_SUCESS = "SIGNUP_SUCESS";
export const FETCH_BUCKET_LIST_SUCCESS = "FETCH_BUCKET_LIST_SUCCESS";


let request = superagentPromise(superagent, Promise);

function loginSucess(user){
  return {
    type: LOGIN_SUCESS,
    user
  }
}

function signupSucess(user){
  return {
    type: SIGNUP_SUCESS,
    user
  }
}

function fetchBucketListSucess(bucketlist){
  return {
    type: FETCH_BUCKET_LIST_SUCCESS,
    bucketlist
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

export const REQUEST_SIGNUP = "REQUEST_SIGNUP";
function requestSignup(){
  return {
    type: REQUEST_SIGNUP
  }
}

export function handleLogin(loginObject){
  return dispatch => {
    dispatch(requestLogin());
    request('POST', 'http://localhost:3001/api/v1/auth/login').send(loginObject).then((response) => {
      console.log(response.body.token, 'see if it works');
      window.localStorage.setItem('token', response.body.token);
      window.location.replace('/bucketlist');
      dispatch(loginSucess(response.body));
    });
  }
}
export function fetchBucketList(){
  return (dispatch, getState) => {
    const token = window.localStorage.getItem('token');
    console.log(token, 'token')
    dispatch(requestLogin());
    request('POST', 'http://localhost:3001/api/v1/bucketlists').set('Authorization', `Bearer: ${token}`).then((bucketlist) => {
      dispatch(fetchBucketListSucess(bucketlist));
    });
  }
}

export function handleBucketList(objectBucketlist){
  return (dispatch, getState) => {
    // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyOCwiZXhwIjoxNDY5NTMyMzM2fQ.5q6Y6IYJmMMGS8EkDzUvgaDUAIIqg082ftKKPwnqC1Q'
    dispatch(requestLogin());
    const token = window.localStorage.getItem('token');
    request('POST', 'http://localhost:3001/api/v1/bucketlists').set('Authorization', `token: ${token}`).send(objectBucketlist).then((bucketlist) => {
      dispatch(fetchBucketListSucess(bucketlist));
    });
  }
}
// export function addBucketList(){
//   return (dispatch, getState) => {
//     const token = getState.user.token;
//     dispatch(requestLogin());
//     request('POST', 'http://localhost:3001/api/v1/bucketlists').set('Authorization', `Bearer: ${token}`).then((bucetlist) => {
//       dispatch(fetchBucketListSucess(bucketlist));
//     });
//   }
// }

export function handleSignup(signupObject){
  return dispatch => {
    dispatch(requestSignup());
    request('POST', 'http://localhost:3001/api/v1/users').send(signupObject).then((user) => {
      dispatch(signupSucess(user));
    });
  }
}

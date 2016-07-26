import superagent from 'superagent';
import superagentPromise from 'superagent-promise';
export const LOGIN_SUCESS = "LOGIN_SUCESS";
export const SIGNUP_SUCESS = "SIGNUP_SUCESS";
export const FETCH_BUCKET_LIST_SUCCESS = "FETCH_BUCKET_LIST_SUCCESS";
export const ADD_BUCKET_LIST_ITEMS_SUCCESS = "ADD_BUCKET_LIST_ITEMS_SUCCESS"

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

function fetchBucketListSucess(bucketlists){
  return {
    type: FETCH_BUCKET_LIST_SUCCESS,
    bucketlists
  }
}

function addBucketListItemsSuccess(item, bucketlistId){
  return {
    type: ADD_BUCKET_LIST_ITEMS_SUCCESS,
    item,
    bucketlistId
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
    request('GET', 'http://localhost:3001/api/v1/bucketlists').set('Authorization', `Bearer: ${token}`).then((response) => {
      console.log(response.body.bucketlists, response.body);
      dispatch(fetchBucketListSucess(response.body.bucketlists));
    });
  }
}

export function handleBucketList(objectBucketlist){
  return (dispatch, getState) => {
    dispatch(requestLogin());
    const token = window.localStorage.getItem('token');
    request('POST', 'http://localhost:3001/api/v1/bucketlists').set('Authorization', `Bearer: ${token}`).send(objectBucketlist).then((bucketlist) => {
      dispatch(fetchBucketListSucess(bucketlist));
    });
  }
}

export function handleBucketListItem(objectBucketlistItem){
  console.log(objectBucketlistItem);
  return (dispatch, getState) => {
    dispatch(requestLogin());
    const token = window.localStorage.getItem('token');
    request('POST', `http://localhost:3001/api/v1/bucketlists/${objectBucketlistItem.id}/items`).set('Authorization', `Bearer: ${token}`).send({name: objectBucketlistItem.name}).then((item) => {
      dispatch(addBucketListItemsSuccess(item, objectBucketlistItem.id));
    });
  }
}

export function handleSignup(signupObject){
  return dispatch => {
    dispatch(requestSignup());
    request('POST', 'http://localhost:3001/api/v1/users').send(signupObject).then((user) => {
      dispatch(signupSucess(user));
    });
  }
}

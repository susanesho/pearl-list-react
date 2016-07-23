import * as actionTypes from '../actions';
import { combineReducers } from 'redux';

let intialState = {
  user: {},
  isLoading: false,
  loginError: false
}

function user(state = intialState, action){
  switch(action.type){
    case actionTypes.REQUEST_LOGIN:
      return {...state, isLoading: true, loginError: false}
    case actionTypes.LOGIN_SUCESS:
      return {...state, user: action.user, isLoading: false}
    case actionTypes.LOIGN_ERROR:
      return {...state, loginError: true, isLoading: false}
    default:
      return state;
  }
}
export default combineReducers({
  user
});
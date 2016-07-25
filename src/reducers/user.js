import * as actionTypes from '../actions';
import { combineReducers } from 'redux';

let intialState = {
  user: {},
  token: {},
  isLoading: false,
  loginError: false
}

function user(state = intialState, action){
  switch(action.type){
    case actionTypes.REQUEST_LOGIN:
      return {...state, isLoading: true, loginError: false}
    case actionTypes.LOGIN_SUCESS:
      return {...state, user: action.user, token: action.token, isLoading: false}
    case actionTypes.LOIGN_ERROR:
      return {...state, loginError: true, isLoading: false}
    default:
      return state;
  }
}

const initBucketList = {
  bucketlist: [],
  isLoading: false
};

function bucketlist(state = initBucketList, action){
  switch(action.type){
    case actionTypes.FETCH_BUCKETLIST:
      return {...state, isLoading: true}
    case actionTypes.FETCH_BUCKETLIST_SUCCESS:
      return {...state, bucketlist: action.bucketlist, isLoading: false}
    case actionTypes.EDIT_BUCKETLIST:
      let instanceBucketlist = state.bucketlist.find((bucketlist) => bucketlist.id === action.bucketlist.id)
      return {...state, bucketlist: instanceBucketlist, isLoading: false }
    case actionTypes.DELETE_BUCKETLIST:
      let filteredBucketlist = state.bucketlist.filter((bucketlist) => bucketlist.id === action.bucketlist.id);
      return {...state, bucketlist: filteredBucketlist, isLoading: false}
    default:
      return state;
  }
}

export default combineReducers({
  user,
  bucketlist
});
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import bucketListApp from '../reducers/user';

let store = createStore(bucketListApp, applyMiddleware(thunk));
export default store;
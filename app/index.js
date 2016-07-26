import React from 'react';
import { Provider } from 'react-redux';
import {render} from 'react-dom';
import App from './components/App';
import Home from './components/Home';
import NoMatch from './components/404';
import Login from './components/Login';
import Signup from './components/Signup';
import Bucketlist from './components/Bucketlist';
import store from './store';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import './index.css';

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="home" component={Home}/>
        <Route path="login" component={Login}/>
        <IndexRoute path="signup" component={Signup}/>
        <Route path="bucketlist" component={Bucketlist}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
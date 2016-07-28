/**
 * Created by Onion on 7/27/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import App from './components/App';
import './style/style.css';

const routes = [
  {
    path: '/',
    component: App,
    childRoutes: [
    ]
  }
];

const store = configureStore();

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.body.appendChild(document.createElement('div'))
);

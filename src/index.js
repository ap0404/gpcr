import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import rootReducer from './reducers';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './app/reducers';

const middleware = [ thunk ];
const store = createStore(rootReducer,applyMiddleware(...middleware));

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route component={App} />
      </Router>
    </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

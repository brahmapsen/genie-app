import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import './index.css';
import App from './App';
import { theme } from './theme';
import * as serviceWorker from './serviceWorker';
import authReducer from './store/reducers/auth';
import createdPoolReducer from './store/reducers/createdPool';

const rootReducer = combineReducers({
  auth: authReducer,
  createdPool: createdPoolReducer,
});

const preloadedState = process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  : undefined

const store = createStore(
  rootReducer,
  preloadedState
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

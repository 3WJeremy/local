import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import 'typeface-roboto';

import theme from './theme';
import settings from './constants/settings';
import App from './App';
import categoriesReducer from './store/reducers/categories';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
const rootReducer = combineReducers({ cats: categoriesReducer });
const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

const app = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={`${settings.prependPath}/`}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

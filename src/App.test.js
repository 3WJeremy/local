import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './App';

describe('<App />', () => {
  const initialState = { cats: { tertiary: '' } };
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);

  it("doesn't crash", () => {
    const wrapper = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
      wrapper
    );
    ReactDOM.unmountComponentAtNode(wrapper);
  });
});

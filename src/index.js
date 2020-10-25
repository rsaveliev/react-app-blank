import React from 'react';
import ReactDOM from 'react-dom';

import REDUX_STORE from './redux-store';
// entry point
import AppRoot from './app';

ReactDOM.render(
  <AppRoot store={REDUX_STORE}/>,
  document.getElementById('react-app')
);
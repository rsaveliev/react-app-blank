import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// Components
import Header from './layout/header';
import Main from './layout/main';
import Footer from './layout/footer';
import Aside from './layout/aside';

function AppRoot({ store }) {
  return (
    <Provider store={store}>
      <Header/>
      <Router>
        <div className="app-content">
          <Aside />
          <Main/>
        </div>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default AppRoot;
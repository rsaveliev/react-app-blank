import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
// Components
import Header from './layout/header';
import Main from './layout/main';
import Footer from './layout/footer';

function AppRoot({ store }) {
  return (
    <Provider store={store}>
      <Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </Fragment>
    </Provider>
  );
}

export default AppRoot;
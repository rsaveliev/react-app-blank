import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Pages
import Page404 from '../pages/404';
import IntroPage from '../pages/intro';
import ReactPage from '../pages/react';
import ComponentsPage from '../pages/react/components';
import LifecyclePage from '../pages/react/lifecycle';
import HooksPage from '../pages/react/hooks';
import StateLessPage from '../pages/react/stateless';
import StateFullPage from '../pages/react/state-full';
import HocPage from '../pages/react/hoc';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={IntroPage}/>
      <Route path="/intro" component={IntroPage}/>
      <Route exact path="/react" component={ReactPage}/>
      <Route path="/react/components" component={ComponentsPage} />
      <Route path="/react/lifecycle" component={LifecyclePage} />
      <Route path="/react/lifecycle" component={LifecyclePage} />
      <Route path="/react/hooks" component={HooksPage} />
      <Route path="/react/stateless" component={StateLessPage} />
      <Route path="/react/state-full" component={StateFullPage} />
      <Route path="/react/hoc" component={HocPage} />
      <Route path="*" component={Page404}/>
    </Switch>
  );
};

export default Routes;
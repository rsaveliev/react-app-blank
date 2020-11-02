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
import RouterPage from '../pages/router';
import NestingRouterPage from '../pages/router/nesting';
import ReduxPage from '../pages/redux';
import ReduxStorePage from '../pages/redux/store';
import ReduxActionsPage from '../pages/redux/actions';
import ReduxReducersPage from '../pages/redux/reducers';
import AppStructurePage from '../pages/app-structure';

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
      <Route exact path="/router" component={RouterPage} />
      <Route path="/router/nesting" component={NestingRouterPage} />
      <Route exact path="/redux" component={ReduxPage} />
      <Route path="/redux/store" component={ReduxStorePage} />
      <Route path="/redux/actions" component={ReduxActionsPage} />
      <Route path="/redux/reducers" component={ReduxReducersPage} />
      <Route path="/app-structure" component={AppStructurePage} />
      <Route path="*" component={Page404}/>
    </Switch>
  );
};

export default Routes;
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Divider } from '@material-ui/core';

import Accordion from '../../../components/accordion';
import CodeMirror from '../../../components/code-mirror';
import { ReduxStore } from '../../../constants/code-templates/redux';

import '../style.scss';

const ReduxStorePage = () => (
  <section className="redux">
    <Typography gutterBottom variant="h4" component="h1">
      Redux Store
    </Typography>
    <br/>
    <Typography className="topic" variant="body1" component="section" color="textSecondary">
      A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch
      an action on it.
      <br />
      A store is not a class. It's just an object with a few methods on it. To create it, pass your root reducing
      function to createStore.
    </Typography>
    <br/>
    <Typography className="topic" variant="body1" component="section" color="primary">
      Store Method:
      <ul>
        <li>getState()</li>
        <li>dispatch(action)</li>
        <li>subscribe(listener)</li>
        <li>replaceReducer(nextReducer)</li>
      </ul>
      <Link
        rel="noopener"
        href="https://redux.js.org/api/store#store-methods-1"
        target="_blank"
      >
        About Store methods
      </Link>
    </Typography>
    <br/>
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Card>
          <Accordion
            unmountOnExit
            defaultExpanded
            title={() => (
              <Typography variant="body1" color="textSecondary">
                Redux Store initialization in app
              </Typography>
            )}
            body={() => (
              <Grid item xs={12}>
                <Divider/>
                <CodeMirror template={ReduxStore}/>
              </Grid>
            )}
          />
        </Card>
      </Grid>
    </Grid>
    <br/>
    <Link
      rel="noopener"
      href="https://redux.js.org/api/store"
      target="_blank"
    >
      More info
    </Link>
  </section>
);

export default ReduxStorePage;

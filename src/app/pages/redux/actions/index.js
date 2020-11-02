import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Divider } from '@material-ui/core';

import Accordion from '../../../components/accordion';
import CodeMirror from '../../../components/code-mirror';
import { Actions, ReduxActions } from '../../../constants/code-templates/redux';

import '../style.scss';

const ReduxActionsPage = () => (
  <section className="redux">
    <Typography gutterBottom variant="h4" component="h1">
      Redux Actions
    </Typography>
    <br/>
    <Typography className="topic" variant="body1" component="section" color="textSecondary">
      Action is a function what describe some action what need to execute to change data in a redux-store.
    </Typography>
    <br/>
    <Typography className="topic" variant="body1" component="section" color="primary">
      To change something in the state, you need to dispatch an action. An action is a plain JavaScript object (notice
      how we don’t introduce any magic?) that describes what happened. Here are a few example actions:
      <CodeMirror template={Actions}/>
      <br />
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
                Action function
              </Typography>
            )}
            body={() => (
              <Grid item xs={12}>
                <Divider/>
                <CodeMirror template={ReduxActions}/>
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

export default ReduxActionsPage;

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Divider } from '@material-ui/core';

import Accordion from '../../components/accordion';
import CodeMirror from '../../components/code-mirror';
import { Basic } from '../../constants/code-templates/redux';

import './style.scss';

const ReduxPage = () => (
  <section className="redux">
    <Typography gutterBottom variant="h4" component="h1">
      Redux
    </Typography>
    <br/>
    <Typography className="topic" variant="body1" component="section" color="textSecondary">
      Redux is an open source JavaScript library for managing application state. Most often used in conjunction with
      <b> React</b> or <b>Angular</b> for client-side development. Contains a number of tools to greatly simplify the
      transfer of warehouse data through context.
    </Typography>
    <br/>
    <Typography className="topic" variant="body1" component="section" color="textSecondary">
      Redux is a predictable state container for JavaScript apps.
      <br/>
      It helps you write applications that behave consistently, run in different environments (client, server, and
      native), and are easy to test.
    </Typography>
    <br/>
    <Typography className="topic" variant="body1" component="section" color="primary">
      <b>Creators:</b> Daniil Abramov and Andrew Clark.
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
                Basic example
              </Typography>
            )}
            body={() => (
              <Grid item xs={12}>
                <Divider/>
                <CodeMirror template={Basic}/>
                <Divider/>
                <Typography className="sub-info" variant="body1" component="section" color="textSecondary">
                  Instead of mutating the state directly, you specify the mutations you want to happen with plain
                  objects called actions. Then you write a special function called a reducer to decide how every action
                  transforms the entire application's state.
                </Typography>
              </Grid>
            )}
          />
        </Card>
      </Grid>
    </Grid>
    <br/>
    <Link
      rel="noopener"
      href="https://redux.js.org/introduction/getting-started"
      target="_blank"
    >
      More info
    </Link>
  </section>
);

export default ReduxPage;

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Divider } from '@material-ui/core';

import Accordion from '../../../components/accordion';
import CodeMirror from '../../../components/code-mirror';
import { Reducers } from '../../../constants/code-templates/redux';

import '../style.scss';

const ReduxReducersPage = () => (
  <section className="redux">
    <Typography gutterBottom variant="h4" component="h1">
      Reducers
    </Typography>
    <br/>
    <Typography className="topic" variant="body1" component="section" color="textSecondary">
      The suggested structure for a Redux store is to split the state object into multiple “slices” or “domains” by key,
      and provide a separate reducer function to manage each individual data slice. This is similar to how the standard
      Flux pattern has multiple independent stores, and Redux provides the combineReducers utility function to make this
      pattern easier. However, it's important to note that combineReducers is not required—it is simply a utility
      function for the common use case of having a single reducer function per state slice, with plain JavaScript
      objects for the data.
    </Typography>
    <br/>
    <Typography className="topic" variant="body1" component="section" color="primary">
      <Link
        rel="noopener"
        href="https://redux.js.org/api/store#store-methods-1"
        target="_blank"
      >
        About Reducers
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
                Combine Reducers in app
              </Typography>
            )}
            body={() => (
              <Grid item xs={12}>
                <Divider/>
                <CodeMirror template={Reducers}/>
              </Grid>
            )}
          />
        </Card>
      </Grid>
    </Grid>
    <br/>
    <Link
      rel="noopener"
      href="https://redux.js.org/faq#redux-faq"
      target="_blank"
    >
      More info
    </Link>
  </section>
);

export default ReduxReducersPage;

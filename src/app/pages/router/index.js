import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Accordion from '../../components/accordion';
import { Divider } from '@material-ui/core';
import CodeMirror from '../../components/code-mirror';
import { BasicRouter } from '../../constants/code-templates/react-router';

const RouterPage = () => (
  <section>
    <Typography gutterBottom variant="h4" component="h1">
      React Router
    </Typography>
    <Typography className="topic" variant="body1" component="section" color="textSecondary">
      React Router is a third party library created to solve the problem of routing in React app. It wraps around the
      browser history API and does the job of keeping your React application UI in sync with the browser’s URL.
    </Typography>
    <br />
    <Typography variant="body1" component="section" color="primary">
      There are 3 basic React Router components commonly used in minimal navigation, they are BrowserRouter, Route and
      Link. Let’s explore about BrowserRouter and Route first:
    </Typography>
    <br/>
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Card>
          <Accordion
            title={() => (
              <Typography variant="body1" color="textSecondary">
                Basic router with pages
              </Typography>
            )}
            body={() => (
              <Grid item xs={12}>
                <Divider/>
                <CodeMirror template={BasicRouter}/>
                <Divider/>
                <Typography className="sub-info" variant="body1" component="section" color="textSecondary">

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
      href="https://reactrouter.com/web/example/basic"
      target="_blank"
    >
      More info
    </Link>
  </section>
);

export default RouterPage;

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Divider } from '@material-ui/core';

import Accordion from '../../../components/accordion';
import CodeMirror from '../../../components/code-mirror';
import { NestingRouter } from '../../../constants/code-templates/react-router';

const NestingRouterPage = () => (
  <section>
    <Typography gutterBottom variant="h4" component="h1">
      Nesting Router
    </Typography>
    <br/>
    <Typography className="topic" variant="body1" component="section" color="textSecondary">
      In order to create nested route, you need to declare another Route inside the parent component.
    </Typography>
    <br />
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Card>
          <Accordion
            title={() => (
              <Typography variant="body1" color="textSecondary">
                Nesting router
              </Typography>
            )}
            body={() => (
              <Grid item xs={12}>
                <Divider/>
                <CodeMirror template={NestingRouter}/>
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
      href="https://reactrouter.com/web/example/nesting"
      target="_blank"
    >
      More info
    </Link>
  </section>
);

export default NestingRouterPage;

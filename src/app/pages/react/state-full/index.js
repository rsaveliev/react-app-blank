import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Divider } from '@material-ui/core';

import { stateFullComponent } from '../../../constants/code-templates/react';
import CodeMirror from '../../../components/code-mirror';
import Accordion from '../../../components/accordion';

const StateFull = () => (
  <section className="stateless-components">
    <Typography gutterBottom variant="h4" component="h1">
      StateFull Components
    </Typography>
    <Typography className="topic" variant="body1" component="section" color="textSecondary">
      Class Component (<b>StateFull</b>) is a bit more complicated. It has a state, lifecycle hooks and it is a
      javascript class which means that React creates instances of it. React should initialise the component class in
      order to call lifecycle hooks, call a constructor, initialise state and more.
    </Typography>
    <br/>
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Card>
          <Accordion
            title={() => (
              <Typography variant="body1" color="textSecondary">
                StateFull component
              </Typography>
            )}
            body={() => (
              <Grid item xs={12}>
                <Divider/>
                <CodeMirror template={stateFullComponent}/>
                <Divider/>
              </Grid>
            )}
          />
        </Card>
      </Grid>
    </Grid>
  </section>
);
export default StateFull;
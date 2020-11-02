import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Divider } from '@material-ui/core';

import { stateLessComponent } from '../../../constants/code-templates/react';
import CodeMirror from '../../../components/code-mirror';
import Accordion from '../../../components/accordion';

const StateLess = () => (
  <section className="stateless-components">
    <Typography gutterBottom variant="h4" component="h1">
      StateLess Components
    </Typography>
    <Typography className="topic" variant="body1" component="section" color="textSecondary">
      Hooks let you use state and other React features without writing a class.
      Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks
      don’t work inside classes — they let you use React without classes.
    </Typography>
    <br/>
    <Typography variant="body1" component="section" color="primary">
      When react renders our stateless component all what it needs to do is just call MyStatelessComponent function and
      pass props there. That’s it.
    </Typography>
    <br />
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Card>
          <Accordion
            unmountOnExit
            title={() => (
              <Typography variant="body1" color="textSecondary">
                SateLess component
              </Typography>
            )}
            body={() => (
              <Grid item xs={12}>
                <Divider/>
                <CodeMirror template={stateLessComponent}/>
                <Divider/>
              </Grid>
            )}
          />
        </Card>
      </Grid>
    </Grid>
    <br />
    <Typography variant="body1" component="section" color="primary">
      Important: The StateLess component can has a state and lifecycle methods if we will use hooks.
    </Typography>
  </section>
);
export default StateLess;
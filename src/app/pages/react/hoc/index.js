import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Divider } from '@material-ui/core';
import CodeMirror from '../../../components/code-mirror';
import { HOC } from '../../../constants/code-templates/react';
import Accordion from '../../../components/accordion';
import Link from '@material-ui/core/Link';

import './style.scss';

const Hoc = () => (
  <section className="hoc">
    <Typography gutterBottom variant="h4" component="h1">
      Higher-Order Components, HOC
    </Typography>
    <Typography className="topic" variant="body1" component="section" color="textSecondary">
      HOCs basically incorporate the don’t-repeat-yourself (DRY) principle of programming, which you’ve most likely come
      across at some point in your career as a software developer. It is one of the best-known principles of software
      development, and observing it is very important when building an application or writing code in general.
    </Typography>
    <br/>
    <Typography variant="body1" component="section" color="primary">
      A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of
      the React API, per se. They are a pattern that emerges from React’s compositional nature.
    </Typography>
    <br/>
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Card>
          <Accordion
            title={() => (
              <Typography variant="body1" color="textSecondary">
                HOC example
              </Typography>
            )}
            body={() => (
              <Grid item xs={12}>
                <Divider/>
                <CodeMirror template={HOC}/>
                <Divider/>
                <Typography className="sub-info" variant="body1" component="section" color="textSecondary">
                  HOC component can be also StateLess (Function).
                  <br />
                  In example above, each time when property users has updated, the component also rerender list of
                  users.
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
      href="https://reactjs.org/docs/higher-order-components.html"
      target="_blank"
    >
      More info
    </Link>
  </section>
);
export default Hoc;
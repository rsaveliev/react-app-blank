import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Divider } from '@material-ui/core';

import CodeMirror from '../../../components/code-mirror';
import { LifeCycleComponents } from '../../../constants/code-templates/react';

import './style.scss';

const LifeCycle = () => (
  <section className="lifecycle">
    <Typography gutterBottom variant="h4" component="h1">
      Lifecycle of Components
    </Typography>
    <Typography className="topic" variant="body1" component="section" color="textSecondary">
      Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
    </Typography>
    <Typography variant="body1" component="section" color="primary">
      The three phases are:
      <ul>
        <li>
          <b>Mounting</b>
        </li>
        <li>
          <b>Updating</b>
        </li>
        <li>
          <b>Unmounting</b>
        </li>
      </ul>
    </Typography>
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Card>
          <Typography className="card-title" variant="h6">
            Mounting
          </Typography>
          <Typography className="card-title" color="textSecondary" variant="subtitle1">
            Mounting phase has four methods, order of invoke:
          </Typography>
          <Typography variant="body1" color="primary" component="section">
            <ul>
              <li>
                constructor()
              </li>
              <li>
                getDerivedStateFromProps()
              </li>
              <li>
                render()
              </li>
              <li>
                componentDidMount()
              </li>
            </ul>
          </Typography>
          <Divider/>
          <CodeMirror template={LifeCycleComponents.mounting}/>
        </Card>
      </Grid>
    </Grid>
    <br/>
    <Grid item xs={12}>
      <Card>
        <Typography className="card-title" variant="h6">
          Updating
        </Typography>
        <Typography className="card-title" color="textSecondary" variant="subtitle1">
          A component is updated whenever there is a change in the component's <b>state</b> or <b>props</b>.
          <br/>
          Updating phase has five built-in methods that gets called, in this order, when a component is updated:
        </Typography>
        <Typography color="primary" component="section">
          <ul>
            <li>
              getDerivedStateFromProps()
            </li>
            <li>
              shouldComponentUpdate()
            </li>
            <li>
              render()
            </li>
            <li>
              getSnapshotBeforeUpdate()
            </li>
            <li>
              componentDidUpdate()
            </li>
          </ul>
        </Typography>
        <Divider/>
        <CodeMirror template={LifeCycleComponents.updating}/>
      </Card>
    </Grid>
    <br/>
    <Grid item xs={12}>
      <Card>
        <Typography className="card-title" variant="h6">
          Unmounting
        </Typography>
        <Typography className="card-title" color="textSecondary" variant="subtitle1">
          The last one phase in the lifecycle is when a component is removed from the DOM, or unmounting as React
          likes to call it.
          <br/>
          React has only one built-in method that gets called when a component is unmounted:
        </Typography>
        <Typography color="primary" component="section">
          <ul>
            <li>
              componentWillUnmount()
            </li>
          </ul>
        </Typography>
        <Divider/>
        <CodeMirror template={LifeCycleComponents.unmounting}/>
      </Card>
    </Grid>
    <br/>
    <Link
      rel="noopener"
      href="https://reactjs.org/docs/react-component.html#the-component-lifecycle"
      target="_blank"
    >
      More info
    </Link>
  </section>
);
export default LifeCycle;
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Divider } from '@material-ui/core';

import CodeMirror from '../../../components/code-mirror';
import { ReactHooks } from '../../../constants/code-templates/react';
import Accordion from '../../../components/accordion';

import './style.scss';

const Hooks = () => (
  <section className="hooks">
    <Typography gutterBottom variant="h4" component="h1">
      React Hooks
    </Typography>
    <Typography className="topic" variant="body1" component="section" color="textSecondary">
      Hooks let you use state and other React features without writing a class.
      Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks
      don’t work inside classes — they let you use React without classes.
    </Typography>
    <br/>
    <Typography variant="body1" component="section" color="primary">
      Basic Hooks:
      <ul>
        <li>
          <b>useState</b>
        </li>
        <li>
          <b>useEffect</b>
        </li>
        <li>
          <b>useContext</b>
        </li>
      </ul>
    </Typography>
    <Typography variant="body1" component="section" color="primary">
      Additional Hooks:
      <ul>
        <li>
          <b>useReducer</b>
        </li>
        <li>
          <b>useCallback</b>
        </li>
        <li>
          <b>useMemo</b>
        </li>
        <li>
          <b>useRef</b>
        </li>
        <li>
          <b>useImperativeHandle</b>
        </li>
        <li>
          <b>useLayoutEffect</b>
        </li>
        <li>
          <b>useDebugValue</b>
        </li>
      </ul>
    </Typography>
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Card>
          <Typography className="card-title" variant="h6">
            Basic Hooks
          </Typography>
          <Accordion
            title={() => (
              <Typography variant="body1" color="textSecondary">
                useState()
              </Typography>
            )}
            body={() => (
              <Grid item xs={12}>
                <Divider/>
                <CodeMirror template={ReactHooks.useState}/>
                <Divider/>
                <Typography variant="body1" className="description">
                  <b>count</b> - state value; <b>setCount</b> - is a function that change a state
                </Typography>
              </Grid>
            )}
          />
          <Accordion
            title={() => (
              <Typography variant="body1" color="textSecondary">
                useEffect()
              </Typography>
            )}
            body={() => (
              <Grid item xs={12}>
                <Divider/>
                <CodeMirror template={ReactHooks.useEffect}/>
                <Divider/>
                <Typography variant="body1" className="description">
                  Often, effects create resources that need to be cleaned up before the component leaves the screen, such as a
                  interval ID. To do this, the function passed to <b>useEffect</b> may return a clean-up function.
                </Typography>
              </Grid>
            )}
          />
          <Accordion
            title={() => (
              <Typography variant="body1" color="textSecondary">
                useContext()
              </Typography>
            )}
            body={() => (
              <Grid item xs={12}>
                <Divider/>
                <CodeMirror template={ReactHooks.useContext}/>
                <Divider/>
                <Typography variant="body1" className="description">
                  Accepts a context object (the value returned from React.createContext) and returns the current context value
                  for that context. The current context value is determined by the value prop of the
                  nearest <b>{`<MyContext.Provider>`}</b> above the calling component in the tree.
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
      href="https://reactjs.org/docs/hooks-intro.html"
      target="_blank"
    >
      More info
    </Link>
  </section>
);
export default Hooks;
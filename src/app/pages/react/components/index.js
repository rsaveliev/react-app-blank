import React from 'react';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import CodeMirror from '../../../components/code-mirror';
import {
  ClassComponent,
  FunctionComponent,
  DomRender,
} from '../../../constants/code-templates/react';

import './style.scss';

const ReactComponents = () => (
  <section className="components">
    <Typography gutterBottom variant="h4" component="h1">
      JSX
    </Typography>
    <Typography className="topic" variant="body1" component="section" color="textSecondary">
      JSX stands for JavaScript XML. JSX allows us to write HTML in React.
      JSX makes it easier to write and add HTML in React.
      <br/>
      <Link
        rel="noopener"
        href="https://reactjs.org/docs/introducing-jsx.html"
        target="_blank"
      >
        More info
      </Link>
    </Typography>
    <Typography gutterBottom variant="h4" component="h1">
      Components
    </Typography>
    <Typography className="topic" variant="body1" component="section" color="textSecondary">
      Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but
      work in isolation and returns HTML via a render function.
    </Typography>
    <Typography className="topic" variant="body1" component="section" color="textSecondary">
      Components come in two types: <b>Class Components</b> and <b>Function Components</b>
      <br/>
      <Link
        rel="noopener"
        href="https://reactjs.org/docs/components-and-props.html"
        target="_blank"
      >
        More info
      </Link>
    </Typography>
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Card>
          <Typography className="card-title" variant="h6">
            Class Component
          </Typography>
          <CodeMirror template={ClassComponent}/>
        </Card>
        <Typography className="topic" variant="body1" component="section" color="textSecondary">
          Class component implement a <b>render()</b> method that takes input data and returns what to display.
          This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed
          by <b>render()</b> via <b>this.props.</b>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <Typography className="card-title" variant="h6">
            Function Component
          </Typography>
          <CodeMirror template={FunctionComponent}/>
        </Card>
        <Typography className="topic" variant="body1" component="section" color="textSecondary">
          A Function component also returns HTML, and behaves pretty much the same way as a Class component, but Class
          components have some additions.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography gutterBottom variant="body1" component="h1" color="primary">
          Rendering a Component (App entry point)
        </Typography>
        <Card>
          <CodeMirror template={DomRender}/>
        </Card>
      </Grid>
    </Grid>
  </section>
);
export default ReactComponents;
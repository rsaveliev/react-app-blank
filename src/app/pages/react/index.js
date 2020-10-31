import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const ReactPage = () => (
  <>
    <Typography gutterBottom variant="h4" component="h1">
      React is a JavaScript library for building user interfaces.
    </Typography>
    <Typography gutterBottom variant="h6" component="h4" color="textSecondary">
      ReactJS presents graceful solutions to some of front-end programming’s most persistent issues. It’s fast,
      scalable, flexible, powerful, and has a robust developer community that’s rapidly growing. There’s never been a
      better time to learn React.
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Declarative
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              React makes it painless to create interactive UIs. Design simple views for each state in your application, and
              React will efficiently update and render just the right components when your data changes.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Component-Based
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              Build encapsulated components that manage their own state, then compose them to make complex UIs.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              Server, Mobile (React Native)
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              React can also render on the server using Node and power mobile apps using React Native.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </>
);
export default ReactPage;
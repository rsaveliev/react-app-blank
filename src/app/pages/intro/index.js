import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Footer from '../../layout/footer';

import './style.scss';

const Intro = () => (
  <section className="intro">
    <article>
      <Typography gutterBottom variant="h4" component="h1">
        Introduction
      </Typography>
      <Typography gutterBottom variant="h6" component="h4" color="textSecondary">
        Almost all info are taken from official documentation of different sources.
        Here is I collected important topics of React and other technologies for building web app.
      </Typography>
      <Typography gutterBottom variant="h6" component="h3">
        Topics:
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                About React
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Short info about React
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                Components
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Type of React Components
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                Lifecycle of Components
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Lifecycle methods of components
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                StateLess
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                StateLess component in react
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                StateFull
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                StateFull component in react
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                Hooks
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Hook types
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                Higher-Order Components, HOC
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Higher-Order components in react
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                React Router
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                React Router info
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                Redux
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                Redux and his role in react
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                App structure
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                App structure, folders structure guide
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </article>
    <Footer />
  </section>
);
export default Intro;
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Divider } from '@material-ui/core';

import CodeMirror from '../../components/code-mirror';
import Accordion from '../../components/accordion';
import { DefaultAppStructure, ExtendAppStructure } from '../../constants/code-templates/app-structure';

const AppStructure = () => (
  <section>
    <Typography gutterBottom variant="h4" component="h1">
      App structure (Folder structure)
    </Typography>
    <br/>
    <Typography className="topic" variant="body1" component="section" color="textSecondary">
      Dan Abramov famously officialized the file structure for React applications as “move files around until they feel
      right.” I do not want to disagree with this point. I agree wholeheartedly. However, despite Dan’s advice, the
      question of optimal file structure still gains traction frequently. Despite absolute freedom, developers are still
      uncomfortable with exploring new territories; and I think they have a point. It’s a lot of work to refactor a code
      base for a file structure change, and it takes a lot of trial and error to find one you like. It would be
      beneficial to know some ground rules before mapping out your expedition — what have those who came before you
      discovered?
    </Typography>
    <br/>
    <Typography className="topic" variant="body1" component="section" color="primary">
      FYI: There is no strong recommended application folder structures, have only some recommendation of ap-folder
      structure. Folder structure depends on a requirements projects as well.
    </Typography>
    <br/>
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Card>
          <Accordion
            unmountOnExit
            defaultExpanded
            title={() => (
              <Typography variant="body1" color="textSecondary">
                This is the file structure created by <b>create-react-app</b> as of 2.1.5:
              </Typography>
            )}
            body={() => (
              <Grid item xs={12}>
                <Divider/>
                <CodeMirror template={DefaultAppStructure}/>
              </Grid>
            )}
          />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <Accordion
            unmountOnExit
            defaultExpanded
            title={() => (
              <Typography variant="body1" color="textSecondary">
                Extend folder structure
              </Typography>
            )}
            body={() => (
              <Grid item xs={12}>
                <Divider/>
                <CodeMirror template={ExtendAppStructure}/>
              </Grid>
            )}
          />
        </Card>
      </Grid>
    </Grid>
  </section>
);

export default AppStructure;

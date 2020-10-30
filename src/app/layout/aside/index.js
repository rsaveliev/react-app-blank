import React from 'react';
import { withRouter } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Divider, Collapse } from '@material-ui/core';

import { NAV_ITEMS } from '../../constants/navigation';
// Styles
import './styles.scss';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const Aside = (props) => {
  const classes = useStyles();

  const isActive = (link) => {
    if (link === '/intro' && window.location.pathname === '/') {
      return true;
    }
    return window.location.pathname === link ;
  };

  const navigateTo = (path) => {
    if (path !== window.location.pathname) {
      props.history.push(path);
    }
  };

  return (
    <aside>
      <List component="nav" disablePadding>
        {
          NAV_ITEMS.map(({  title, path,  subTopics }, index) => (
            <div key={title}>
              <ListItem
                button
                selected={isActive(path)}
                onClick={() => navigateTo(path)}
              >
                <ListItemText primary={title} className={classes.primary} />
              </ListItem>
              {
                subTopics && (
                  <Collapse in>
                    <List component="ul" disablePadding>
                      {
                        subTopics.map(({ title, path }) => (
                          <ListItem
                            key={title}
                            component="li"
                            button
                            className={classes.nested}
                            name={path}
                            selected={isActive(path)}
                            onClick={() => navigateTo(path)}
                          >
                            <ListItemText primary={title} />
                          </ListItem>
                        ))
                      }
                    </List>
                  </Collapse>
                )
              }
              <Divider />
            </div>
          ))
        }
      </List>
    </aside>
  )
}

export default withRouter(Aside);
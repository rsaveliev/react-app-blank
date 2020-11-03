import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';

import { addNewUser, removeUser } from '../../../redux-store/actions/live-example';

class LiveExamplePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openNewUserModal: false,
    };

    this.newUserData = {};
  }

  onOpenNewUserModal = () => {
    this.setState({ openNewUserModal: true });
  };

  onCloseNewUserModal = () => {
    this.setState({ openNewUserModal: false });
  };

  onChangeNewUserForm = (e) => {
    if (!e.target.name) {
      return;
    }
    this.newUserData[e.target.name] = e.target.value;
  }

  onAddNewUser = () => {
    const { onAddNewUser } = this.props;

    onAddNewUser(this.newUserData);
    this.newUserData = {};
    this.onCloseNewUserModal();
  }

  onRemoveUser = (index) => {
    const { users, onRemoveUser } = this.props;

    const data = [...users];

    data.splice(index, 1);
    onRemoveUser(data);
  }

  render() {
    const { users } = this.props;
    const { openNewUserModal } = this.state;

    return (
      <section className="live-example">
        <Typography gutterBottom variant="h4" component="h1">
          Live example
        </Typography>
        <br />
        <Typography gutterBottom color="primary">
          List of users
        </Typography>
        <br />
        <Grid container spacing={1}>
          <Button variant="contained" color="primary" onClick={this.onOpenNewUserModal}>
            NEW USER
          </Button>
          <Grid item xs={12}>
            <List>
              {
                users.map(({ name, dateOfBirth }, index) => (
                  <ListItem divider key={uuid(name)}>
                    <ListItemAvatar>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={name} secondary={dateOfBirth} />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => this.onRemoveUser(index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))
              }
            </List>
          </Grid>
        </Grid>
        <Dialog
          open={openNewUserModal}
          onClose={this.onCloseNewUserModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Add new user</DialogTitle>
          <DialogContent>
            <TextField
              label="Name"
              name="useName"
              onChange={this.onChangeNewUserForm}
            />
            <br />
            <br />
            <TextField
              label="Date of birth"
              name="dateOfBirth"
              onChange={this.onChangeNewUserForm}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.onCloseNewUserModal}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              onClick={this.onAddNewUser}
              color="primary"
              autoFocus
              variant="contained"
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </section>
    )
  }
}

const mapStateToProps = ({ liveExample }) => ({
  users: liveExample.users,
});

export default connect(mapStateToProps, {
  onAddNewUser: addNewUser,
  onRemoveUser: removeUser,
})(LiveExamplePage);

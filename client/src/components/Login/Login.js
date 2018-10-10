import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import "./Login.css";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    display: "block"
  },
  dense: {
    marginTop: 5,
  },
  menu: {
    width: 200,
  },
});

class Login extends React.Component {
  state = {
    username: '',
    age: '',
    multiline: 'Controlled',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
      <List>
        <ListItem className="input-field"><TextField
          id="standard-name"
          label="Username"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('username')}
          margin="normal"
        /></ListItem>
        <ListItem className="input-field"><TextField
          id="standard-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        /></ListItem>
        <ListItem>
          <Button variant="contained" color="primary">Login</Button>
        </ListItem>
        </List>
      </form>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import "./Login.css";
import axios from 'axios';

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
    email: '',
    password: ''
  };


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted creditials');

    axios
    .post('/api/login', {
      username: this.state.email,
      passowrd: this.state.password
    })
    .then(res => {
      console.log("login:")
      console.log(res)
      if (res.status === 200){
        this.props.update
      }
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
      <List>
        <ListItem className="input-field"><TextField
          id="standard-name"
          label="email"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('email')}
          margin="normal"
        /></ListItem>
        <ListItem className="input-field"><TextField
          id="standard-password-input"
          label="password"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('password')}
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

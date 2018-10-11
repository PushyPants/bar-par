import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import "./Login.css";
import {Redirect} from 'react-router-dom';
import axios from "axios";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    display: "block"
  },
  dense: {
    marginTop: 5
  },
  menu: {
    width: 400
  }
});

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
        username: '',
        password: '',
        redirectTo: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

}

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("signin");
    console.log(this.state.username);

    axios
      .post("/api/employee/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            email: response.data.email
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/dashboard"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      const { classes } = this.props;

      return (
        <div className="login-form">
          <Paper className={classes.paper}>
            <form className={classes.container} noValidate autoComplete="off">
              <img src="assets/imgs/logo2.png" alt="logo" height="304px" />
              <List>
                <ListItem className="input-field">
                  <Input
                    id="standard-name"
                    label="Email"
                    name="email"
                    className={classes.textField}
                    value={this.state.email}
                    onChange={this.handleChange}
                    margin="normal"
                    placeholder="Email"
                  />
                </ListItem>
                <ListItem className="input-field">
                  <Input
                    id="standard-name"
                    label="Password"
                    name="password"
                    className={classes.textField}
                    value={this.state.password}
                    onChange={this.handleChange}
                    margin="normal"
                    placeholder="Email"
                  />
                </ListItem>
                <ListItem>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmit}
                  >
                    Sign In
                  </Button>
                </ListItem>
              </List>
            </form>
          </Paper>
        </div>
      );
    }
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);

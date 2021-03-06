import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Input,
  InputLabel,
  FormControl,
  List,
  ListItem,
  Button,
  CssBaseline
} from "@material-ui/core";
import "./Login.css";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    margin: "auto",
    width: "100%",
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
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("signin");
    console.log(this.state.email);

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
          this.props.updateUser(response.data);
          this.props.LogInEmployee(response.data._id)
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
        <React.Fragment>
          <CssBaseline />
          <main className="login-form">
            <form className={classes.container} noValidate autoComplete="off">
              <List>
                <ListItem>
                  <img src="assets/imgs/logo2.png" alt="logo" height="304px" />
                </ListItem>
                <ListItem>
                  <FormControl
                    className="input-field"
                    margin="normal"
                    required
                    fullWidth
                  >
                    <InputLabel htmlFor="Email">Email</InputLabel>
                    <Input
                      autoFocus
                      id="standard-name"
                      label="Email"
                      name="email"
                      className={classes.textField}
                      value={this.state.email}
                      onChange={this.handleChange}
                      margin="normal"
                      autoComplete="email"
                    />
                  </FormControl>
                </ListItem>
                <ListItem>
                  <FormControl
                    className="input-field"
                    margin="normal"
                    required
                    fullWidth
                  >
                    <InputLabel htmlFor="Password">Password</InputLabel>
                    <Input
                      autoFocus
                      name="password"
                      id="standard-name"
                      type="password"
                      label="Password"
                      className={classes.textField}
                      value={this.state.password}
                      onChange={this.handleChange}
                      margin="normal"
                      autoComplete="current-password"
                    />
                  </FormControl>
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
          </main>
        </React.Fragment>
      );
    }
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    employeeList: state.reducer.employeeList,
    Employee: state.reducer.Employee,
    todaysDate: state.reducer.todaysDate,
    workingDate: state.reducer.workingDate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    LogInEmployee: id => dispatch(actions.LogInEmployee(id)),
    getEmployeeList: () => dispatch(actions.getEmployeeList()),
    setTodaysDate: data => dispatch(actions.setTodaysDate(data)),
    changeWorkingDate: data => dispatch(actions.changeWorkingDate(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Login));

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Input,
  FormControl,
  List,
  ListItem,
  Button,
  CssBaseline
} from "@material-ui/core";
import "./Login.css";
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

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
  state = {
    username: "",
    age: "",
    multiline: "Controlled"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  LogInEmployee = event => {
    this.props.LogInEmployee(event.target.value);
  };

  render() {
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
                  <Input
                    id="username"
                    label="username"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange("username")}
                    placeholder="User Name"
                    autoFocus
                    fullWidth
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
                  <Input
                    id="password"
                    label="password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    placeholder="Password"
                    fullWidth
                    autoFocus
                  />
                </FormControl>
              </ListItem>
              <ListItem>
                <Button variant="contained" color="primary">
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

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    employeeList: state.reducer.employeeList,
    Employee: state.reducer.Employee,
    todaysDate: state.reducer.todaysDate,
    workingDate: state.reducer.workingDate,

  }
}

const mapDispatchToProps = dispatch => {
  return {
    LogInEmployee: id => dispatch(actions.LogInEmployee(id)),
    getEmployeeList: () => dispatch(actions.getEmployeeList()),
    setTodaysDate: (data) => dispatch(actions.setTodaysDate(data)),
    changeWorkingDate: (data) => dispatch(actions.changeWorkingDate(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));

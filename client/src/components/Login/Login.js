import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import "./Login.css";

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
    marginTop: 5,
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

  render() {
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
                  label="Username"
                  className={classes.textField}
                  value={this.state.name}
                  onChange={this.handleChange("username")}
                  margin="normal"
                  placeholder="User Name"
                />
              </ListItem>
              <ListItem className="input-field">
                <Input
                  id="standard-password-input"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  placeholder="Password"
                />
              </ListItem>
              <ListItem>
                <Button variant="contained" color="primary">
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

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);

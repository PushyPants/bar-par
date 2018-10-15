import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  textField: {
    flexBasis: "100%"
  },
  Button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    width: 100
  }
});

function LoginDrop(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <React.Fragment>
        <TextField
          select
          name="Employee"
          className={classNames(
            classes.margin,
            classes.textField,
            classes.withoutLabel
          )}
          value={props.Employee}
          onChange={props.changeEmp}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            )
          }}
        >
          {props.employeeList.map(emp => (
            <MenuItem key={emp._id} name="Employee" value={emp._id}>
              {emp.firstName}
            </MenuItem>
          ))}
        </TextField>
      </React.Fragment>
    </div>
  );
}
// }

LoginDrop.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginDrop);

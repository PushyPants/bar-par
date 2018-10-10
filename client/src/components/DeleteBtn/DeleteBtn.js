import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit / 2
  },
  input: {
    display: "none"
  }
});

function DeleteBtn(props) {
  const { classes } = props;

  return (
    <Button
      variant="contained"
      color={props.color}
      className={classes.button}
      onClick={() => props.func(props.valOne, props.valTwo)}
    >
      {props.children}
    </Button>
  );
}

DeleteBtn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DeleteBtn);

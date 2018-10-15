import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    width: "100%"
  },
  textField: {
    margin: theme.spacing.unit * 2,
    width: 400,
  },
});

function DatePickers(props) {
  const { classes } = props;
  
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label=""
        type="date"
        value={props.workingDate}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={props.changeWorkingDate}
      />
    </form>
  );
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);
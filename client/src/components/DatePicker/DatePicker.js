import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing.unit * 10,
  },
  textField: {
    marginLeft: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit * 5,
    width: 200,
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
        onChange={props.onChange}
      />
    </form>
  );
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from "moment";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

let currentDate = moment().format('YYYY-MM-DD')

function DatePickers(props) {
  const { classes } = props;
  


  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label=""
        type="date"
        defaultValue={currentDate}
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
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import API from "../../utils/API";
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: theme.spacing.unit * 10
    },
    margin: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        flexBasis: "100%",
    },
});

const days = [
    {
        value: 'Sunday',
        label: 'Sunday',
    },
    {
        value: 'Monday',
        label: 'Monday',
    },
    {
        value: 'Tuesday',
        label: 'Tuesday',
    },
    {
        value: 'Wednesday',
        label: 'Wednesday',
    }, 
    {
        value: 'Thursday',
        label: 'Thursday',
    },
    {
        value: 'Friday',
        label: 'Friday',
    },
    {
        value: 'Saturday',
        label: 'Saturday',
    },
];

function AddAvail(props) {
    const { classes } = props;
    let Employee = props.Employee || "Loading";

        return (
            <div className={classes.root}>
            
            {(Employee !== undefined)?

            <React.Fragment>
                    <TextField
                        select
                    // label="Position"
                        name="Employee"
                        className={classNames(classes.margin, classes.textField)}
                        value={Employee}
                        onChange={props.handleInputChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Employee</InputAdornment>,
                        }}>
                            {props.employeeList.map(emp => (
                                <MenuItem key={emp._id} name="Employee" value={emp._id}>
                            {emp.firstName}</MenuItem>
                        ))}
                    </TextField>
                    
                    <TextField
                        select
                        // label="Position"
                        name="dayOfWeek"
                        className={classNames(classes.margin, classes.textField)}
                            value={props.dayOfWeek}
                            onChange={props.handleInputChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Day</InputAdornment>,
                        }}>
                        {days.map(day => (
                                <MenuItem key={day.value} value={day.value} onClick={props.select}>{day.value}</MenuItem>
                            ))}
                    </TextField>

                    <FormControl className={classNames(classes.margin, classes.textField)}>
                        <Input
                                value={props.unavailStart}
                                onChange={props.handleInputChange}
                            name="unavailStart"
                            placeholder="From"
                        />
                    </FormControl>

                    <FormControl className={classNames(classes.margin, classes.textField)}>
                        <Input
                                value={props.unavailEnd}
                                onChange={props.handleInputChange}
                            name="unavailEnd"
                            placeholder="To"
                        />
                    </FormControl>

                    <Button variant="contained" color="secondary" className={classes.button} disabled={!(props.Employee && props.unavailStart &&
                            props.unavailEnd)}
                            onClick={props.handleFormSubmit}>
                        Submit Availability
                    </Button>

                </React.Fragment>

                    : <div className={classes.root}>undefined</div>
                }
            </div>
        );
    }
// }

AddAvail.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddAvail);
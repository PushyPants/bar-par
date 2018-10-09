import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import AddAvailSlider from "../../components/AddAvailSilder";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: theme.spacing.unit * 5
    },
    margin: {
        marginLeft: theme.spacing.unit * 5,
        marginRight: theme.spacing.unit * 5,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        flexBasis: "100%",
    },
    Button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 4,
        width: 100
    },
});

const days = [
    {
        value: 0,
        label: 'Sunday',
    },
    {
        value: 1,
        label: 'Monday',
    },
    {
        value: 2,
        label: 'Tuesday',
    },
    {
        value: 3,
        label: 'Wednesday',
    }, 
    {
        value: 4,
        label: 'Thursday',
    },
    {
        value: 5,
        label: 'Friday',
    },
    {
        value: 6,
        label: 'Saturday',
    },
];

const time_convert = num => {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;

    if (minutes === 0) {
        minutes += "0";
    }

    if (hours > 24) {
        hours -= 24;
        return hours + ":" + minutes + " AM";
    } else if (hours > 12) {
        hours -= 12;
        return hours + ":" + minutes + " PM";
    }

    return hours + ":" + minutes + " AM";
};

function AddAvail(props) {
    const { classes } = props;

        return (
            <div className={classes.root}>

            <React.Fragment>
                {(props.AdminLevel > 2)?
                    <TextField
                    select
                    name="Employee"
                    className={classNames(classes.margin, classes.textField, classes.withoutLabel)}
                    value={props.Employee}
                    // onChange={props.handleInputChange}
                    onChange={props.ChangeEmployee}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Employee</InputAdornment>,
                    }}>
                            {props.employeeList.map(emp => (
                                <MenuItem key={emp._id} name="Employee" value={emp._id}>
                            {emp.firstName}</MenuItem>
                        ))}
                    </TextField>

                    :

                        <span className={classNames(classes.margin, classes.textField, classes.withoutLabel)}>
                            {props.EmployeeFirstName} {props.EmployeeLastName}
                        </span>
                    
                }
                    <TextField
                        select
                        // label="Position"
                        name="dayOfWeek"
                            className={classNames(classes.margin, classes.textField, classes.withoutLabel)}
                            value={props.dayOfWeek}
                            onChange={props.handleInputChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Day</InputAdornment>,
                        }}>
                        {days.map(day => (
                                <MenuItem key={day.value} value={day.value} onClick={props.select}>{day.label}</MenuItem>
                            ))}
                    </TextField>

                    <FormControl className={classNames(classes.margin, classes.textField,classes.withoutLabel)}>
                        <p>N/A From: {time_convert(props.unavailStart)} to {time_convert(props.unavailEnd)}</p>
                        <AddAvailSlider 
                            start={props.unavailStart}
                            end={props.unavailEnd}
                            update={props.updateTime}
                            isDisabled={false}/>
                            
                    </FormControl>

                    <Button variant="contained" color="primary" className={classNames(classes.Button)} 
                        disabled={!(props.Employee&&
                            props.unavailStart &&
                            props.unavailEnd &&
                            (props.dayOfWeek !== "default")
                            )}
                            onClick={props.handleFormSubmit}>
                        Submit
                    </Button>

                    <Button variant="contained" color="secondary" className={classNames(classes.Button)}
                            onClick={props.clearState}>
                        Clear
                    </Button>

                </React.Fragment>

                
            </div>
        );
    }
// }

AddAvail.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddAvail);
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
// import Button from '@material-ui/core/Button';
// import AddAvailSlider from "../../components/AddAvailSilder";

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


function LoginDrop(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>

            <React.Fragment>

                <TextField
                    select
                    name="Employee"
                    className={
                        classNames(classes.margin, classes.textField, classes.withoutLabel)}
                    value={props.Employee}
                    onChange={props.LogInEmployee}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Employee</InputAdornment>,
                    }}>
                    {props.employeeList.map(emp => (
                        <MenuItem key={emp._id} name="Employee" value={emp._id}>
                            {emp.firstName}</MenuItem>
                    ))}
                </TextField>

            </React.Fragment>


        </div>
    );
}
// }

LoginDrop.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginDrop);
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: theme.spacing.unit * 8
    },
    margin: {
        marginLeft: theme.spacing.unit * 5,
        marginRight: theme.spacing.unit * 5,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit,
    },
    textField: {
        flexBasis: "100%",
    },
});

const ranges = [
    {
        value: 'Admin',
        label: 'Admin',
    },
    {
        value: 'Manager',
        label: 'Manager',
    },
    {
        value: 'Employee',
        label: 'Employee',
    },
];

class AddEmp extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        isAdmin: "",
        email: "",
        phone: "",
        picture: "",
        password: ""
    };

    componentWillMount() { 
        this.setState({
            isAdmin: "Employee"
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.firstName &&
            this.state.lastName &&
            this.state.email &&
            this.state.password) {

            this.props.addEmployee({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                phone: this.state.phone,
                password: this.state.password,
                isAdmin: this.state.isAdmin
            })

            this.setState({
                firstName: "",
                lastName: "",
                isAdmin: "Employee",
                email: "",
                phone: "",
                picture: "",
                password: ""
            })
        }
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>

                <FormControl className={classNames(classes.margin, classes.textField, classes.withoutLabel)}>
                    <Input
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        name="firstName"
                        placeholder="First Name"
                    />
                </FormControl>

                <FormControl className={classNames(classes.margin, classes.textField, classes.withoutLabel)}>
                    <Input
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        name="lastName"
                        placeholder="Last Name"
                    />
                </FormControl>

                <FormControl className={classNames(classes.margin, classes.textField, classes.withoutLabel)}>
                    <Input
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder="Email"
                    />
                </FormControl>

                <FormControl className={classNames(classes.margin, classes.textField, classes.withoutLabel)}>
                    <Input
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                        name="phone"
                        placeholder="Phone"
                    />
                </FormControl>

                <FormControl className={classNames(classes.margin, classes.textField, classes.withoutLabel)}>
                    <Input
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="Password"
                    />
                </FormControl>

                <TextField
                    select
                    // label="Position"
                    name="isAdmin"
                    className={classNames(classes.margin, classes.textField, classes.withoutLabel)}
                    value={this.state.isAdmin}
                    onChange={this.handleInputChange}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">Position</InputAdornment>,
                    }}
                >
                    {ranges.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <Button variant="contained" color="secondary" className={classNames(classes.margin, classes.withoutLabel)} disabled={!(this.state.firstName &&
                    this.state.lastName &&
                    this.state.email &&
                    this.state.password)}
                    onClick={this.handleFormSubmit}>
                    Add Employee
                </Button>
            </div>
        );
    }
}

    AddEmp.propTypes = {
        classes: PropTypes.object.isRequired,
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            addEmployee: (EmpObject) => dispatch(actions.addEmployee(EmpObject))
        }
    }

    export default connect(null, mapDispatchToProps)(withStyles(styles)(AddEmp));
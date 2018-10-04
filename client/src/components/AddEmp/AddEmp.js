import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import API from "../../utils/API";
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: theme.spacing.unit * 10
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
        employeeList: [],
        availabilityList: [],
        firstName: "",
        lastName: "",
        isAdmin: "",
        email: "",
        phone: "",
        picture: "",
        password: ""
    };

    componentWillMount() {
        this.loadEmployees()
        this.loadAvailability()
        this.setState({
            isAdmin: "Employee"
        })
    }

    loadEmployees = () => {
        API.getEmployee().then(res =>
            this.setState({
                employeeList: res.data
            })
        )
    }

    loadAvailability = () => {
        API.getAvailability().then(res =>
            this.setState({
                availabilityList: res.data
            }))
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.firstName &&
            this.state.lastName &&
            this.state.email &&
            this.state.password) {

            API.addEmployee({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                phone: this.state.phone,
                password: this.state.password,
                isAdmin: this.state.isAdmin
            })
                .then(res => this.loadEmployees())
                .catch(err => console.log(err.response));

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

    export default withStyles(styles)(AddEmp);
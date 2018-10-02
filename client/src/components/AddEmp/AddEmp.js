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
import API from "../../utils/API";
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
        flexBasis: 200,
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

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

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

                <FormControl className={classNames(classes.margin, classes.textField)}>
                    <Input
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        name="firstName"
                        placeholder="First Name"
                    />
                </FormControl>

                <FormControl className={classNames(classes.margin, classes.textField)}>
                    <Input
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        name="lastName"
                        placeholder="Last Name"
                    />
                </FormControl>

                <FormControl className={classNames(classes.margin, classes.textField)}>
                    <Input
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder="Email"
                    />
                </FormControl>

                <FormControl className={classNames(classes.margin, classes.textField)}>
                    <Input
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                        name="phone"
                        placeholder="Phone"
                    />
                </FormControl>

                <FormControl className={classNames(classes.margin, classes.textField)}>
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
                    className={classNames(classes.margin, classes.textField)}
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

                <Button variant="contained" color="secondary" className={classes.button} disabled={!(this.state.firstName &&
                    this.state.lastName &&
                    this.state.email &&
                    this.state.password)}
                    onClick={this.handleFormSubmit}>
                    Add Employee
                </Button>


                {/* <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                    <Input
                        id="adornment-amount"
                        value={this.state.amount}
                        onChange={this.handleChange('amount')}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                </FormControl> */}

                {/* <FormControl
                    className={classNames(classes.margin, classes.withoutLabel, classes.textField)}
                    aria-describedby="weight-helper-text"
                >
                    <Input
                        id="adornment-weight"
                        value={this.state.weight}
                        onChange={this.handleChange('weight')}
                        endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                        inputProps={{
                            'aria-label': 'Weight',
                        }}
                    />
                    <FormHelperText id="weight-helper-text">Weight</FormHelperText>
                </FormControl> */}

                {/* <FormControl className={classNames(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="adornment-password">Password</InputLabel>
                    <Input
                        id="adornment-password"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                >
                                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl> */}
            </div>
        );
    }
}

    AddEmp.propTypes = {
        classes: PropTypes.object.isRequired,
    };

    export default withStyles(styles)(AddEmp);
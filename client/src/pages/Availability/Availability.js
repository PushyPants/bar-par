import React, { Component } from "react";
import Nav from "../../components/Nav";
import Grid from '@material-ui/core/Grid';
import AddAvail from "../../components/AddAvail";
import AvailTableExp from "../../components/AvailTableExp";
import { connect } from 'react-redux';
import * as actions from '../../store/actions';



class Availability extends Component {
    state = {
        Employee: "",
        dayOfWeek: "",
        unavailStart: "",
        unavailEnd: "",
    };

    componentWillMount() {
        this.loadEmployees();
        this.setState({
            Employee: "Admin",
            unavailStart: 480,
            unavailEnd: 1560
        })
    }
    
    loadEmployees = () => {
        this.props.getEmployeeList();
    }
    
    deleteAvailability = (empId, postId) => {
        this.props.updateEmployee(empId, postId)
    }
    
    updateAvailability = (availId, dayOfWeek, unavailStart, unavailEnd) => {
        this.props.updateAvailability(availId, dayOfWeek, unavailStart, unavailEnd)
    }

    LogInEmployee = (event) => {
        console.log(this.props.Employee.firstName)
        this.props.LogInEmployee(event.target.value);
    }
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    select = event => {
        const { value, innerText } = event.target;
        this.setState({
            EmpName: innerText,
            Employee: value
        });
    };

    updateTime = val => {
        this.setState({
            unavailStart: val[0],
            unavailEnd: val[1]
        })
    }

    clearState = () => {
        this.setState({
            dayOfWeek: "",
            unavailStart: 480,
            unavailEnd: 1560
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.props.Employee.firstName &&
            this.state.dayOfWeek &&
            this.state.unavailStart &&
            this.state.unavailEnd) {

            this.props.addAvailability({
                dayOfWeek: this.state.dayOfWeek,
                unavailStart: this.state.unavailStart,
                unavailEnd: this.state.unavailEnd,
                Employee: this.props.Employee.firstName
            })

            this.clearState()
        }
    };

    render() {
        return (
            <React.Fragment>
                <Nav>Availability</Nav>

                <Grid container spacing={8} justify="center">

                    <Grid item xs={12} sm={8}>
                        <AvailTableExp emp={this.props.Employee.firstName}
                            empArr={this.props.employeeList}
                            delAvail={this.deleteAvailability}
                            upAvail={this.updateAvailability}
                            updateTime={this.updateTime}/>
                    </Grid>

                    {(this.props.Employee.firstName !== "Admin") ? 
                    <Grid item xs={12} sm={4}>
                        <AddAvail handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                            LogInEmployee={this.LogInEmployee}
                            employeeList={this.props.employeeList}
                            Employee={this.props.Employee.firstName}
                            dayOfWeek={this.state.dayOfWeek}
                            unavailStart={this.state.unavailStart}
                            unavailEnd={this.state.unavailEnd}
                            updateTime={this.updateTime}
                            clearState={this.clearState}/>
                    </Grid>:
                    <Grid item xs={12} sm={6}>
                        <AddAvail handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                            LogInEmployee={this.LogInEmployee}
                            employeeList={this.props.employeeList}
                            Employee={this.props.Employee.firstName}
                            dayOfWeek={this.state.dayOfWeek}
                            unavailStart={this.state.unavailStart}
                            unavailEnd={this.state.unavailEnd}
                            updateTime={this.updateTime}clearState={this.clearState}/>
                    </Grid>

                    }



                </Grid>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employeeList: state.reducer.employeeList,
        Employee: state.reducer.Employee
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        LogInEmployee: (id) => dispatch(actions.LogInEmployee(id)),
        getEmployeeList: () => dispatch(actions.getEmployeeList()),
        addAvailability: (availObj) => dispatch(actions.addAvailability(availObj)),
        updateEmployee: (id, pId) => dispatch(actions.updateEmployee(id, pId)),
        updateAvailability: (availId, dayOfWeek, unavailStart, unavailEnd) => dispatch(actions.updateAvailability(availId, dayOfWeek, unavailStart, unavailEnd))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Availability);

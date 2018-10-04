import React, { Component } from "react";
import Nav from "../../components/Nav";
import Grid from '@material-ui/core/Grid';
import AddAvail from "../../components/AddAvail";
import AvailTable from "../../components/AvailTable";
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
            Employee: "Admin"
        })
    }

    loadEmployees = () => {
        this.props.getEmployeeList();
    }

    deleteAvailability = (empId, postId) => {
        this.props.updateEmployee(empId, postId)
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

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.Employee &&
            this.state.dayOfWeek &&
            this.state.unavailStart &&
            this.state.unavailEnd) {

            this.props.addAvailability({
                dayOfWeek: this.state.dayOfWeek,
                unavailStart: this.state.unavailStart,
                unavailEnd: this.state.unavailEnd,
                Employee: this.state.Employee
            })

            this.setState({
                dayOfWeek: "",
                unavailStart: "",
                unavailEnd: ""
            })
        }
    };

    render() {
        return (
            <React.Fragment>
                <Nav />
                <Grid container spacing={8}>

                    <Grid item xs={12} md={4}>
                        <AddAvail handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                            employeeList={this.props.employeeList}
                            Employee={this.state.Employee}
                            dayOfWeek={this.state.dayOfWeek}
                            unavailStart={this.state.unavailStart}
                            unavailEnd={this.state.unavailEnd}/>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <AvailTable emp={this.state.Employee}
                            empArr={this.props.employeeList}
                            delAvail={this.deleteAvailability}/>
                    </Grid>

                </Grid>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employeeList: state.reducer.employeeList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEmployeeList: () => dispatch(actions.getEmployeeList()),
        addAvailability: (availObj) => dispatch(actions.addAvailability(availObj)),
        updateEmployee: (id, pId) => dispatch(actions.updateEmployee(id, pId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Availability);

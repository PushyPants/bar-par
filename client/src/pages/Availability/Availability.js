import React, { Component } from "react";
import API from "../../utils/API";
// import { Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import ArticleTab from "../../components/ArticleTab"
// import SavedTab from "../../components/SavedTab"
// import Search from "../../components/Search";
import Nav from "../../components/Nav"
// import EmployeeUnavailable from "../../components/EmployeeUnavailable"
// import { Input, FormBtn } from "../../components/Form";
// import ReactCollapsingTable from 'react-collapsing-table';
// import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form } from 'reactstrap';
import Grid from '@material-ui/core/Grid';
import AddAvail from "../../components/AddAvail";
import AvailTable from "../../components/AvailTable";

class Availability extends Component {
    state = {
        employeeList: [],
        availabilityList: [],
        Employee: "",
        dayOfWeek: "",
        unavailStart: "",
        unavailEnd: "",
    };

    componentWillMount() {
        this.loadEmployees();
        this.loadAvailability();
        this.setState({
            Employee: this.state.employeeList[0]
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

            API.addAvailability({
                dayOfWeek: this.state.dayOfWeek,
                unavailStart: this.state.unavailStart,
                unavailEnd: this.state.unavailEnd,
                Employee: this.state.Employee
            })
                .then(res=>
                    API.updateEmployee(res.data.Employee, {avail: res.data._id}))
                .then(res => this.loadEmployees())
                .catch(err => console.log(err.response));

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
                            employeeList={this.state.employeeList}
                            Employee={this.state.Employee}
                            dayOfWeek={this.state.dayOfWeek}
                            unavailStart={this.state.unavailStart}
                            unavailEnd={this.state.unavailEnd}/>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <AvailTable emp={this.state.Employee} empArr={this.state.employeeList}/>
                    </Grid>

                </Grid>
            </React.Fragment>
        );
    }
}

export default Availability; 

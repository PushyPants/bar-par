import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import Grid from '@material-ui/core/Grid';
import AddAvail from "../../components/AddAvail";
import AvailTable from "../../components/AvailTable";
// import Slider from '@material-ui/lab/Slider';

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
        
    deleteAvailability = (empId, postId) => {
        API.updateEmployeeAvail(empId,
            { avail: postId })
            .then(res => this.loadEmployees())
            .then(res => (
              API.deleteAvailability(postId).then(res =>
                this.setState({
                    availabilityList: res.data
                }))  
            ))
            .catch(err => console.log(err.response));
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
                        <AvailTable emp={this.state.Employee}
                            empArr={this.state.employeeList}
                            delAvail={this.deleteAvailability}/>
                    </Grid>

                </Grid>
            </React.Fragment>
        );
    }
}

export default Availability; 

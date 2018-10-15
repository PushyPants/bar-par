import React, { Component } from "react";
import Nav from "../../components/Nav";
import AddAvail from "./components/AddAvail";
import AvailTableExp from "./components/AvailTableExp";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Redirect } from "react-router";
import { CssBaseline, Grid, Paper } from "@material-ui/core";

class Availability extends Component {
  state = {
    dayOfWeek: "",
    availStart: "",
    availEnd: ""
  };

  componentDidMount() {
    this.loadEmployees();
    this.setState({
      availStart: 480,
      availEnd: 1560,
      dayOfWeek: "default"
    });
  }

  loadEmployees = () => {
    this.props.getEmployeeList();
  };

  deleteAvailability = (empId, postId) => {
    this.props.updateEmployee(empId, postId);
  };

  updateAvailability = (availId, dayOfWeek, availStart, availEnd) => {
    this.props.updateAvailability(availId, dayOfWeek, availStart, availEnd);
  };

  ChangeEmployee = event => {
    this.props.ChangeEmployee(event.target.value);
  };

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
      availStart: val[0],
      availEnd: val[1]
    });
  };

  clearState = () => {
    this.setState({
      dayOfWeek: "default",
      availStart: 480,
      availEnd: 1560
    });
  };
  resetTime = () => {
    this.setState({
      availStart: 480,
      availEnd: 1560
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (
      this.state.dayOfWeek !== "default" &&
      this.state.availStart &&
      this.state.availEnd
    ) {
      this.props.addAvailability({
        dayOfWeek: this.state.dayOfWeek,
        availStart: this.state.availStart,
        availEnd: this.state.availEnd,
        Employee: this.props.LoggedInAs._id
      });

      this.clearState();
    }
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        {this.props.Employee.isAdmin < 1 ? <Redirect to="/" /> : null}
        <Nav>Availability</Nav>
        <Grid container justify="center">
          <Grid item xs={11} md={8}>
            <Paper square>
              <AvailTableExp
                emp={this.props.LoggedInAs._id}
                empArr={this.props.employeeList}
                delAvail={this.deleteAvailability}
                upAvail={this.updateAvailability}
                updateTime={this.updateTime}
              />
            </Paper>
          </Grid>
          <Grid item xs={11} md={4}>
            <Paper square>
              <AddAvail
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                ChangeEmployee={this.ChangeEmployee}
                employeeList={this.props.employeeList}
                Employee={this.props.LoggedInAs._id}
                EmployeeFirstName={this.props.LoggedInAs.firstName}
                EmployeeLastName={this.props.LoggedInAs.lastName}
                dayOfWeek={this.state.dayOfWeek}
                availStart={this.state.availStart}
                availEnd={this.state.availEnd}
                updateTime={this.updateTime}
                clearState={this.clearState}
                AdminLevel={this.props.Employee.isAdmin}
              />
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    employeeList: state.reducer.employeeList,
    Employee: state.reducer.Employee,
    LoggedInAs: state.reducer.LoggedInAs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ChangeEmployee: id => dispatch(actions.ChangeEmployee(id)),
    getEmployeeList: () => dispatch(actions.getEmployeeList()),
    addAvailability: availObj => dispatch(actions.addAvailability(availObj)),
    updateEmployee: (id, pId) => dispatch(actions.updateEmployee(id, pId)),
    updateAvailability: (availId, dayOfWeek, availStart, availEnd) =>
      dispatch(
        actions.updateAvailability(availId, dayOfWeek, availStart, availEnd)
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Availability);

import React, { Component } from "react";
import Nav from "../../components/Nav";
import DatePickers from "./components/DatePicker";
import ShiftTableExp from "./components/ShiftTableExp";
import { Grid, Paper, CssBaseline } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Redirect } from "react-router";
import moment from "moment";
// import Paper from '@material-ui/core/Paper';

class Availability extends Component {
  componentWillMount() {
    this.loadEmployees();
    this.loadShifts();
    this.setTodaysDate();
  }

  loadShifts = () => {
    this.props.getShiftList();
  };

  setTodaysDate = () => {
    this.props.setTodaysDate(moment().format("YYYY-MM-DD"));
  };

  changeWorkingDate = event => {
    this.props.changeWorkingDate(event.target.value);
  };

  loadEmployees = () => {
    this.props.getEmployeeList();
  };

  ChangeEmployee = event => {
    this.props.ChangeEmployee(event.target.value);
  };

  addShift = (date, day, Employee) => {
    this.props.addShift({
      date: date,
      dayOfWeek: day,
      shiftStart: 480,
      shiftEnd: 1560,
      Employee: Employee
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        {this.props.Employee.firstName === "Admin" ? <Redirect to="/" /> : null}
        <Nav>
          {this.props.LoggedInAs.firstName} {this.props.LoggedInAs.lastName}
        </Nav>
        <Grid container spacing={8} justify="center" alignItems="baseline">
          <Grid item xs={11} md={4}>
            <Paper square>
              <DatePickers
                changeWorkingDate={this.changeWorkingDate}
                workingDate={this.props.workingDate}
              />
            </Paper>
          </Grid>
          <Grid item xs={11} md={7}>
            <Paper square>
              <ShiftTableExp
                AdminLevel={this.props.Employee.isAdmin}
                Employee={this.props.LoggedInAs._id}
                employeeList={this.props.employeeList}
                workingDate={this.props.workingDate}
                addShift={this.addShift}
                shiftList={this.props.shiftList}
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
    LoggedInAs: state.reducer.LoggedInAs,
    todaysDate: state.reducer.todaysDate,
    workingDate: state.reducer.workingDate,
    shiftList: state.reducer.shiftList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ChangeEmployee: id => dispatch(actions.ChangeEmployee(id)),
    addShift: data => dispatch(actions.addShift(data)),
    setTodaysDate: data => dispatch(actions.setTodaysDate(data)),
    changeWorkingDate: data => dispatch(actions.changeWorkingDate(data)),
    getEmployeeList: () => dispatch(actions.getEmployeeList()),
    getShiftList: () => dispatch(actions.getShiftList()),
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

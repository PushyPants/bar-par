import React, { Component } from "react";
import Nav from "../../components/Nav";
import "./Landing.css";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
// import Grid from '@material-ui/core/Grid';
import EmployeeDrop from "../../components/EmployeeDrop";
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
// import DatePickers from "../../components/DatePicker/DatePicker";
import Login from "../../components/Login";
import moment from "moment";
// import MySlider from "../../components/Slider/Slider";
// import LoginDrop from "../../components/LoginDrop";
// import { connect } from "react-redux";
// import * as actions from "../../store/actions";
import Footer from "../../components/Footer";

class Landing extends Component {

  state =({
    currentDate : ''
  })

  componentWillMount() {
    this.loadEmployees();
    this.setTodaysDate();
  }

  loadEmployees = () => {
    this.props.getEmployeeList();
  };

  LogInEmployee = event => {
    this.props.LogInEmployee(event.target.value);
  };

  setTodaysDate = () => {
    this.props.setTodaysDate(moment().format('YYYY-MM-DD'))
  }

  changeWorkingDate = (event) => {
    this.props.changeWorkingDate(event.target.value);
  }

  render() {
    return (
      <React.Fragment>

        <Nav>Bar Par </Nav>

        <Login />

          <EmployeeDrop 
            changeEmp={this.LogInEmployee}
            employeeList={this.props.employeeList}
            Employee={this.props.Employee._id}/>
            
        <Footer />

      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    employeeList: state.reducer.employeeList,
    Employee: state.reducer.Employee,
    todaysDate: state.reducer.todaysDate,
    workingDate: state.reducer.workingDate,

  }
}

const mapDispatchToProps = dispatch => {
  return {
    LogInEmployee: id => dispatch(actions.LogInEmployee(id)),
    getEmployeeList: () => dispatch(actions.getEmployeeList()),
    setTodaysDate: (data) => dispatch(actions.setTodaysDate(data)),
    changeWorkingDate: (data) => dispatch(actions.changeWorkingDate(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

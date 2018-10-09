import React, { Component } from "react";
import Nav from "../../components/Nav";
import Login from "../../components/Login";
import "./Landing.css";
import DatePickers from "../../components/DatePicker/DatePicker";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import MySlider from "../../components/Slider/Slider";
import LoginDrop from "../../components/LoginDrop";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Footer from "../../components/Footer";

class Landing extends Component {
  handleChange(event) {
    console.log(event.target.value);
  }

  componentWillMount() {
    this.loadEmployees();
    this.setState({
      Employee: "Admin",
      unavailStart: 480,
      unavailEnd: 1560
    });
  }

  loadEmployees = () => {
    this.props.getEmployeeList();
  };

  LogInEmployee = event => {
    this.props.LogInEmployee(event.target.value);
  };

  onSliderChange = val => {
    console.log(`${this.time_convert(val[0])} ${this.time_convert(val[1])}`);
  };

  time_convert = num => {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;

    if (minutes === 0) {
      minutes += "0";
    }

    if (hours > 24) {
      hours -= 24;
      return hours + ":" + minutes + " AM";
    } else if (hours > 12) {
      hours -= 12;
      return hours + ":" + minutes + " PM";
    }
    return hours + ":" + minutes + " AM";
  };

  render() {
    return (
      <React.Fragment>
        <Nav>Bar Par </Nav>
        <Login />
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    employeeList: state.reducer.employeeList,
    Employee: state.reducer.Employee
  };
};

const mapDispatchToProps = dispatch => {
  return {
    LogInEmployee: id => dispatch(actions.LogInEmployee(id)),
    getEmployeeList: () => dispatch(actions.getEmployeeList()),
    addAvailability: availObj => dispatch(actions.addAvailability(availObj)),
    updateEmployee: (id, pId) => dispatch(actions.updateEmployee(id, pId)),
    updateAvailability: (availId, dayOfWeek, unavailStart, unavailEnd) =>
      dispatch(
        actions.updateAvailability(availId, dayOfWeek, unavailStart, unavailEnd)
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);

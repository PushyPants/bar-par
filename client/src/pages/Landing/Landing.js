import React, { Component } from "react";
import Nav from "../../components/Nav";
import Login from "../../components/Login";
import "./Landing.css";
// import DatePickers from "../../components/DatePicker/DatePicker";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
// import ReactDOM from "react-dom";
// import Tooltip from "rc-tooltip";
// import Slider from "rc-slider";
// import moment from "moment";
import MySlider from "../../components/Slider/Slider";
import EmployeeDrop from "../../components/EmployeeDrop";
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
// import DatetimeSlider from "react-datetime-slider";
// import "react-datetime-slider/css/ReactDatetimeSlider.css";

// const createSliderWithTooltip = Slider.createSliderWithTooltip;
// const Range = createSliderWithTooltip(Slider.Range);
// const Handle = Slider.Handle;

// const handle = props => {
//   const { value, dragging, index, ...restProps } = props;
//   return (
//     <Tooltip
//       prefixCls="rc-slider-tooltip"
//       overlay={value}
//       visible={dragging}
//       placement="top"
//       key={index}
//     >
//       <Handle value={value} {...restProps} />
//     </Tooltip>
//   );
// };

// const wrapperStyle = { width: 400, margin: 50 };
// let start = moment("08:00", "HH:mm").format("x");
// let end = moment("20:00", "HH:mm").format("x");
// console.log(start);

class Landing extends Component {


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

  LogInEmployee = (event) => {
    this.props.LogInEmployee(event.target.value);
  }

  onSliderChange = val => {
    console.log(`${this.time_convert(val[0])} ${this.time_convert(val[1])}`)
  }

  time_convert = num => {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;

    if(minutes === 0){
      minutes += "0";
    }

    if(hours > 24){
      hours -= 24;
      return hours + ":" + minutes + " AM";
    } else if (hours > 12){
      hours -= 12;
      return hours + ":" + minutes + " PM";
    }
    return hours + ":" + minutes + " AM";
  }

  render() {
    return (
      <React.Fragment>
        <Nav>Bar Par </Nav>
        <Login />

        <EmployeeDrop 
          LogInEmployee={this.LogInEmployee}
          employeeList={this.props.employeeList}
          Employee={this.props.Employee._id}/>




        {/* <DatePickers/> */}
          {/* <div style={wrapperStyle}>
            <p> Range with custom handle</p>
            
                <Range
                step={15}
                min={480}
                max={1560}
                defaultValue={[0, 1000]}
                tipFormatter={value => (value)? this.time_convert(value) :"Error"}
                onAfterChange={this.onSliderChange}
                />
          </div> */}
          <MySlider />
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

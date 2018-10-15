import React, { Component } from "react";
import Login from "../../components/Login";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class SignIn extends Component {
  constructor(props) {
    super(props)
  {this.updateUser = this.props.updateUser}
  }
  
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

  render() {
    return (
      <React.Fragment>
        <div id="signIn">
          <Login updateUser={this.updateUser}/>
        </div>
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
)(SignIn);

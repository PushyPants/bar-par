import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import EmpTable from "../../components/EmpTable";
import AddEmp from "../../components/AddEmp";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Redirect } from "react-router";

class Employee extends Component {
  state = {
    firstName: "",
    lastName: "",
    isAdmin: "",
    email: "",
    phone: "",
    picture: "",
    password: ""
  };

  componentWillMount() {
    this.loadEmployees();
    this.setState({
      isAdmin: "Employee"
    });
  }

  loadEmployees = () => {
    this.props.getEmployeeList();
  };

  render() {
    return (
      <React.Fragment>
        {this.props.Employee.isAdmin < 2 ? <Redirect to="/" /> : null}
        <Nav> Add Employee </Nav>

        <Grid container>
          <Grid item xs={12} sm={4}>
            <AddEmp />
          </Grid>

          <Grid item xs={12} sm={8}>
            <EmpTable empArr={this.props.employeeList} />
          </Grid>
        </Grid>
        <Footer />
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
    getEmployeeList: () => dispatch(actions.getEmployeeList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employee);

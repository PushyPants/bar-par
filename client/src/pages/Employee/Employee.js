import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import EmpTable from "../../components/EmpTable";
import AddEmp from "../../components/AddEmp";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Redirect } from "react-router";

const styles = {
  root: {
    width: "auto",
  },
  shadows: {
    boxShadow: "0 3px 6px #00000025",
  }
};

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
    const classes = this.props;
    return (
      <React.Fragment>
        {this.props.Employee.isAdmin < 2 ? <Redirect to="/" /> : null}
        <Nav> Add Employee </Nav>
        <Grid container justify="space-around" alignItems="baseline" className={classes.root}>
          <Grid item xs={11} md={4}>
            <Paper square className={classes.shadows}>
              <AddEmp />
            </Paper>
          </Grid>
          <Grid item xs={11} md={7}>
            <Paper square className={classes.shadows}>
              <EmpTable
                empArr={this.props.employeeList}
                deleteEmployee={this.props.deleteEmployee}
              />
            </Paper>
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
    getEmployeeList: () => dispatch(actions.getEmployeeList()),
    deleteEmployee: id => dispatch(actions.deleteEmployee(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Employee));

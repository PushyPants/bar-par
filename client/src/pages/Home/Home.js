import React, { Component } from "react";
import Nav from "../../components/Nav";
import Grid from '@material-ui/core/Grid';
import EmpTable from '../../components/EmpTable';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class Home extends Component {
    state = {
        Employee: ''
    };

    componentWillMount() {
        this.loadEmployees()
    }

    loadEmployees = () => {
        this.props.getEmployeeList();
    }

    render() {
        return (
        <React.Fragment>
            <Nav>Home</Nav>

            <Grid container spacing={8}>

                <Grid item xs={12} md={12}>
                    <EmpTable empArr={this.props.employeeList}/>
                </Grid>

            </Grid>
        </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    employeeList: state.reducer.employeeList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEmployeeList: () => dispatch(actions.getEmployeeList()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

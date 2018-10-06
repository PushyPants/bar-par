import React, { Component } from "react";
import Nav from "../../components/Nav";
import Grid from '@material-ui/core/Grid';
import EmpTable from "../../components/EmpTable";
import AddEmp from "../../components/AddEmp";
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class Employee extends Component {

    state = {
        firstName: "",
        lastName: "",
        isAdmin: "",
        email: "",
        phone: "",
        picture: "",
        password: ""
    }

    componentWillMount(){
        this.loadEmployees()
        this.setState({
            isAdmin: "Employee"
        })
    }

    loadEmployees = ()=> {
        this.props.getEmployeeList();
    }
        
    render(){
        
    return(
        <React.Fragment>
        <Nav> Employee </Nav>

        <Grid container spacing={8}>
            <Grid item xs={12} sm={4}>
                <AddEmp />
            </Grid>

            <Grid item xs={12} sm={8}>
                <EmpTable empArr={this.props.employeeList}/>
            </Grid> 
        </Grid>
        </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        employeeList: state.reducer.employeeList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEmployeeList: () => dispatch(actions.getEmployeeList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
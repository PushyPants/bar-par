import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import Grid from '@material-ui/core/Grid';
import EmpTable from "../../components/EmpTable";
import AddEmp from "../../components/AddEmp";

class Employee extends Component {

    state = {
        employeeList: [],
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
        API.getEmployee().then(res=>
            this.setState({
                employeeList: res.data
            })
        )
    }
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    select = event => {
        this.setState({
            isAdmin: event.target.innerText
        })
    }
    
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.firstName &&
            this.state.lastName &&
            this.state.email&&
            this.state.password) {
                
                API.addEmployee({
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    phone: this.state.phone,
                    password: this.state.password,
                    isAdmin: this.state.isAdmin
                })
                .then(res => this.loadEmployees())
                .catch(err => console.log(err.response));

                this.setState({
                    firstName: "",
                    lastName: "",
                    isAdmin: "Employee",
                    email: "",
                    phone: "",
                    picture: "",
                    password: ""
                })
            }
        };
        
    render(){
        
    return(
        <React.Fragment>
        <Nav />

        <Grid container spacing={8}>
            <Grid item xs={4} md={4}>
                <AddEmp />
            </Grid>

            <Grid item xs={8} md={8}>
                <EmpTable empArr={this.state.employeeList}/>
            </Grid> 
        </Grid>
        </React.Fragment>
        )
    }
}

export default Employee; 
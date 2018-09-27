import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import Nav from "../../components/Nav";
import DeleteEmp from "../../components/DeleteEmp";
// import EmpAvail from "../../components/EmpAvail";
import { Input, FormBtn } from "../../components/Form";
import ReactCollapsingTable from 'react-collapsing-table';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Employee extends Component {
    state = {
        employeeList: [],
        availabilityList: [],
        columns: [
            { accessor: 'firstName', label: 'First Name', priorityLevel: 1, position: 1, minWidth: 150, },
            { accessor: 'lastName', label: 'Last Name', priorityLevel: 2, position: 2, minWidth: 150, },
            { accessor: 'email', label: 'Email', priorityLevel: 5, position: 3, minWidth: 2000, },
            { accessor: 'phone', label: 'Phone', priorityLevel: 3, position: 4, minWidth: 150, },
            { accessor: 'isAdmin', label: 'Position', priorityLevel: 4, position: 5, minWidth: 150, },
            { accessor: `_id`, label: 'ID', priorityLevel: 5, position: 6, minWidth: 2000 , CustomComponent: DeleteEmp   },
            { accessor: `_id:${0}`, label: '', priorityLevel: 5, position: 7, minWidth: 2000, CustomComponent: DeleteEmp  },
        ],
        firstName: "",
        lastName: "",
        isAdmin: "",
        email: "",
        phone: "",
        picture: "",
        password: ""
    }


    componentDidMount(){
        this.loadEmployees()
        this.loadAvailability()
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

    loadAvailability = () => {
        API.getAvailability().then(res=>
            this.setState({
                availabilityList: res.data
            }))
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

    let callback = [
        {"_id:0": this.loadEmployees},
        {"_id": this.loadEmployees},
        {"_id:1": this.loadAvailability}
    ]

    return(
        <Container>
            <Nav />
            <Row>
                <Col size="md-4 s-12">
                    <form>
                        <Input
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                            name="firstName"
                            placeholder="First Name"
                            />
                        <Input
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                            name="lastName"
                            placeholder="Last Name"
                            />
                        <Input
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email"
                            placeholder="Email"
                            />
                        <Input
                            value={this.state.phone}
                            onChange={this.handleInputChange}
                            name="phone"
                            placeholder="Phone"
                            />
                        <Input
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="password"
                            placeholder="Password"
                            />

                        <UncontrolledDropdown>
                            <DropdownToggle caret>
                                {this.state.isAdmin}
                            </DropdownToggle>

                            <DropdownMenu>
                                <DropdownItem onClick={this.select}>Admin</DropdownItem>
                                <DropdownItem onClick={this.select}>Manager</DropdownItem>
                            </DropdownMenu>

                        </UncontrolledDropdown>


                        <FormBtn
                                disabled={!(this.state.firstName &&
                                    this.state.lastName &&
                                    this.state.email&&
                                    this.state.password)}
                                    onClick={this.handleFormSubmit}>
                            Submit Employee
                    </FormBtn>
                    </form>
                </Col>

                <Col size="md-8 s-12">
                <div>
                    <ReactCollapsingTable
                        rows={this.state.employeeList}
                        columns={this.state.columns}
                        callbacks={callback} /></div>
                </Col>  
            </Row>
        </Container>
        )
    }
}

export default Employee; 
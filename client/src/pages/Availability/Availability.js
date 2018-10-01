import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
// import ArticleTab from "../../components/ArticleTab"
// import SavedTab from "../../components/SavedTab"
// import Search from "../../components/Search";
import Nav from "../../components/Nav"
import EmployeeUnavailable from "../../components/EmployeeUnavailable"
import { Input, FormBtn } from "../../components/Form";
// import ReactCollapsingTable from 'react-collapsing-table';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Form } from 'reactstrap';

class Availability extends Component {
    state = {
        employeeList: [],
        availabilityList: [],
        dayOfWeek: "",
        unavailStart: "",
        unavailEnd: "",
        Employee: "",
        EmpName: ""
    };

    componentDidMount() {
        this.loadEmployees();
        this.loadAvailability();
    }

    loadEmployees = () => {
        API.getEmployee().then(res =>
            this.setState({
                employeeList: res.data
            })
        )
    }

    loadAvailability = () => {
        API.getAvailability().then(res =>
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
        const { value, innerText } = event.target;
        this.setState({
            EmpName: innerText,
            Employee: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.Employee &&
            this.state.dayOfWeek &&
            this.state.unavailStart &&
            this.state.unavailEnd) {

                console.log(this.state)

            API.addAvailability({
                dayOfWeek: this.state.dayOfWeek,
                unavailStart: this.state.unavailStart,
                unavailEnd: this.state.unavailEnd,
                Employee: this.state.Employee
            })
                .then(res => this.loadAvailability())
                .catch(err => console.log(err.response));

            this.setState({
                dayOfWeek: "",
                unavailStart: "",
                unavailEnd: "",
                Employee: ""
            })
        }
    };

    render() {
        return (
            <Container>
                <Nav>Availability</Nav>
                <List>
                    {this.state.availabilityList.map(emp => (
                        <ListItem key={emp._id}>
                            <EmployeeUnavailable AvailId={emp} allEmp={this.state.employeeList}/>
                        </ListItem>
                    ))}
                </List>


                <Form inline>

                    <UncontrolledDropdown>
                        <DropdownToggle caret>
                            {(this.state.EmpName)? this.state.EmpName : 'Employee'}
                        </DropdownToggle>
                        <DropdownMenu>
                            {this.state.employeeList.map(emp => (
                                <DropdownItem key={emp._id} value={emp._id} onClick={this.select}>{emp.firstName}</DropdownItem>
                            ))}

                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown>
                        <DropdownToggle caret>
                            {(this.state.dayOfWeek) ? this.state.dayOfWeek : 'Week Day'}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem name="dayOfWeek" value="Sunday" onClick={this.handleInputChange}>Sunday</DropdownItem>
                            <DropdownItem name="dayOfWeek" value="Monday" onClick={this.handleInputChange}>Monday</DropdownItem>
                            <DropdownItem name="dayOfWeek" value="Tuesday" onClick={this.handleInputChange}>Tuesday</DropdownItem>
                            <DropdownItem name="dayOfWeek" value="Wednesday" onClick={this.handleInputChange}>Wednesday</DropdownItem>
                            <DropdownItem name="dayOfWeek" value="Thursday" onClick={this.handleInputChange}>Thursday</DropdownItem>
                            <DropdownItem name="dayOfWeek" value="Friday" onClick={this.handleInputChange}>Friday</DropdownItem>
                            <DropdownItem name="dayOfWeek" value="Saturday" onClick={this.handleInputChange}>Saturday</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    <Input
                        value={this.state.unavailStart}
                        onChange={this.handleInputChange}
                        name="unavailStart"
                        placeholder="Unavailable From"
                    />
                    <Input
                        value={this.state.unavailEnd}
                        onChange={this.handleInputChange}
                        name="unavailEnd"
                        placeholder="Unavailable To"
                    />

                    <FormBtn
                        disabled={!(this.state.Employee &&
                            this.state.dayOfWeek &&
                            this.state.unavailStart &&
                            this.state.unavailEnd)}
                            onClick={this.handleFormSubmit}>
                        Submit Employee
                    </FormBtn>
                </Form>

            </Container>
        );
    }
}

export default Availability; 

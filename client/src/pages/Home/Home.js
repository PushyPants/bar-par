import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import ArticleTab from "../../components/ArticleTab"
// import SavedTab from "../../components/SavedTab"
// import Search from "../../components/Search";
import Nav from "../../components/Nav"
import ReactCollapsingTable from 'react-collapsing-table'


class Home extends Component {
    state = {
        employeeList: [],
        columns: [
            { accessor: 'firstName', label: 'First Name', priorityLevel: 1, position: 1, minWidth: 150, },
            { accessor: 'lastName', label: 'Last Name', priorityLevel: 2, position: 2, minWidth: 150, },
            { accessor: 'email', label: 'Email', priorityLevel: 5, position: 3, minWidth: 250, },
            { accessor: 'phone', label: 'Phone', priorityLevel: 3, position: 4, minWidth: 150, },
            { accessor: 'isAdmin', label: 'Position', priorityLevel: 4, position: 5, minWidth: 150, },
        ]
    };

    componentDidMount() {
        this.loadEmployees()
    }

    loadEmployees = () => {
        API.getEmployee().then(res =>
            this.setState({
                employeeList: res.data
            })
        )
    }

    render() {
        return (
            <Container>
                <Nav />
                <ReactCollapsingTable rows={ this.state.employeeList } columns={ this.state.columns } />
            </Container>
        );
    }
}

export default Home; 

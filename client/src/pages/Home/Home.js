import React, { Component } from "react";
import API from "../../utils/API";
// import { Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import ArticleTab from "../../components/ArticleTab"
// import SavedTab from "../../components/SavedTab"
// import Search from "../../components/Search";
import Nav from "../../components/Nav"
// import ReactCollapsingTable from 'react-collapsing-table';
import Grid from '@material-ui/core/Grid';
import EmpTable from '../../components/EmpTable';


class Home extends Component {
    state = {
        employeeList: []
    };

    componentWillMount() {
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
        <React.Fragment>
            <Nav />

            <Grid container spacing={8}>

                <Grid item xs={12} md={12}>
                    <EmpTable empArr={this.state.employeeList}/>
                </Grid>

            </Grid>
        </React.Fragment>
        );
    }
}

export default Home; 

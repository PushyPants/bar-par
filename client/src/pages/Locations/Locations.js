import React, { Component } from "react";
import Nav from "../../components/Nav";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import API from "../../utils/API"
import {FormBtn, Input, } from "../../components/Form"

class Locations extends Component {
    state = {
        Locations: []
    };

    componentDidMount = () => {
        this.getLocations()
    };

    getLocations = () => {
        API.getLocations().then(res => {
            console.log(res.data);
            this.setState({ Locations: res.data });
        });
        // console.log("[getLocations] results after await: ",results);

    }
    handleSubmit = () =>{
        console.log("I'm clicked")
    }

    render() {
        return (
        <React.Fragment>
            <Nav>Locations</Nav>

                {this.state.Locations.length > 0 ? this.state.Locations[0].positions.map((location, i) =>
                <div id = {location.product_id}>{location.product_id}  <FormBtn onClick ={this.handleSubmit}/> </div>  ) : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(Locations);

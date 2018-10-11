import React, { Component } from "react";
import Nav from "../../components/Nav";
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import API from "../../utils/API"
import Footer from "../../components/Footer";
import LocationItem from "../../components/LocationItem";
import "./Locations.css";

class Locations extends Component {
    state = {
        Locations: [],
        name: "test"
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

    render() {
        return (
        <React.Fragment>
            <Nav>Locations</Nav>
            
            <div className="locations-list">
                <LocationItem name={"Location passed name"}>This is the children</LocationItem>
                <LocationItem />
                <LocationItem />
                <LocationItem />
                <LocationItem />
                <LocationItem />
                <LocationItem />
            </div>

            <Footer />
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

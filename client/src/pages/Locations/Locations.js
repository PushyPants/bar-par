import React, { Component } from "react";
import Nav from "../../components/Nav";
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import API from "../../utils/API"
import Footer from "../../components/Footer";
import LocationItem from "../../components/LocationItem";
import "./Locations.css";
import { ListItem, Divider } from "@material-ui/core";
import { List } from "@material-ui/core";
import Button from "@material-ui/core/Button";

class Locations extends Component {
    state = {
        Locations: [],
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
                <LocationItem>
                            <List>
                                <ListItem><Button className="station-link"><strong>Speed Rail 01</strong></Button></ListItem>
                                <Divider/>
                                <ListItem className="station-link"><Button ><strong>Speed Rail 02</strong></Button></ListItem>
                                <Divider/>
                                <ListItem><Button className="station-link"><strong>Speed Rail 03</strong></Button></ListItem>
                                <Divider/>
                                <ListItem><Button className="station-link"><strong>Speed Rail 04</strong></Button></ListItem>
                                <Divider/>
                                <ListItem><Button className="station-link"><strong>Speed Rail 05</strong></Button></ListItem>
                                <Divider/>
                                <ListItem><Button className="station-link"><strong>Speed Rail 06</strong></Button></ListItem>
                                <Divider/>
                            </List>
                </LocationItem>
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

import React, { Component } from "react";
import Nav from "../../components/Nav";
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import API from "../../utils/API"
import Footer from "../../components/Footer";
import LocationItem from "../../components/LocationItem";
import "./Locations.css";
import { ListItem } from "@material-ui/core";
import { List } from "@material-ui/core";

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
        let list = this.state.Locations.map((location) => <LocationItem key={location.location_id} name={location.name}>
                    <div className="location-preview">
                        <div className="product-name">
                            <List>
                                <ListItem><strong>Product Name</strong></ListItem>
                                <ListItem>Deep Eddy</ListItem> {/*need map for each product name*/}
                            </List>
                        </div>
                        <div className="inv-date">
                            <List>
                                <ListItem><strong>Last Updated</strong></ListItem>
                                <ListItem>Oct. 5, 2018</ListItem> {/*need map for each date*/}
                            </List>
                        </div>
                        <div className="updated-by">
                            <List>
                                <ListItem><strong>Updated By</strong></ListItem>
                                <ListItem>PushyPants</ListItem> {/*need map for each username name*/}
                            </List>
                        </div>
                        <div className="quanty">
                            <List>
                                <ListItem><strong>Qty.</strong></ListItem>
                                <ListItem>1345</ListItem> {/*need map for each qty*/}
                            </List>
                        </div>
                    </div>
        </LocationItem>)

        return (
        <React.Fragment>
            <Nav>Locations</Nav>
            <div className="locations-list">
                {this.state.Locations.length > 0 ? list : null}
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

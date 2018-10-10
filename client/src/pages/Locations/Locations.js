import React, { Component } from "react";
import Nav from "../../components/Nav";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import API from "../../utils/API"
import Button from '@material-ui/core/Button';
import Footer from "../../components/Footer";
import { Link } from 'react-router-dom';
import "./Locations.css";

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

    render() {
        return (
        <React.Fragment>
            <Nav>Locations</Nav>
            
            <div className="locations-list">
                <List>
                    <ListItem><Button><Link to="/inventory">Location 1</Link></Button></ListItem>
                    <ListItem><Button><Link to="/inventory">Location 2</Link></Button></ListItem>
                    <ListItem><Button><Link to="/inventory">Location 3</Link></Button></ListItem>
                    <ListItem><Button><Link to="/inventory">Location 4</Link></Button></ListItem>
                    <ListItem><Button><Link to="/inventory">Location 5</Link></Button></ListItem>
                    <ListItem><Button><Link to="/inventory">Location 6</Link></Button></ListItem>
                    {/* {this.state.Locations.length > 0 ? this.state.Locations[0].locations.map((location, i) =>
                        <ListItem>{location.name}</ListItem> )} */}
                </List>
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

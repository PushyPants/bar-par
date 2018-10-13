import React, { Component } from "react";
import Nav from "../../components/Nav";
import LocationItem from "../../components/LocationItem";
import API from "../../utils/API";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Button, List, ListItem, Divider } from "@material-ui/core";
import "./Locations.css";

class Locations extends Component {
  state = {
    Locations: []
  };

  componentDidMount = () => {
    this.getLocations();
  };

  getLocations = () => {
    API.getLocations().then(res => {
      console.log(res.data);
      this.setState({
        Locations: res.data
      });
    });
    // console.log("[getLocations] results after await: ",results);
  };

  render() {
    return (
      <React.Fragment>
        <Nav> Locations </Nav>
        <div className="locations-list">
          <LocationItem>
            <List>
              <ListItem>
                <Button className="station-link"> Speed Rail 01 </Button>
              </ListItem>
              <Divider />
              <ListItem>
                <Button className="station-link"> Speed Rail 02 </Button>
              </ListItem>
              <Divider />
              <ListItem>
                <Button className={"station-link"}> Speed Rail 03 </Button>
              </ListItem>
              <Divider />
              <ListItem>
                <Button className="station-link"> Speed Rail 04 </Button>
              </ListItem>
              <Divider />
              <ListItem>
                <Button className="station-link"> Speed Rail 05 </Button>
              </ListItem>
              <Divider />
              <ListItem>
                <Button className="station-link"> Speed Rail 06 </Button>
              </ListItem>
              <Divider />
            </List>
          </LocationItem>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    employeeList: state.reducer.employeeList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEmployeeList: () => dispatch(actions.getEmployeeList())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Locations);

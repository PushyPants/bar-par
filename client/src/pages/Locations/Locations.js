import React, { Component } from "react";
import Nav from "../../components/Nav";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import API from "../../utils/API";

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
      this.setState({ Locations: res.data });
    });
    // console.log("[getLocations] results after await: ",results);
  };

  render() {
    return (
      <React.Fragment>
        <Nav>Locations</Nav>

        <List>
          {this.state.Locations.length > 0
            ? this.state.Locations[0].locations.map((location, i) => (
                <ListItem>{location.name}</ListItem>
              ))
            : null}
        </List>
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

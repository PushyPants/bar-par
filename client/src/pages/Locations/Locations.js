import React, { Component } from "react";
import Nav from "../../components/Nav";
import LocationItem from "../../components/LocationItem";
import API from "../../utils/API";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import {
  Button,
  List,
  ListItem,
  Divider,
  CssBaseline
} from "@material-ui/core";
import "./Locations.css";
// import ExpansionPanel from "@material-ui/core/ExpansionPanel";
// import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// const style = {
//   stationLink: {
//     width: "80%",
//     margin: "auto"
//   }
// };

class Locations extends Component {
  state = {
    location_id: "",
    name: "",
    parent_location: "",
    positions: []
  };

  componentWillMount() {
    this.getLocations();
  }

  getLocations = () => {
    this.props.getLocation();
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Nav> Locations </Nav>


        <main className="locations-list">
          <LocationItem locArr={this.props.Locations} />
        </main>

      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    Locations: state.reducer.Locations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLocation: () => dispatch(actions.getLocation())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Locations);

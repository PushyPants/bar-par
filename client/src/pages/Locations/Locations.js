import React, { Component } from "react";
import Nav from "../../components/Nav";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
// import API from "../../utils/API";
// import Footer from "../../components/Footer";
import LocationItem from "../../components/LocationItem";
import "./Locations.css";
// import { ListItem, Divider } from "@material-ui/core";
// import { List } from "@material-ui/core";
// import Button from "@material-ui/core/Button";
// import ExpansionPanel from "@material-ui/core/ExpansionPanel";
// import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
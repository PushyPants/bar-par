import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { Divider } from "@material-ui/core";
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: "100%",
    flex: 1,
    paddingBottom: 3
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  barStation: {
    width: '100%',
    margin: 'auto'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  colored: {
    background: "aliceblue"
  }
});
// let id = 0;
// function createData(parent_location, sub_location, locId) {
//   id += 1;
//   return { id, parent_location, sub_location, locId };
// }

function ControlledExpansionPanels(props) {
  const { classes } = props;
  // const rows = [];
  let parentsArr = [];
  let locationsArr = []

props.locArr.map(location => {
  if (!parentsArr.includes(location.parent_location)) {
    parentsArr.push(location.parent_location);
    locationsArr.push({
      parent_location: location.parent_location,
      sub_locations: []
    })
  }
})

props.locArr.map(location => {
  locationsArr.map(parent => {
    if (location.parent_location === parent.parent_location) {
      parent.sub_locations.push({
        location_name: location.name,
        location_id: location.location_id
      })
    }
  })
})

locationsArr.map(vals => {
  vals.sub_locations.sort((a,b) => (a.location_name > b.location_name) ? 1 : ((b.location_name > a.location_name) ? -1 : 0)); 
})

  return (
    <div className={classes.root}>
      {locationsArr.map(parent => {
        return (
          <ExpansionPanel
            style={{ width: "100%" }}
            key={parent.parent_location}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              {parent.parent_location}
              {console.log(parent.sub_locations)}
            </ExpansionPanelSummary>
              {parent.sub_locations.map(location => {
                return (
                  <Link to={`/locations/station/${location.location_id}`}>
                    <ExpansionPanelDetails key={location.location_id} >
                      {location.location_name}
                    </ExpansionPanelDetails>
                  </Link>
                );
              })}
          </ExpansionPanel>
        );
      })}
    </div>
  );
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ControlledExpansionPanels);
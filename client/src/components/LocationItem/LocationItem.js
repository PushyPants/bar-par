import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { Divider } from "@material-ui/core";

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

  props.locArr.map(location => {
    if (parentsArr.length < 1) {
      parentsArr.push({
        parent_location: location.parent_location,
        sub_locations: [
          { location_name: location.name, location_id: location._id }
        ]
      });
    } else {
      parentsArr.filter((parent, i) => {
        if (parent.parent_location === location.parent_location) {
          parentsArr[i].sub_locations.push({
            location_name: location.name,
            location_id: location._id
          });
        } 
        else {
          parentsArr.push({
            parent_location: location.parent_location,
            sub_locations: [
              {
                location_name: location.name,
                location_id: location._id
              }
            ]
          });
        }
      });
    }
  });

  return (
    <div className={classes.root}>
      {parentsArr.map(parent => {
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
                  <ExpansionPanelDetails>
                    {location.location_name}
                  </ExpansionPanelDetails>
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

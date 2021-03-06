import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ListItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

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
    width: "100%",
    margin: "auto"
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  colored: {
    background: "#888888",
    padding: 12,
    justifyContent: "center"
  },
  button: {
    width: "80%"
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: 500,
    margin: 0
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
  let locationsArr = [];

  props.locArr.map(location => {
    if (!parentsArr.includes(location.parent_location)) {
      parentsArr.push(location.parent_location);
      locationsArr.push({
        parent_location: location.parent_location,
        sub_locations: []
      });
    }
  });

  props.locArr.map(location => {
    locationsArr.map(parent => {
      if (location.parent_location === parent.parent_location) {
        parent.sub_locations.push({
          location_name: location.name,
          location_id: location.location_id
        });
      }
    });
  });

  locationsArr.map(vals => {
    vals.sub_locations.sort(
      (a, b) =>
        a.location_name > b.location_name
          ? 1
          : b.location_name > a.location_name
            ? -1
            : 0
    );
  });

  return (
    <div className={classes.root}>
      {locationsArr.map(parent => {
        return (
          <ExpansionPanel
            style={{ width: "100%" }}
            key={parent.parent_location}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <ListItem>
                <h3 className={classes.title}>{parent.parent_location}</h3>
                {/* {console.log(parent.sub_locations)} */}
              </ListItem>
            </ExpansionPanelSummary>
            <Divider />
            {parent.sub_locations.map(location => {
              return (
                <Link
                  to={`/locations/station/${location.location_id}`}
                  style={{ textDecoration: "none" }}
                >
                  <ExpansionPanelDetails
                    key={location.location_id}
                    className={classes.colored}
                  >
                    <Button className={classes.button}>
                      {location.location_name}
                    </Button>
                  </ExpansionPanelDetails>
                  <Divider style={{ width: "80%", margin: "auto" }} />
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

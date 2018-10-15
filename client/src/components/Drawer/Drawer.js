import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  CssBaseline,
  Grid
} from "@material-ui/core";
import {
  Menu,
  HomeOutlined,
  PlaceOutlined,
  LocalBarOutlined,
  PersonAddOutlined,
  CalendarTodayOutlined,
  Tune
} from "@material-ui/icons";
import { Link } from "react-router-dom";
// import * as actions from '../../store/actions';
// import { Redirect } from 'react-router';
import { connect } from "react-redux";

const styles = theme => ({
  text: {
    marginLeft: 10,
    padding: 5,
    alignitem: "center",
    justify: "center",
    fontSize: 14,
    fontWeight: 500,
    textDecoration: "none"
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  root: {
    flexGrow: 1,
    height: 440,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    backgroundColor: "#888888"
  },
  drawerPaper: {
    position: "relative"
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the ListItemText noWrap works
  },
  toolbar: theme.mixins.toolbar
});

class SwipeableTemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.list}>
          <List component="drawer">
            <ListItem button>
              <Link to="/home" className={classes.text}>
                <Grid container>
                <HomeOutlined />
                <ListItemText primary="Home" />
                </Grid>
              </Link>
            </ListItem>
            <Divider />
            <ListItem button>
              <Link to="/locations" className={classes.text}>
              <Grid container>
                <PlaceOutlined />
                <ListItemText primary="Location" />
              </Grid>
              </Link>
            </ListItem>
            <Divider />
            <ListItem button>
              <Link to="/inventory" className={classes.text}>
              <Grid container>
                <LocalBarOutlined />

                <ListItemText primary="Inventory" />
              </Grid>
              </Link>
            </ListItem>
            <Divider />
            <ListItem button>
              <Link to="/shifts" className={classes.text}>
              <Grid container>
                <CalendarTodayOutlined />
                <ListItemText primary="Shifts" />
              </Grid>
              </Link>
            </ListItem>
            <Divider />
            {this.props.Employee.isAdmin < 2 ? null : (
              <ListItem button>
                <Link to="/addemp" className={classes.text}>
                <Grid container>
                  <PersonAddOutlined />
                  <ListItemText primary="Add Employee" />
                </Grid>
                </Link>
              </ListItem>
            )}
            <Divider />
            <ListItem button>
              <Link to="/addavail" className={classes.text}>
              <Grid container>
                <Tune />
                <ListItemText primary="Add Availability" />
              </Grid>
              </Link>
            </ListItem>
          </List>
          <Divider />
        </div>
      </React.Fragment>
    );

    return (
      <div>
        <IconButton
          className={classes.menuButton}
          onClick={this.toggleDrawer("left", true)}
          color="inherit"
          aria-label="Menu"
        >
          <Menu />
        </IconButton>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
          onOpen={this.toggleDrawer("left", true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    employeeList: state.reducer.employeeList,
    Employee: state.reducer.Employee,
    LoggedInAs: state.reducer.LoggedInAs
  };
};

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(SwipeableTemporaryDrawer));

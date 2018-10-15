import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  CssBaseline
} from "@material-ui/core";
import LogButton from "../../components/LogButton";
import SwipeableTemporaryDrawer from "../Drawer";
import "./Nav.css";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    padding: "64px 0 0 24px"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const Nav = props => {
  const { classes } = props;
  return (
    <header className={classes.root}>
      <CssBaseline />
      <AppBar className="nav-bar" position="fixed">
        <Toolbar>
          <SwipeableTemporaryDrawer />
          <LogButton />
          <img
            src="/assets/imgs/logo1compressed.png"
            height="42px"
            alt={classes.alt}
          />
        </Toolbar>
      </AppBar>
      <Paper className="title-bar" position="absolute">
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {props.children}
        </Typography>
      </Paper>
    </header>
  );
};

Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Nav);

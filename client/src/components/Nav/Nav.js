import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SwipeableTemporaryDrawer from "../Drawer";
import "./Nav.css";


const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };
  
  function Nav(props) {
    const { classes } = props;
    return (
      <div className={classes.root}>
        <AppBar className="nav-bar" position="absolute">
          <Toolbar>
            <SwipeableTemporaryDrawer/>
            <Typography variant="title" color="inherit" className={classes.grow}>
                { props.children }
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  Nav.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Nav);
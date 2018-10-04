import React from "react";
// import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LogButton from '../../components/LogButton';
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
            <LogButton/>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  Nav.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Nav);
  
// import React from "react";
// import { Link } from "react-router-dom";

// const Nav = () => (
//   <ul className="nav nav-tabs">
//     <li className="nav-item">
//       <Link
//         to="/"
//         className={
//           window.location.pathname === "/" ? "nav-link active" : "nav-link"
//         }>
//         Home
//       </Link>
//     </li>
//     <li className="nav-item">
//       <Link
//         to="/addemp"
//         className={
//           window.location.pathname === "/addemp" ? "nav-link active" : "nav-link"
//         }>
//         Add Employee
//       </Link>
//     </li>
//     <li className="nav-item">
//       <Link
//         to="/addavail"
//         className={
//           window.location.pathname === "/addavail" ? "nav-link active" : "nav-link"
//         }>
//         Add Availability
//       </Link>
//     </li>
//   </ul>
// );

// export default Nav;

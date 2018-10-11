import React from "react";
// import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
	AppBar,
	Toolbar,
	Typography,
	Paper,
	CssBaseline,
} from "@material-ui/core";
import LogButton from "../../components/LogButton";
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

const Nav = props => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar className="nav-bar" position="absolute" style={{ position: 'fixed', top: 0 , left : 0,  margin: 0}}>
				<Toolbar>
					<Typography variant="title" color="inherit">
						<img
							src="/assets/imgs/logo1compressed.png"
							height="42px"
							alt={classes.alt}
							style={{ flex: 1 }}
						/>
					</Typography>
					<LogButton />
					<SwipeableTemporaryDrawer />
				</Toolbar>
			</AppBar>
			<Paper className="title-bar" position="absolute">
				<Typography variant="title" color="inherit" className={classes.grow}>
					{props.children}
				</Typography>
			</Paper>
		</div>
	);
};

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

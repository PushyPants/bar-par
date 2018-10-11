import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
	SwipeableDrawer,
	IconButton,
	List,
	Divider,
	Typography,
	CssBaseline,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
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
	},
	list: {
		width: 250,
	},
	fullList: {
		width: "auto",
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
		position: "relative",
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
		minWidth: 0, // So the Typography noWrap works
	},
	toolbar: theme.mixins.toolbar,
});

class SwipeableTemporaryDrawer extends React.Component {
	state = {
		top: false,
		left: false,
		bottom: false,
		right: false,
	};

	toggleDrawer = (side, open) => () => {
		this.setState({
			[side]: open,
		});
	};

	render() {
		const { classes } = this.props;

		const sideList = (
			<React.Fragment>
				<CssBaseline />
				<div className={classes.list}>
					<List>
						<Typography component={"h3"} className={classes.text}>
							<Link to="/home">Home</Link>
						</Typography>
					</List>
					<Divider />
					<List>
						<Typography component={"h3"} className={classes.text}>
							<Link to="/dashboard">Profile</Link>
						</Typography>
					</List>
					<Divider />
					<List>
						<Typography component={"h3"} className={classes.text}>
							<Link to="/shifts">Shifts</Link>
						</Typography>
					</List>
					<Divider />
					{this.props.Employee.isAdmin < 2 ? null : (
						<List>
							<Typography component={"h3"} className={classes.text}>
								<Link to="/addemp">Add Employee</Link>
							</Typography>
						</List>
					)}
					<Divider />
					<List>
						<Typography component={"h3"} className={classes.text}>
							<Link to="/addavail">Add Availability</Link>
						</Typography>
					</List>
					<Divider />
					<List>
						<Typography component={"h3"} className={classes.text}>
							<Link to="/locations">Inventory</Link>
						</Typography>
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
					<MenuIcon />
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
	classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return {
		employeeList: state.reducer.employeeList,
		Employee: state.reducer.Employee,
		LoggedInAs: state.reducer.LoggedInAs,
	};
};

export default connect(
	mapStateToProps,
	null
)(withStyles(styles)(SwipeableTemporaryDrawer));

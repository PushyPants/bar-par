import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
	InputAdornment,
	FormControl,
	TextField,
	MenuItem,
	Button,
	CssBaseline,
} from "@material-ui/core";
import AddAvailSlider from "../../components/AddAvailSilder";

const styles = theme => ({
	form: {
		padding: 20,
		margin: "auto",
	},
	root: {
		display: "flex",
		flexWrap: "wrap",
		marginTop: theme.spacing.unit * 5,
	},
	margin: {
		marginLeft: theme.spacing.unit * 5,
		marginRight: theme.spacing.unit * 5,
	},
	withoutLabel: {
		marginTop: theme.spacing.unit * 3,
	},
	textField: {
		width: "80%",
		// flexBasis: "100%",
	},
	Button: {
		marginTop: theme.spacing.unit * 4,
		marginLeft: theme.spacing.unit * 4,

		width: 100,
	},
});

const days = [
	{
		value: 0,
		label: "Sunday",
	},
	{
		value: 1,
		label: "Monday",
	},
	{
		value: 2,
		label: "Tuesday",
	},
	{
		value: 3,
		label: "Wednesday",
	},
	{
		value: 4,
		label: "Thursday",
	},
	{
		value: 5,
		label: "Friday",
	},
	{
		value: 6,
		label: "Saturday",
	},
];

const time_convert = num => {
	let hours = Math.floor(num / 60);
	let minutes = num % 60;

	if (minutes === 0) {
		minutes += "0";
	}

	if (hours >= 24) {
		hours -= 24;
		if (hours === 0) {
			return hours + 12 + ":" + minutes + " AM";
		} else {
			return hours + ":" + minutes + " AM";
		}
	} else if (hours >= 12) {
		hours -= 12;
		if (hours === 0) {
			return hours + 12 + ":" + minutes + " PM";
		} else {
			return hours + ":" + minutes + " PM";
		}
	}

	return hours + ":" + minutes + " AM";
};

function AddAvail(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<form className={classes.form}>
				{props.AdminLevel > 2 ? (
					<TextField
						select
						margin="normal"
						name="Employee"
						className={classNames(
							classes.margin,
							classes.textField,
							classes.withoutLabel
						)}
						value={props.Employee}
						onChange={props.ChangeEmployee}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">Employee</InputAdornment>
							),
						}}
					>
						{props.employeeList.map(emp => (
							<MenuItem key={emp._id} name="Employee" value={emp._id}>
								{emp.firstName}
							</MenuItem>
						))}
					</TextField>
				) : (
					<span
						className={classNames(
							classes.margin,
							classes.textField,
							classes.withoutLabel
						)}
					>
						{props.EmployeeFirstName} {props.EmployeeLastName}
					</span>
				)}
				<TextField
					select
					// label="Position"
					name="dayOfWeek"
					className={classNames(
						classes.margin,
						classes.textField,
						classes.withoutLabel
					)}
					value={props.dayOfWeek}
					onChange={props.handleInputChange}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">Day</InputAdornment>
						),
					}}
				>
					{days.map(day => (
						<MenuItem key={day.value} value={day.value} onClick={props.select}>
							{day.label}
						</MenuItem>
					))}
				</TextField>
				<FormControl
					margin="normal"
					className={classNames(
						classes.margin,
						classes.textField,
						classes.withoutLabel
					)}
					style={{ padding: 20, marginBottom: 20 }}
				>
					<p>
						Available From: {time_convert(props.availStart)} to{" "}
						{time_convert(props.availEnd)}
					</p>
					<AddAvailSlider
						start={props.availStart}
						end={props.availEnd}
						update={props.updateTime}
						isDisabled={false}
					/>
				</FormControl>
				<div>
					<Button
						variant="contained"
						color="primary"
						className={classNames(classes.Button)}
						disabled={
							!(
								props.Employee &&
								props.availStart &&
								props.availEnd &&
								props.dayOfWeek !== "default"
							)
						}
						onClick={props.handleFormSubmit}
					>
						Submit
					</Button>
					<Button
						variant="contained"
						color="secondary"
						className={classNames(classes.Button)}
						onClick={props.clearState}
					>
						Clear
					</Button>
				</div>
			</form>
		</div>
	);
}
// }

AddAvail.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddAvail);

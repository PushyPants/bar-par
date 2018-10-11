import React from "react";
import IconButton from "@material-ui/core/Icon";
import { Grid, Menu, MenuItem } from "@material-ui/core";
class LogButton extends React.Component {
	state = {
		anchorEl: null,
	};

	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	render() {
		const { anchorEl } = this.state;

		return (
			<React.Fragment>
				<Grid
					container
					spacing={"8"}
					direction={"row"}
					alignItems={"center"}
					justify={"flex-end"}
				>
					<Grid item>
						<IconButton
							aria-owns={anchorEl ? "simple-menu" : null}
							aria-haspopup="true"
							onClick={this.handleClick}
						>
							person_outlined
						</IconButton>
						<IconButton>
							<Menu
								id="simple-menu"
								anchorEl={anchorEl}
								open={Boolean(anchorEl)}
								onClose={this.handleClose}
							>
								<MenuItem onClick={this.handleClose}>Profile</MenuItem>
								<MenuItem onClick={this.handleClose}>My account</MenuItem>
								<MenuItem onClick={this.handleClose}>Logout</MenuItem>
							</Menu>
						</IconButton>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
}

export default LogButton;

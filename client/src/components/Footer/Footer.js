import React from "react";
import "./Footer.css";
import { List, ListItem, Divider } from "@material-ui/core";

const Footer = () => (
	<div className="footer">
		<div className="information">
			<List>
				<ListItem>
					<h4>Information</h4>
				</ListItem>
				<ListItem>
					<a>About Us</a>
				</ListItem>
				<ListItem>
					<a>Privacy Policy</a>
				</ListItem>
				<ListItem>
					<a>Terms &amp; Conditions</a>
				</ListItem>
			</List>
		</div>
		<div className="customer-service">
			<List>
				<ListItem>
					<h4>Customer Service</h4>
				</ListItem>
				<ListItem>
					<a>Contact Us</a>
				</ListItem>
				<ListItem>
					<a>Site Map</a>
				</ListItem>
			</List>
		</div>
		<div className="clearfix" />
		<Divider  />
		<div className="copy-right">
			<p>BarPar&copy;</p>
		</div>
	</div>
);

export default Footer;

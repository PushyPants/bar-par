import React from 'react';
import "./Footer.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import Divider from "@material-ui/core/Divider";

const Footer = () => (

    <div className="footer">
        <div className="information">
            <List>
                <ListItem><h4>Information</h4></ListItem>
                <ListItem><a>About Us</a></ListItem>
                <ListItem><a>Privacy Policy</a></ListItem>
                <ListItem><a>Terms &amp; Conditions</a></ListItem>
            </List>
        </div>
        <div className="customer-service">
            <List>
                <ListItem><h4>Customer Service</h4></ListItem>
                <ListItem><a>Contact Us</a></ListItem>
                <ListItem><a>Site Map</a></ListItem>
            </List>
        </div>
        <div className="clearfix"></div>
        <hr />
        <div className="copy-right">
            <p>BarPar&copy;</p>
        </div>
    </div>

)

export default Footer;


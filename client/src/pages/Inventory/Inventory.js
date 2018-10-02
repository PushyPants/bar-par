import React, { Component } from "react";
import Nav from "../../components/Nav";
import "./Inventory.css";
import { Button } from "@material-ui/core";

class Inventory extends Component {

    render() {
        return (
        <div>
            <Nav>
                Bar Par
                <Button color="inherit">Logout</Button>
            </Nav>
            <h1>slider goes here</h1>
            <h4>Product name</h4>
            <h4>qty input</h4>
        </div>
        );
    }
}

export default Inventory;
import React, { Component } from "react";
import Nav from "../../components/Nav";
import Login from "../../components/Login";
import Button from '@material-ui/core/Button';
import "./Landing.css";

class Landing extends Component {

    render() {
        return (
        <div>
            <Nav>
                Bar Par
                <Button color="inherit">Login</Button>
            </Nav>
            <Login />
        </div>
        );
    }
}

export default Landing;
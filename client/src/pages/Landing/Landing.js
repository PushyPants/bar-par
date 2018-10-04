import React, { Component } from "react";
import Nav from "../../components/Nav";
import Login from "../../components/Login";
import "./Landing.css";

class Landing extends Component {

    render() {
        return (
        <div>
            <Nav>
                Bar Par
            </Nav>
            <Login />
        </div>
        );
    }
}

export default Landing;
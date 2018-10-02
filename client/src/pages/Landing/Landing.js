import React, { Component } from "react";
import Nav from "../../components/Nav";
import Login from "../../components/Login";
import "./Landing.css";
import DatePickers from "../../components/DatePicker/DatePicker";

class Landing extends Component {
  render() {
    return (
      <div>
        <Nav>Bar Par</Nav>
        <Login />
        {/* <DatePickers>
          
        </DatePickers> */}
      </div>
    );
  }
}

export default Landing;

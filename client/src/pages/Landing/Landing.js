import React, { Component } from "react";
import Nav from "../../components/Nav";
import Login from "../../components/Login";
import "./Landing.css";
// import DatePickers from "../../components/DatePicker/DatePicker";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import MySlider from "../../components/Slider/Slider";

class Landing extends Component {
  render() {
    return (
      <div>
        <Nav>Bar Par </Nav>
        <Login />
        {/* <DatePickers>
          
        </DatePickers> */}
        <div>
          <MySlider />
        </div>
      </div>
    );
  }
}

export default Landing;

import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { CssBaseline } from "@material-ui/core";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Nav>Dashboard</Nav>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;

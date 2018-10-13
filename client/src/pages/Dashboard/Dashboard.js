import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import {
   CssBaseline,
   Paper
} from "@material-ui/core";
import './Dashboard.css';


class Dashboard extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Nav>
        </Nav>
        <Paper className="dashboard-paper"/>

        <Footer />
      </div>
    );
  }
}

export default Dashboard;

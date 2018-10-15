import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { CssBaseline, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "./Dashboard.css";

const styles = {
  fullSize: {
    width: "100%",
    height: 160,
    backgroundColor: "#223D4B",
    padding: 0,
  },
  greySquare: {
    width: "100%",
    height: 312,
    margin: "auto",
    backgroundColor: "#888888",
  },
  noPadding: {
    height: 160,
  }
};

class Dashboard extends Component {
  render() {
    const classes = this.props;
    return (
      <div>
        <CssBaseline />
        <Nav className={classes.noPadding}>
          <Paper square className="topBar" />
        </Nav>
        <Paper square className={classes.greySquare}>
          <img src="" alt={classes.alt} />
        </Paper>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);

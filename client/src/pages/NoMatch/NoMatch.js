import React from "react";
import Nav from "../../components/Nav";
import { Grid, Paper, CssBaseline } from "@material-ui/core";
import "./NoMatch.css";

const NoMatch = () => (
  <div className="noMatch">
    <CssBaseline />
    <Nav> 404 </Nav>
    <Grid container spacing={8}>
      <Grid item xs={12} md={4}>
        <Paper id="page-not-found">
          <h1>404</h1>
          <h1>Page Not Found</h1>
          <p>
            <br />
            The page you are looking for does not
            <br />
            exist or an error occurred.
          </p>
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default NoMatch;

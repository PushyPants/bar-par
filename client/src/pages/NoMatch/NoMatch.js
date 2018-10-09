import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const NoMatch = () => (
  <Grid container spacing={8}>
    <Grid item xs={12} md={4}>
      <Paper>
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </Paper>
    </Grid>
  </Grid>
);

export default NoMatch;

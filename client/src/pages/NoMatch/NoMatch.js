import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Grid from '@material-ui/core/Grid';

const NoMatch = () => (
  <Grid container spacing={8}>
    <Grid item xs={12} md={4}>
      <Jumbotron>
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </Jumbotron>
    </Grid>
  </Grid>
);

export default NoMatch;

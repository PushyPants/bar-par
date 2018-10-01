import React from "react";
import Grid from '@material-ui/core/Grid';

export const Col = ({ size, children }) => (
  <Grid item xs={parseInt(size, 10)}>
    {children}
  </Grid>
);

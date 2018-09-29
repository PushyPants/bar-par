import React from "react";
import Grid from '@material-ui/core/Grid';

export const Container = ({ children }) => (
  <Grid container spacing={8}>
    {children}
  </Grid>
);

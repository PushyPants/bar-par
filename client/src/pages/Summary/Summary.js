import React, { Component } from "react";
import Nav from "../../components/Nav";
import SumTable from "../../components/SumTable";
import AddEmp from "../../components/AddEmp";
import { Grid, Paper, CssBaseline } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Redirect } from "react-router";
import Products from '../../components/Products/products'
import API from '../../utils/API'

const styles = {
  root: {
    width: "auto"
  },
  shadows: {
    boxShadow: "0 3px 6px #00000025"
  }
};

class Summary extends Component {
  state = {
    Products: []
  };

  componentWillMount() {
    this.getAllProducts();
    this.setState({
      isAdmin: "Employee"
    });
  }

  getAllProducts = () => {
    API.getProducts().then(res =>{
      console.log(res.data);
      this.setState({
        Products: res.data
      })
    })
  }

  render() {
    const classes = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        {/* {this.props.Employee.isAdmin < 2 ? <Redirect to="/" /> : null} */}
        <Products />
        <Nav> Summary </Nav>
        <Grid
          container
          justify="space-around"
          alignItems="baseline"
          className={classes.root}
        >
          <Grid item xs={11} md={4}>
            <Paper square className={classes.shadows}>
            </Paper>
          </Grid>
          <Grid item xs={11} md={7}>
            <Paper square className={classes.shadows}>
            <SumTable
            sumArr = {this.state.Products}
            />

            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}


export default (withStyles(styles)(Summary));

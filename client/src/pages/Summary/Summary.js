import React, { Component } from "react";
import Nav from "../../components/Nav";
import SumTable from "../../components/SumTable";
import AddEmp from "../../components/AddEmp";
import { Grid, Paper, CssBaseline } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Redirect } from "react-router";

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
  };

  componentWillMount() {
    this.loadProducts();
    this.setState({
      isAdmin: "Employee"
    });
  }

  loadProducts = () => {
    this.props.getAllProducts();
  };

  render() {
    const classes = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        {/* {this.props.Employee.isAdmin < 2 ? <Redirect to="/" /> : null} */}
        <Nav> Add Employee </Nav>
        <Grid
          container
          justify="space-around"
          alignItems="baseline"
          className={classes.root}
        >
          <Grid item xs={11} md={4}>
            <Paper square className={classes.shadows}>
              <AddEmp />
            </Paper>
          </Grid>
          <Grid item xs={11} md={7}>
            <Paper square className={classes.shadows}>
              <SumTable
                sumArr={this.props.Products}
              />
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
   
    LoggedInAs: state.reducer.LoggedInAs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(actions.getProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Summary));

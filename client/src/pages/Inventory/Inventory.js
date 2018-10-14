import React, { Component } from "react";
import Nav from "../../components/Nav";
import Slider from "rc-slider";
import Tooltip from "rc-tooltip";
import "rc-slider/assets/index.css";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField, CssBaseline } from "@material-ui/core";
import "./Inventory.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import API from "../../utils/API";

const Handle = Slider.Handle;

const styles = theme => ({
  bottleContainer: {
    width: "100%",
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={`${value} %`}
      visible={dragging}
      placement="right"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

class Inventory extends Component {
  state = {
    quantity: ""
  };

  componentDidMount() {
    // API.getSingleStation(this.props.match.params.id).then((res) => this.setState({stationInfo: res.data}))
    this.props.getSingleStation(this.props.match.params.id);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleProductValue = e => {
    console.log(e)
  }

  render() {
    console.log(this.props.stationInfo);
    const classes = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Nav>Inventory</Nav>
        <Grid container justify="center">
          <Grid item spacing={8} xs={11} md={5}>
            <Paper square className={classes.bottleContainer}>
              {/* <h1>{classes.stationInfo.name}</h1> */}
              <img src="/assets/imgs/bottle.png" id="bottle" alt="Bottle" />
              <div id="slider-div">
                <Slider
                  vertical
                  min={0}
                  max={100}
                  step={1}
                  defaultValue={50}
                  handle={handle}
                />
              </div>
            </Paper>
          </Grid>
          <Grid item spacing={8} xs={11} md={5}>
            <Paper square>
              <TextField
                id="standard-number"
                label="Number"
                value={this.state.quantity}
                onChange={this.handleChange("quantity")}
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
              />
              <TextField
                id="standard-number"
                label="Number"
                value={this.state.quantity}
                onChange={this.handleChange("quantity")}
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
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
    stationInfo: state.reducer.stationInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSingleStation: id => dispatch(actions.getSingleStation(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventory);

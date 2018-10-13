import React, { Component } from "react";
import Nav from "../../components/Nav";
import Slider from "rc-slider";
import { withStyles } from "@material-ui/core/styles";
import "rc-slider/assets/index.css";
import "./Inventory.css";
import TextField from "@material-ui/core/TextField";
import Tooltip from "rc-tooltip";
import Paper from '@material-ui/core/Paper';
import { Grid } from "@material-ui/core";

const Handle = Slider.Handle;

const styles = {
  bottleContainer: {
    width: "100%",
    margin: "auto"
  }
};

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

  state = {
    quantity: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const classes = this.props;
    return (
      <div>
        <Nav>Inventory</Nav>
        <Grid container justify-xs-center grid-xs-12>

        <Paper square elevation2>
        <div className={classes.bottleContainer}>
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
        </div>
        </Paper>
        </Grid>
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
      </div>
    );
  }
}

export default withStyles(styles)(Inventory);

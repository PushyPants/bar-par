import React, { Component } from "react";
import Nav from "../../components/Nav";
import Slider from "rc-slider";
import Tooltip from "rc-tooltip";
import "rc-slider/assets/index.css";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField, CssBaseline } from "@material-ui/core";
import "./Inventory.css";

const Handle = Slider.Handle;

const styles = theme => ({
  bottleContainer: {
    width: "100%",
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
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
      <React.Fragment>
        <CssBaseline />
        <Nav>Inventory</Nav>
        <Grid container justify="center" alignItems="center">
            <Paper square className={classes.bottleContainer}>
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
          <Grid item xs={11}>
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

export default withStyles(styles)(Inventory);

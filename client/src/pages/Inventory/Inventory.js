import React, { Component } from "react";
import Nav from "../../components/Nav";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Inventory.css";
import TextField from "@material-ui/core/TextField";
import Tooltip from "rc-tooltip";

const Handle = Slider.Handle;

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
    return (
      <div>
        <Nav>Inventory</Nav>
        <div>
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
        <TextField
          className="qty-input"
          id="standard-number"
          label="Quantity"
          value={this.state.quantity}
          onChange={this.handleChange("quantity")}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
    );
  }
}

export default Inventory;

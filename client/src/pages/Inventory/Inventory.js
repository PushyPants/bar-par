import React, { Component } from "react";
import Nav from "../../components/Nav";
import Slider from "rc-slider";
import { withStyles } from "@material-ui/core/styles";
import "rc-slider/assets/index.css";
import "./Inventory.css";
import TextField from "@material-ui/core/TextField";
import Tooltip from "rc-tooltip";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import API from '../../utils/API';

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

  componentDidMount() {
    // API.getSingleStation(this.props.match.params.id).then((res) => this.setState({stationInfo: res.data}))
    this.props.getSingleStation(this.props.match.params.id);
    
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    console.log(this.props.stationInfo)
    const classes = this.props;
    return (
      <div>
        <Nav>Inventory</Nav>
        <div className={classes.bottleContainer}>
        <h1>{this.props.stationInfo.name}</h1>
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

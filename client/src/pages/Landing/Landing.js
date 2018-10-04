import React, { Component } from "react";
import Nav from "../../components/Nav";
import Login from "../../components/Login";
import "./Landing.css";
import DatePickers from "../../components/DatePicker/DatePicker";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import ReactDOM from "react-dom";
import Tooltip from "rc-tooltip";
import Slider from "rc-slider";
import moment from "moment";
import DatetimeSlider from "react-datetime-slider";
import "react-datetime-slider/css/ReactDatetimeSlider.css";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const wrapperStyle = { width: 400, margin: 50 };
let start = moment("08:00", "HH:mm").format("x");
let end = moment("20:00", "HH:mm").format("x");
console.log(start);

class Landing extends Component {
  onChange() {}

  render() {
    return (
      <div>
        <Nav>Bar Par </Nav>
        <Login />
        {/* <DatePickers>
          
        </DatePickers> */}
        <div>
          <div style={wrapperStyle}>
            <p> Range with custom handle</p>
            <Range
              step={2}
              min={0}
              max={56}
              defaultValue={[8, 18]}
              tipFormatter={value => `${value}`}
            />
            {/* <div style={wrapperStyle}>
              <DatetimeSlider min={start} max={end} onChange={this.onChange} />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

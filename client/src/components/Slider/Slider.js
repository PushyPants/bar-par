// import 'rc-slider/assets/index.css';

import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Tooltip from "rc-tooltip";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
// import moment from "moment";

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

class MySlider extends Component {
  onSliderChange = max => {
    console.log(max);
  };

  time_convert = num => {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;

    if (minutes === 0) {
      minutes += "0";
    }

    if (hours > 24) {
      hours -= 24;
      return hours + ":" + minutes + " AM";
    } else if (hours > 12) {
      hours -= 12;
      return hours + ":" + minutes + " PM";
    }

    return hours + ":" + minutes + " AM";
  };
  render() {
    return (
      <div>
        <div style={wrapperStyle}>
          <p> Range with custom handle</p>

          <Range
            step={15}
            min={480}
            max={1560}
            defaultValue={[0, 1000]}
            tipFormatter={value => (value ? this.time_convert(value) : "Error")}
            onAfterChange={this.onSliderChange}
          />
        </div>
      </div>
    );
  }
}

export default MySlider;

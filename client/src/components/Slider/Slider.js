// import 'rc-slider/assets/index.css';

import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
// import Tooltip from "rc-tooltip";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
// import moment from "moment";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
// const Handle = Slider.Handle;

// const handle = props => {
//   const { value, dragging, index, ...restProps } = props;
//   return (
//     <Tooltip
//       prefixCls="rc-slider-tooltip"
//       overlay={value}
//       visible={dragging}
//       placement="top"
//       key={index}
//     >
//       <Handle value={value} {...restProps} />
//     </Tooltip>
//   );
// };
const wrapperStyle = { width: 400, margin: 50 };
const marks = {
  480: "8:00 AM",
  660: "11:00 AM",
  840: "2:00 PM",
  1020: "5:00 PM",
  1200: "8:00 PM",
  1380: "11:00 PM",
  1560: "2:00 AM"
};
class MySlider extends Component {
  // onSliderChange = max => {
  //   console.log(max);
  // };

  time_convert = num => {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;

    if (minutes === 0) {
      minutes += "0";
    }

    if (hours >= 24) {
      hours -= 24;
      if (hours === 0) {
        return `${hours + 12}:${minutes} AM`;
      } else {
        return `${hours}:${minutes} AM`;
      }
    } else if (hours >= 12) {
      hours -= 12;
      if (hours === 0) {
        return `${hours + 12}:${minutes} PM`;
      } else {
        return `${hours}:${minutes} PM`;
      }
    }

    return `${hours}:${minutes} AM`;
  };
  render() {
    return (
      <div>
        <div style={wrapperStyle}>
          <Range
            step={30}
            min={480}
            max={1560}
            marks={marks}
            defaultValue={[660, 1380]}
            tipFormatter={value => (value ? this.time_convert(value) : "Error")}
            onAfterChange={this.onSliderChange}
          />
        </div>
      </div>
    );
  }
}

export default MySlider;

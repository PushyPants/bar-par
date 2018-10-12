import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const wrapperStyle = {
  width: "100%",
  margin: 5
};

const typeCheck = (start, end) => {
  if (typeof start === "string") {
    return [480, 1560];
  } else {
    return [start, end];
  }
};

function AddAvailSlider(props) {
  const marks = {
    480: "8:00A",
    840: "2:00P",
    1200: "8:00P",
    1560: "2:00A"
  };

  const time_convert = num => {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;

    if (minutes === 0) {
      minutes += "0";
    }

    if (hours >= 24) {
      hours -= 24;
      if (hours === 0) {
        return hours + 12 + ":" + minutes + " AM";
      } else {
        return hours + ":" + minutes + " AM";
      }
    } else if (hours >= 12) {
      hours -= 12;
      if (hours === 0) {
        return hours + 12 + ":" + minutes + " PM";
      } else {
        return hours + ":" + minutes + " PM";
      }
    }

    return hours + ":" + minutes + " AM";
  };

  return (
    <React.Fragment>
      <div style={wrapperStyle}>
        <Range
          marks={marks}
          step={30}
          min={480}
          max={1560}
          disabled={props.isDisabled}
          defaultValue={typeCheck(props.start, props.end)}
          tipFormatter={value => (value ? time_convert(value) : "Error")}
          onAfterChange={props.update}
        />
      </div>
    </React.Fragment>
  );
}

export default AddAvailSlider;

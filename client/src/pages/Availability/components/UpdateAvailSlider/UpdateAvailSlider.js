import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const wrapperStyle = { width: 400, margin: 5 };

function UpdateAvailSlider({ availId, dayOfWeek, unavailStart, unavailEnd, upAvail, timeCov}) {
    const marks = {
        480: "8:00A",
        840: "2:00P",
        1200: "8:00P",
        1560: "2:00A"
      };

    const onSliderChange = val => {
        upAvail(availId, dayOfWeek, val[0], val[1])
    };

    return (
        <React.Fragment >
            <div style={wrapperStyle}>
                <Range
                    marks={marks}
                    step={30}
                    min={480}
                    max={1560}
                    defaultValue={[availStart, availEnd]}
                    tipFormatter={value => (value ? timeCov(value) : "Error")}
                    onAfterChange={onSliderChange}
                />
            </div>
        </React.Fragment>
    );

}

export default UpdateAvailSlider;

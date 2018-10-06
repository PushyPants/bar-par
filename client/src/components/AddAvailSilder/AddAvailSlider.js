import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const wrapperStyle = { width: "100%", margin: 0 };

function AddAvailSlider(props) {

    const time_convert = num => {
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
        return (
            <div>
                <div style={wrapperStyle}>
                    <p>Unavailable From: {time_convert(props.start)} to {time_convert(props.end)}</p>
                    <Range
                        step={15}
                        min={480}
                        max={1560}
                        defaultValue={[480, 1560]}
                        tipFormatter={value => (value ? time_convert(value) : "Error")}
                        onAfterChange={props.update}
                    />
                </div>
            </div>
        );
    
}

export default AddAvailSlider;

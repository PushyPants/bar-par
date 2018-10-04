import React, { Component } from "react";
import Nav from "../../components/Nav";
import Login from "../../components/Login";
import "./Landing.css";
// import DatePickers from "../../components/DatePicker/DatePicker";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
// import ReactDOM from "react-dom";
import Tooltip from "rc-tooltip";
import Slider from "rc-slider";
import moment from "moment";
// import DatetimeSlider from "react-datetime-slider";
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

  onSliderChange = max => {
    console.log(max)
  }

  time_convert = num => {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;

    if(minutes === 0){
      minutes += "0";
    }

    if(hours > 24){
      hours -= 24;
      return hours + ":" + minutes + " AM";
    } else if (hours > 12){
      hours -= 12;
      return hours + ":" + minutes + " PM";
    }
    
    return hours + ":" + minutes + " AM";
  }

  render() {
    return (
      <div>
        <Nav>Bar Par </Nav>
        <Login />
        {/* <DatePickers>
          
        </DatePickers> */}
        <div>
<<<<<<< HEAD
            <Nav>
                Bar Par
            </Nav>
            <Login />
=======
          <div style={wrapperStyle}>
            <p> Range with custom handle</p>
            
                <Range
                step={15}
                min={480}
                max={1560}
                defaultValue={[0, 1000]}
                tipFormatter={value => (value)? this.time_convert(value) :"Error"}
                onAfterChange={this.onSliderChange}
                />
            {/* <div style={wrapperStyle}>
              <DatetimeSlider min={start} max={end} onChange={this.onChange} />
            </div> */}
          </div>
>>>>>>> 83ffc60ef675068754a08fdab617a40834d26b98
        </div>
      </div>
    );
  }
}

export default Landing;

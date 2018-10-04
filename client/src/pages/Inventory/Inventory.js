import React, { Component } from "react";
import Nav from "../../components/Nav";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./Inventory.css";
import TextField from '@material-ui/core/TextField';

class Inventory extends Component {

    state = {
        quantity: ""
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };

    render() {
        return (
        <div>
            <Nav>
                Inventory
            </Nav>
            <div id="bottle-slide">
                <img src="/assets/imgs/bottle.png" id="bottle" />
                <div id="slider-div">
                    <Slider vertical min={-10} step={null} defaultValue={20} />
                </div>
            </div>
            <TextField
                id="standard-number"
                label="Number"
                value={this.state.quantity}
                onChange={this.handleChange('quantity')}
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
            />
        </div>
        );
    }
}

export default Inventory;
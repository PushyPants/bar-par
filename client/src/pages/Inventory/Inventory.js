import React, { Component } from "react";
import Nav from "../../components/Nav";
import "rc-slider/assets/index.css";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Grid,
  Paper,
  IconButton,
  TextField,
  CssBaseline
} from "@material-ui/core";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import "./Inventory.css";
import Slider from "rc-slider";
import Tooltip from "rc-tooltip";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
// import API from "../../utils/API";

const Handle = Slider.Handle;

const styles = {
  paper: {
    width: "90%",
    margin: "24px auto",
    border: "none"
  },
  card: {
    width: "90%",
    marginTop: "24px auto",
    border: "none"
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

  handleProductValue = e => {
    console.log(e);
  };

  render() {
    console.log(this.props.stationInfo);
    const classes = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Nav>Inventory</Nav>
        <main>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={11} md={6}>
              <Paper square className="bottleContainer">
                {/* <h1>{this.props.stationInfo.name}</h1> */}
                <Grid container justify="center">
                  <Grid item xs={12}>
                    <IconButton
                      className={classes.button}
                      aria-label="Previous"
                      style={{ float: "left" }}
                    >
                      <ArrowLeft />
                    </IconButton>
                    <IconButton
                      className={classes.button}
                      aria-label="Next"
                      style={{ float: "right" }}
                    >
                      <ArrowRight />
                    </IconButton>
                  </Grid>
                  <Grid item xs={12}>
                    <Card className={classes.card}>
                      <CardContent
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly"
                        }}
                      >
                        <img
                          src="/assets/imgs/bottle.png"
                          id="bottle"
                          alt="Bottle"
                        />
                        <div id="slider-div">
                          <Slider
                            vertical
                            min={0}
                            max={100}
                            step={1}
                            defaultValue={50}
                            handle={handle}
                            onAfterChange={this.handleProductValue}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={11} md={6}>
              <Paper
                square
                style={{ width: "90%", margin: "auto", padding: 12 }}
              >
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
                  id="standard-quantity"
                  label="Number"
                  value={this.state.quantity}
                  onChange={this.handleChange("quantity")}
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="normal"
                />
              </Paper>
            </Grid>
          </Grid>
        </main>
      </React.Fragment>
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
)(withStyles(styles)(Inventory));

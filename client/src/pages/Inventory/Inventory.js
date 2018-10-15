import React, { Component } from "react";
import Nav from "../../components/Nav";
import Slider from "rc-slider";
import { withStyles } from "@material-ui/core/styles";
import "rc-slider/assets/index.css";
import "./Inventory.css";
import Tooltip from "rc-tooltip";
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
import { connect } from "react-redux";
import * as actions from "../../store/actions";

const Handle = Slider.Handle;

const styles = {
  bottleContainer: {
    width: "100%",
    margin: "auto"
  },
  align: {
    display: "flex",
    justifyContent: "center"
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
    quantity: "",
    positionCounter: 0,
    stationInfo: {
      location_id: "",
      name: "",
      parent_location: "",
      positions: [
        {
          inventories: [],
          product_id: "",
          product_info: [
            {
              Distributor: null,
              brand: "",
              cost: null,
              par: 0,
              product: "",
              sku: null,
              spirit_sub_type: null,
              spirit_type: "",
              volume: 0,
              wholesaler: null,
              _id: ""
            }
          ]
        }
      ]
    }
  };

  componentDidMount() {
    // API.getSingleStation(this.props.match.params.id).then((res) => this.setState({stationInfo: res.data}))
    // this.SingleStation(this.AnotherFunction);
    this.props.getSingleStation(this.props.match.params.id);
    console.log(this.state.positionCounter);
    setTimeout(() => {
      this.setState({
        stationInfo: this.props.stationInfo
      });
    }, 2000);

    // this.setState({
    //       stationInfo: this.props.stationInfo
    //   })
  }

  SingleStation() {
    this.props.getSingleStation(this.props.match.params.id);
    console.log(this.props.stationInfo);
    this.AnotherFunction();
  }

  AnotherFunction() {
    this.setState({
      stationInfo: this.props.stationInfo
    });
    // console.log(this.state.stationInfo);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleProductValue = e => {
    console.log(e);
  };

  handleInc = () => {
    console.log("increse");
    let newCounter = (this.state.positionCounter += 1);
    this.setState({
      positionCounter:
        this.state.positionCounter >= this.state.stationInfo.positions.length
          ? this.state.stationInfo.positions.length - 1
          : newCounter
    });
    console.log("cout is : " + this.state.positionCounter);
    console.log(this.state.stationInfo.positions.length);
  };

  handleDec = () => {
    console.log("decres");
    let newCounter = (this.state.positionCounter -= 1);
    this.setState({
      positionCounter: this.state.positionCounter < 0 ? 0 : newCounter
    });
    console.log("cout is : " + this.state.positionCounter);
  };

  render() {
    // console.log(this.state.stationInfo.positions[0].product_info[0].brand)
    const classes = this.props;
    return (
      <div>
        <React.Fragment>
          <CssBaseline />
          <Nav>Inventory</Nav>
          <main>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={11} md={6}>
                <Paper square className="bottleContainer">
                  <Grid container justify="center">
                    <Grid item xs={12} className={classes.align}>
                      {this.props.stationInfo.name ? (
                        <h1
                          style={{
                            marginTop: 4,
                            marginBottom: 0,
                            marginLeft: 16,
                            fontWeight: 500
                          }}
                        >
                          {this.props.stationInfo.name}
                        </h1>
                      ) : null}
                      <Grid container justify="center" alignItems="center">
                        <Grid item xs={2} className="align">
                          <IconButton
                            className={classes.button}
                            aria-label="Previous"
                          >
                            <ArrowLeft onClick={this.handleDec} />
                          </IconButton>
                        </Grid>
                        <Grid item xs={4} className="align">
                          {this.state.stationInfo.positions[
                            this.state.positionCounter
                          ].product_info[0].brand === undefined ? null : (
                            <h3 style={{ fontWeight: 400 }}>
                              {
                                this.state.stationInfo.positions[
                                  this.state.positionCounter
                                ].product_info[0].brand
                              }
                            </h3>
                          )}
                        </Grid>
                        <Grid item xs={4} className="align">
                          {this.state.stationInfo.positions[
                            this.state.positionCounter
                          ].product_info[0].product === undefined ? null : (
                            <h3 style={{ fontWeight: 300 }}>
                              {
                                this.state.stationInfo.positions[
                                  this.state.positionCounter
                                ].product_info[0].product
                              }
                            </h3>
                          )}
                        </Grid>
                        <Grid item xs={2} className="align">
                          <IconButton
                            className={classes.button}
                            aria-label="Next"
                          >
                            <ArrowRight onClick={this.handleInc} />
                          </IconButton>
                        </Grid>
                      </Grid>
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Products: state.reducer.Products,
    stationInfo: state.reducer.stationInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(actions.getProducts()),
    getSingleStation: id => dispatch(actions.getSingleStation(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Inventory));
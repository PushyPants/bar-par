import React, { Component } from "react";
import Nav from "../../components/Nav";
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import API from "../../utils/API"
import Footer from "../../components/Footer";
import LocationItem from "../../components/LocationItem";
import "./Locations.css";

import { ListItem } from "@material-ui/core";
import { List } from "@material-ui/core";


class Locations extends Component {
  state = {
    Locations: [],
    Products: [],
    name: "test"
  };

  componentDidMount = () => {
    this.getLocations();
    this.getProducts();
  };

  getLocations = () => {
    API.getLocations().then(res => {
      console.log(res.data);
      this.setState({ Locations: res.data });
    });
    // console.log("[getLocations] results after await: ",results);

  }
  getProducts = () => {
    console.log('getting products');
    API.getProducts().then(res => {
      console.log(res.data);
      this.setState({ Products: res.data });
    });
  }

  cycleThroughLocation = (location) => {

  }

  render() {
    console.log(this.state.Locations.length)
    let list = this.state.Locations.map((location) => <LocationItem key={location.location_id} name={location.name}>
      <div className="location-preview">
        <div className="product-name">
          <List>
            <ListItem><strong>Product Name</strong></ListItem>
            {this.state.Products.map((product) => <ListItem>{product.brand} : {product.product}</ListItem>)}
          </List>
          <div className="inv-date">
                            <List>
                                <ListItem><strong>Last Updated</strong></ListItem>
                                <ListItem>dates go here</ListItem> {/*need map for each date*/}
                            </List>
                        </div>
        </div> 

      </div>
    </LocationItem>)
    return (
      <React.Fragment>
        <Nav>Locations</Nav>

        <div className="locations-list">
          {this.state.Locations.length > 0 ? list : null
          }
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employeeList: state.reducer.employeeList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEmployeeList: () => dispatch(actions.getEmployeeList()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations);

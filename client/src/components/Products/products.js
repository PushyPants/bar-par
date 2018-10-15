import React from "react";
import PropTypes from "prop-types";
import API from "../../utils/API"

const getAllProducts = () => {
    API.getProducts().then(res => console.log(res.data))

}

function getProducts(props) {


  return (
    <React.Fragment>{getAllProducts()}</React.Fragment>
  );
}

getProducts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default getProducts;

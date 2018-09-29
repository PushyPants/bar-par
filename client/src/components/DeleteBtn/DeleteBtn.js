import React from "react";
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  <button className={`btn delete-btn btn-${props.color}`} {...props}>
    Delete
  </button>
);

export default DeleteBtn;

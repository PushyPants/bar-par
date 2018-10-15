import React from "react";

export const DecBtn = props => (
  <button
    {...props}
    style={{ float: "right", marginBottom: 10 }}
    className={`btn btn-${props.color}`}
  >
    {props.children}
  </button>
);

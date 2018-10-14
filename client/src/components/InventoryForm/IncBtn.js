import React from "react";

export const IncBtn = props => (
  <button
    {...props}
    style={{ float: "right", marginBottom: 10 }}
    className={`btn btn-${props.color}`}
  >
    {props.children}
  </button>
);

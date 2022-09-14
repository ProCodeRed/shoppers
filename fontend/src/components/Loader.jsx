import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="spinner_wrapper">
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      }}
    >
      <span className="sr-only">Loading please wait....</span>
    </Spinner>
    <p>Loading please wait....</p>
    </div>
  );
};

export default Loader;

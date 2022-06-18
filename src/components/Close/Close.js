import "./Close.css";
import React, { Component } from "react";

class Close extends Component {
  render() {
    return (
      <div className="close-container">
        <div className="close centered">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.759766 0.759766L13.2398 13.2398M13.2398 0.759766L0.759766 13.2398" stroke="white" strokeWidth="1.14754" strokeMiterlimit="10" />
          </svg>
        </div>
      </div>
    );
  }
}
export default Close;

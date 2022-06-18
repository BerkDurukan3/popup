import "../../App.css";
import "./Text.css"
import React, { Component } from "react";

class Text extends Component {
  render() {
    return <div className={this.props.textClass !== undefined ? `text ${this.props.textClass}` : ""}>{this.props.text !== undefined ? this.props.text : ""}</div>;
  }
}
export default Text;

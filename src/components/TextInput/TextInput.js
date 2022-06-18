import "./TextInput.css"
import React, { Component } from "react";
import Text from "../Text/Text";
import Input from "../Input/Input";

class TextInput extends Component {
  render() {
    return (
      <div className="text-input-container">
        <Text text={this.props.text} textClass={this.props.textClass}></Text>
        <Input id={this.props.id} inputClass={this.props.inputClass}></Input>
      </div>
    );
  }
}
export default TextInput;

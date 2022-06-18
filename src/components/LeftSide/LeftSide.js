import "../../App.css";
import "./LeftSide.css";
import React from "react";
import TextInput from "../TextInput/TextInput";
import Text from "../Text/Text";
import TextArea from "../TextArea/TextArea";

function LeftSide() {
  return (
    <div className="left-side">
      <Text text={"General Settings"} textClass={"title"}></Text>
      <TextInput id={"headline"} text={"Headline"} textClass={"text"} inputClass={"input-box"}></TextInput>
      <Text text={"Description"} textClass={"marg-top"}></Text>
      <TextArea></TextArea>
      <TextInput id={"success"} text={"Success Message"} textClass={"text"} inputClass={"input-box"}></TextInput>
    </div>
  );
}
export default LeftSide;

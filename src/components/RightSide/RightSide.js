import "../../App.css";
import "./RightSide.css";
import React, { useContext } from "react";
import Text from "../Text/Text";
import Close from "../Close/Close";
import Error from "../Error/Error";
import Input from "../Input/Input";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import { MyContext } from "../MyContext";
import Success from "../Success/Success";

function RightSide() {
  const { title, desc, nameFlag, emailControlFlag, emailFlag, successFlag } = useContext(MyContext);
  return (
    <div className="right-side centered">
      <div className={successFlag ? `popup-container centered hide` : "popup-container centered show"}>
        <Close></Close>
        <div className="texts-container centered">
          <Text text={title} textClass={"headline-input"}></Text>
          <Text text={desc} textClass={"description-input"}></Text>
        </div>
        <div className="inputs-container centered">
          <div className="input-error-container centered">
            <Input id={"name"} placeHolder={"Your Name"} inputClass={"popup-input"}></Input>
            <Error class={nameFlag ? "hide" : "show"} text={"This field is required"}></Error>
          </div>
          <div className="input-error-container centered">
            <Input id={"email"} placeHolder={"Email"} inputClass={"popup-input"}></Input>
            <Error class={emailFlag ? "hide" : "show"} text={"This field is required"}></Error>
            <Error class={emailControlFlag ? "hide" : "show"} text={"Invalid email address"}></Error>
          </div>
          <Dropdown></Dropdown>
        </div>
        <Button></Button>
      </div>
      <div className={!successFlag ? `popup-container centered hide` : "popup-container centered show center"}>
        <Success></Success>
      </div>
    </div>
  );
}
export default RightSide;

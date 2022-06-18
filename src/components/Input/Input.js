import "../../App.css";
import "./Input.css";

import React, { useContext } from "react";
import { MyContext } from "./../MyContext";
import validator from "validator";

function Input(props) {
  const { setHeaderTitle, setHeaderSuccess, setNameFlag, setEmailFlag, setEmailControlFlag, setInputName, setInputEmail, completeFlag, title, success, nameInput, emailInput } = useContext(MyContext);

  function onHandeChange(e) {
    if (!completeFlag) {
      if (props.id === "headline") {
        setHeaderTitle(e.target.value);
      } else if (props.id === "success") {
        setHeaderSuccess(e.target.value);
      } else if (props.id === "name") {
        if (e.target.value === "") {
          setNameFlag(false);
        } else {
          setNameFlag(true);
          setInputName(e.target.value);
        }
      } else if (props.id === "email") {
        if (e.target.value === "") {
          setEmailFlag(false);
          setEmailControlFlag(true);
        } else {
          setEmailFlag(true);
          setInputEmail(e.target.value);
          setEmailControlFlag(validator.isEmail(e.target.value));
        }
      }
    }
  }

  return (
    <input
      id={props.id !== undefined ? `${props.id}` : ""}
      onChange={(e) => {
        onHandeChange(e);
      }}
      placeholder={props.placeHolder !== undefined ? `${props.placeHolder}` : ""}
      type="text"
      className={props.inputClass !== undefined ? `input-box ${props.inputClass}` : ""}
      maxLength={props.id === "headline" ? `15` : ""}
      value={props.id === "headline" ? `${title}` : props.id === "success" ? `${success}` : props.id === "name" ? `${nameInput}` : props.id === "email" ? `${emailInput}` : ""}
    ></input>
  );
}

export default Input;

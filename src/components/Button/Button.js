import "../../App.css";
import "./Button.css";
import React, { useContext } from "react";
import { MyContext } from "../MyContext";

function Button() {
  const { nameFlag, emailControlFlag, emailFlag, setSuccessFlag, nameInput, emailInput, fontInput, setCompleteFlag } = useContext(MyContext);
  return (
    <button
      onClick={(e) => {
        if (nameFlag && emailFlag && emailControlFlag) {
          setSuccessFlag(true);
          setCompleteFlag(true);
          localStorage.setItem("name", nameInput);
          localStorage.setItem("email", emailInput);
          localStorage.setItem("font", fontInput);
          console.info(localStorage);
        }
      }}
      className="popup-btn"
    >
      GET MY 30% OFF
    </button>
  );
}
export default Button;

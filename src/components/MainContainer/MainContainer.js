import "./MainContainer.css";
import React from "react";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";

function MainContainer() {
  return (
    <div className="main-container">
      <LeftSide></LeftSide>
      <RightSide></RightSide>
    </div>
  );
}
export default MainContainer;

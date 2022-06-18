import "./TextArea.css";
import React, { useContext } from "react";
import { MyContext } from "../MyContext";

function TextArea() {
  const { setHeaderDesc, desc, completeFlag } = useContext(MyContext);

  return (
    <textarea
      value={desc}
      maxLength="100"
      className="description"
      onChange={(e) => {
        if (!completeFlag) {
          setHeaderDesc(e.target.value);
        }
      }}
    ></textarea>
  );
}

export default TextArea;

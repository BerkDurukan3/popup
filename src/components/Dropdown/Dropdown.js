import "./Dropdown.css";
import React, { useContext } from "react";
import { MyContext } from "../MyContext";

function Dropdown() {
  const { my_data, setInputFont } = useContext(MyContext);

  return (
    <select
      name="select-font"
      className="select-font"
      onChange={(e) => {
        setInputFont(e.target.value);
      }}
    >
      {my_data
        .sort((a, b) => a.family.localeCompare(b.family))
        .map(({ category, family }) => {
          if (category !== "monospace") {
            return (
              <option key={family} value={family}>
                {family}
              </option>
            );
          }
        })}
    </select>
  );
}
export default Dropdown;

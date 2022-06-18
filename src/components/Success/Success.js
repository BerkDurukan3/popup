import "../../App.css";
import "./Success.css";
import React, { useContext } from "react";
import { MyContext } from "../MyContext";

function Success() {
  const { success } = useContext(MyContext);
  return (
    <div className="success-container centered">
      <div className="success-icon">
        <svg width="99" height="99" viewBox="0 0 99 99" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M49.5 99C76.8381 99 99 76.8381 99 49.5C99 22.1619 76.8381 0 49.5 0C22.1619 0 0 22.1619 0 49.5C0 76.8381 22.1619 99 49.5 99ZM76.5966 34.1458C77.7816 32.9878 77.8037 31.0885 76.6458 29.9034C75.4878 28.7183 73.5885 28.6963 72.4034 29.8542L40.2559 61.2654L27.1379 47.9394C25.9756 46.7587 24.0762 46.7437 22.8954 47.9061C21.7147 49.0684 21.6997 50.9678 22.8621 52.1486L38.0768 67.6046C39.2361 68.7822 41.1294 68.8006 42.3113 67.6458L76.5966 34.1458Z"
            fill="#639005"
          />
        </svg>
      </div>
      <div className="success-text">{success}</div>
    </div>
  );
}
export default Success;

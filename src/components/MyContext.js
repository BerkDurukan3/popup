import { createContext, useState, useEffect } from "react";

const MyContext = createContext("");

const MyProvider = (props) => {
  const [title, setTitle] = useState("NEW STUFF");
  const [desc, setDescription] = useState("Sign up for our newsletter and get 15% off your first order!");
  const [success, setSuccess] = useState("Success");
  const [my_data, setMyData] = useState([]);

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [fontInput, setFontInput] = useState("");

  const [nameFlag, setNameFlag] = useState(false);
  const [emailFlag, setEmailFlag] = useState(false);
  const [emailControlFlag, setEmailControlFlag] = useState(true);

  const [completeFlag, setCompleteFlag] = useState(false);

  const [successFlag, setSuccessFlag] = useState(false);

  useEffect(() => {
    fetch(`https://apiv2.popupsmart.com/api/googlefont`)
      .then((response) => response.json())
      .then((actualData) => setMyData(actualData));
  }, []);

  const handleTitleChange = (e) => setTitle(e);
  const handleDescriptionChange = (e) => setDescription(e);
  const handleSuccessChange = (e) => setSuccess(e);

  const handleNameInputChange = (e) => setNameInput(e);
  const handleEmailInputChange = (e) => setEmailInput(e);
  const handleFontInputChange = (e) => setFontInput(e);

  const handleNameFlagChange = (e) => setNameFlag(e);
  const handleEmailFlagChange = (e) => setEmailFlag(e);
  const handleEmailControlFlagChange = (e) => setEmailControlFlag(e);

  const handleCompleteFlagChange = (e) => setCompleteFlag(e);

  const handleSuccessFlagFlagChange = (e) => setSuccessFlag(e);
  return (
    <MyContext.Provider
      value={{
        title,
        setHeaderTitle: handleTitleChange,
        desc,
        setHeaderDesc: handleDescriptionChange,
        success,
        setHeaderSuccess: handleSuccessChange,
        my_data,
        nameInput,
        setInputName: handleNameInputChange,
        emailInput,
        setInputEmail: handleEmailInputChange,
        fontInput,
        setInputFont: handleFontInputChange,
        nameFlag,
        setNameFlag: handleNameFlagChange,
        emailFlag,
        setEmailFlag: handleEmailFlagChange,
        emailControlFlag,
        setEmailControlFlag: handleEmailControlFlagChange,
        successFlag,
        setSuccessFlag: handleSuccessFlagFlagChange,
        completeFlag,
        setCompleteFlag: handleCompleteFlagChange
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };

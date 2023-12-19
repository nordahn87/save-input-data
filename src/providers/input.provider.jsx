import React, { createContext, useContext, useState } from "react";

const InputValueContext = createContext();

export const InputValueProvider = (props) => {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    phoneNumber: "",
    gender: "",
    additionalInfo: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("inputValues", JSON.stringify(inputValues));
    console.log("Submit")
  };


  return (
    <>
      <InputValueContext.Provider
        value={{
          inputValues,
          setInputValues,
          handleSubmit
        }}
      >
        {props.children}
      </InputValueContext.Provider>
    </>
  );
};

export const useInputValue = () => useContext(InputValueContext);



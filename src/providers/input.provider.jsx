import React, { createContext, useContext, useState, useEffect } from "react";

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

  return (
    <>
      <InputValueContext.Provider
        value={{
          inputValues,
          setInputValues,
        }}
      >
        {props.children}
      </InputValueContext.Provider>
    </>
  );
};

export const useInputValue = () => useContext(InputValueContext);

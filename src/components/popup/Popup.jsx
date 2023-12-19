import { useEffect, useRef } from "react";
import { useInputValue } from "../../providers/input.provider";
import SaveButton from "./buttons/save/Save";
import Dialog from "./dialog/Dialog";

export const Popup = () => {
  const { inputValues, setInputValues } = useInputValue();
  const isInputNotEmpty = Object.values(inputValues).some((value) => !!value);
 
  return (
    <div
      className={
        "container-popup " + (isInputNotEmpty ? "open-popup" : "close-popup")
      }
    >
      <div className="wrapper-popup">
        <Dialog />
        <SaveButton />
      </div>
    </div>
  );
};

export default Popup;

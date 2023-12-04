import SaveButton from "./buttons/save/Save";
import Dialog from "./dialog/Dialog";

export const Popup = () => {
  return (
    <div className="wrapper-popup show">
      <div className="container-popup">
        <Dialog />
        <SaveButton />
      </div>
    </div>
  );
};

export default Popup;

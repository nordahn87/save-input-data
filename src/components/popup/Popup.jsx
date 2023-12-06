import SaveButton from "./buttons/save/Save";
import Dialog from "./dialog/Dialog";

export const Popup = () => {
  return (
    <div className="container-popup show">
      <div className="wrapper-popup">
        <Dialog />
        <SaveButton />
      </div>
    </div>
  );
};

export default Popup;

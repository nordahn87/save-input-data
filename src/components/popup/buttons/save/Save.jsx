import { useInputValue } from "../../../../providers/input.provider";

export const SaveButton = () => {
  const { handleSubmit } = useInputValue();

  return (
    <input
      type="submit"
      onClick={handleSubmit}
      className="submit-button"
      value="Save"
    />
  );
};

export default SaveButton;

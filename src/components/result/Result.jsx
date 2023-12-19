import { useInputValue } from "../../providers/input.provider";

export const Result = () => {
  const { inputValues, setInputValues, handleSubmit } = useInputValue();

  return (
    <div className="wrapper">
      <label>First name</label>
      <p>{inputValues.firstName}</p>

      <label>Last name</label>
      <div>-</div>

      <label>Birth Date</label>
      <div>-</div>

      <label>Email:</label>
      <div>-</div>

      <label>Phone Number</label>
      <div>-</div>

      <label>Gender</label>
      <div>-</div>

      <label>Additional information.</label>
      <div>No additional information.</div>
    </div>
  );
};

export default Result;

import { useInputValue } from "../../providers/input.provider";

export const Form = () => {
  const { inputValues, setInputValues } = useInputValue();

  return (
    <form id="form" className="wrapper">
      <label htmlFor="firstName">First name</label>
      <input
        type="text"
        id="first-name"
        className="form-input"
        value={inputValues.firstName}
      />

      <label htmlFor="lastName">Last name</label>
      <input
        type="text"
        id="last-name"
        className="form-input"
        name="lastName"
        value={inputValues.lastName}
      />

      <label htmlFor="birthDate">Birth Date</label>
      <input
        type="date"
        id="birth-date"
        className="form-input"
        name="birthDate"
        value={inputValues.birthDate}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        className="form-input"
        name="email"
        value={inputValues.email}
      />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="tel"
        id="phone-number"
        className="form-input"
        name="phoneNumber"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        value={inputValues.phoneNumber}
      />

      <label htmlFor="gender">Gender</label>
      <select
        id="gender"
        name="gender"
        className="form-input"
        value={inputValues.gender}
      >
        <option value="None selected" disabled selected>
          Select gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <label htmlFor="additionalInfo">Additional Info:</label>
      <textarea
        id="additional-info"
        className="form-input"
        name="additionalInfo"
        value={inputValues.additionalInfo}
      ></textarea>
    </form>
  );
};

export default Form;

import { useEffect } from "react";
import { useInputValue } from "../../providers/input.provider";

export const Form = () => {
  const { inputValues, setInputValues, handleSubmit } = useInputValue();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  return (
    <form id="form" className="wrapper" onSubmit={handleSubmit}>
      <label htmlFor="firstName">First name</label>
      <input
        type="text"
        id="first-name"
        className="form-input"
        name="firstName"
        value={inputValues.firstName}
        onChange={handleInputChange}
      />

      <label htmlFor="lastName">Last name</label>
      <input
        type="text"
        id="last-name"
        className="form-input"
        name="lastName"
        value={inputValues.lastName}
        onChange={handleInputChange}
      />

      <label htmlFor="birthDate">Birth Date</label>
      <input
        type="date"
        id="birth-date"
        className="form-input"
        name="birthDate"
        value={inputValues.birthDate}
        onChange={handleInputChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        className="form-input"
        name="email"
        value={inputValues.email}
        onChange={handleInputChange}
      />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="tel"
        id="phone-number"
        className="form-input"
        name="phoneNumber"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        value={inputValues.phoneNumber}
        onChange={handleInputChange}
      />

      <label htmlFor="gender">Gender</label>
      <select
        id="gender"
        name="gender"
        className="form-input"
        value={inputValues.gender}
        onChange={handleInputChange}
      >
        <option value="">Select your gender</option>
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
        onChange={handleInputChange}
      ></textarea>

    </form>
  );
};

export default Form;

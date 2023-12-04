export const Form = () => {
  return (
    <form id="form" className="wrapper">
      <label htmlFor="firstname">First name</label>
      <input type="text" id="firstname" name="firstname" />

      <label htmlFor="lastname">Last name</label>
      <input type="text" id="lastname" name="lastname" />

      <label htmlFor="birthdate">Birth Date</label>
      <input type="date" id="birthdate" name="birthdate" />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      />

      <label htmlFor="gender">Gender</label>
      <select id="gender" name="gender" value="">
        <option value="" disabled selected>
          Select gender
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <label htmlFor="additionalinfo">Additional Info:</label>
      <textarea id="additionalinfo" name="additionalinfo" ondrop="return false"></textarea>
    </form>
  );
};

export default Form;

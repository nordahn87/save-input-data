export const Form = () => {
  return (
    <form>
      <label htmlFor="firstname">First name</label>
      <input type="text" id="firstname" name="firstname" value="" />

      <label htmlFor="lastname">Last name</label>
      <input type="text" id="lastname" name="lastname" value="" />

      <label htmlFor="birthdate">Birth Date</label>
      <input type="date" id="birthdate" name="birthdate" value="" />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value="" />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        value=""
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
      <textarea id="additionalinfo" name="additionalinfo" value=""></textarea>
    </form>
  );
};

export default Form;

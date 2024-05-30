const DateOfBirthInput = ({ value, onChange }) => {
  return (
    <label>
      Date of Birth:
      <input
        type="date"
        name="dateOfBirth"
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
};

export default DateOfBirthInput;

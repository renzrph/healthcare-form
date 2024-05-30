const GenderInput = ({ value, onChange }) => {
  return (
    <label>
      Gender:
      <select name="gender" value={value} onChange={onChange} required>
        <option value="">Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </label>
  );
};

export default GenderInput;

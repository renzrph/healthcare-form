const SmokeQuestion = ({ value, onChange }) => {
  return (
    <label>
      Do you smoke?
      <select name="smoke" value={value} onChange={onChange} required>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </label>
  );
};

export default SmokeQuestion;

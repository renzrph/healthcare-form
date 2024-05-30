const AlcoholQuestion = ({ value, onChange }) => {
  return (
    <label>
      Do you drink alcohol?
      <select name="alcohol" value={value} onChange={onChange} required>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </label>
  );
};

export default AlcoholQuestion;

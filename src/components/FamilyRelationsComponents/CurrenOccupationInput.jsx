const CurrenOccupationInput = ({ value, onChange }) => {
  return (
    <label>
      Current Occupation:
      <input
        type="text"
        name="currentOccupation"
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
};

export default CurrenOccupationInput;

const CivilStatusInput = ({ value, onChange }) => {
  return (
    <label>
      Civil Status:
      <input
        type="text"
        name="civilStatus"
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
};

export default CivilStatusInput;

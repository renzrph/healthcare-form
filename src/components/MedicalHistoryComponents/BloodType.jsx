const BloodType = ({ value, onChange }) => {
  return (
    <label>
      Blood type:
      <input
        type="text"
        name="bloodType"
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
};

export default BloodType;

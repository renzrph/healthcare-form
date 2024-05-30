const HeightInput = ({ value, onChange, onBlur }) => {
  return (
    <label>
      Height (cm):
      <input
        type="number"
        name="height"
        value={value}
        onChange={onChange}
        onBlur={onBlur} // Check validity on blur
        required
      />
    </label>
  );
};

export default HeightInput;

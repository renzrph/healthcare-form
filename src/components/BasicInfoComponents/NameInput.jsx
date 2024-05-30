const NameInput = ({ value, onChange, onBlur }) => {
  return (
    <label>
      Name:
      <input
        type="text"
        name="name"
        value={value}
        onChange={onChange}
        onBlur={onBlur} // Check validity on blur
        required
      />
    </label>
  );
};

export default NameInput;

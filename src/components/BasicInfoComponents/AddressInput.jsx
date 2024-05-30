const AddressInput = ({ value, onChange, onBlur }) => {
  return (
    <label>
      Address:
      <input
        type="text"
        name="address"
        value={value}
        onChange={onChange}
        onBlur={onBlur} // Check validity on blur
        required
      />
    </label>
  );
};

export default AddressInput;

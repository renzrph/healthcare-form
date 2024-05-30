const EmailInput = ({ value, onChange, onBlur }) => {
  return (
    <label>
      Email:
      <input
        type="email"
        name="email"
        value={value}
        onChange={onChange}
        onBlur={onBlur} // Check validity on blur
        required
      />
    </label>
  );
};

export default EmailInput;

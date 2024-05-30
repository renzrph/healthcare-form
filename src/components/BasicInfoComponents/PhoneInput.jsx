import React from "react";

const PhoneInput = ({ value, onChange, onBlur }) => {
  return (
    <label>
      Phone:
      <input
        type="tel"
        name="phone"
        value={value}
        onChange={onChange}
        onBlur={onBlur} // Check validity on blur
        required
      />
    </label>
  );
};

export default PhoneInput;

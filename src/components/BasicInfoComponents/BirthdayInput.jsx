import React from "react";

const BirthdayInput = ({ value, onChange, onBlur }) => {
  return (
    <label>
      Birthday:
      <input
        type="date"
        name="birthday"
        value={value}
        onChange={onChange}
        onBlur={onBlur} // Check validity on blur
        required
      />
    </label>
  );
};

export default BirthdayInput;

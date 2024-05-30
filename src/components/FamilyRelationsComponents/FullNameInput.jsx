import React from "react";

const FullNameInput = ({ value, onChange }) => {
  return (
    <label>
      Full Name:
      <input
        type="text"
        name="fullName"
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
};

export default FullNameInput;

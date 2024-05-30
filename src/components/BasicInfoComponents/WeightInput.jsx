import React from "react";

const WeightInput = ({ value, onChange, onBlur }) => {
  return (
    <label>
      Weight (kg):
      <input
        type="number"
        name="weight"
        value={value}
        onChange={onChange}
        onBlur={onBlur} // Check validity on blur
        required
      />
    </label>
  );
};

export default WeightInput;

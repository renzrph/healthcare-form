import React from "react";

const RelationshipInput = ({ value, onChange }) => {
  return (
    <label>
      Relationship:
      <input
        type="text"
        name="relationship"
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
};

export default RelationshipInput;

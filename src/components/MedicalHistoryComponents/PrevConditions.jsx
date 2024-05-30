const PrevConditions = ({ value, onChange }) => {
  return (
    <label>
      Other previous conditions:
      <textarea name="previousConditions" value={value} onChange={onChange} />
    </label>
  );
};

export default PrevConditions;

const EducationalAttainmentInput = ({ value, onChange }) => {
  return (
    <label>
      Educational Attainment:
      <input
        type="text"
        name="educationalAttainment"
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
};

export default EducationalAttainmentInput;

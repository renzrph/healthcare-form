const MonthlyIncomeInput = ({ value, onChange }) => {
  return (
    <label>
      Monthly Income:
      <input
        type="number"
        name="monthlyIncome"
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
};

export default MonthlyIncomeInput;

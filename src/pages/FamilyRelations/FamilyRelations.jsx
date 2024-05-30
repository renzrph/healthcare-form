import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FullNameInput from "../../components/FamilyRelationsComponents/FullNameInput";
import RelationshipInput from "../../components/FamilyRelationsComponents/RelationshipInput";
import GenderInput from "../../components/FamilyRelationsComponents/GenderInput";
import CivilStatusInput from "../../components/FamilyRelationsComponents/CivilStatusInput";
import DateOfBirthInput from "../../components/FamilyRelationsComponents/DateOfBirthInput";
import EducationalAttainmentInput from "../../components/FamilyRelationsComponents/EducationalAttainmentInput";
import MonthlyIncomeInput from "../../components/FamilyRelationsComponents/MonthlyIncomeInput";
import CurrenOccupationInput from "../../components/FamilyRelationsComponents/CurrenOccupationInput";

const FamilyRelations = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    relationship: "",
    gender: "",
    civilStatus: "",
    dateOfBirth: "",
    educationalAttainment: "",
    currentOccupation: "",
    monthlyIncome: "",
  });

  // State to track form validity
  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Check form validity whenever a field changes
    checkFormValidity();
  };

  // Function to check if all fields are filled out
  const checkFormValidity = () => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    setFormValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form if it's valid
    if (formValid) {
      // Handle form submission here
      console.log(formData);
      // You can send the form data to a backend or do whatever you need with it
      navigate("/confirmation");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="forms">
      <h2>Page 3: Family Relations</h2>
      <FullNameInput value={formData.fullName} onChange={handleChange} />
      <br />
      <RelationshipInput
        value={formData.relationship}
        onChange={handleChange}
      />
      <br />
      <GenderInput value={formData.gender} onChange={handleChange} />
      <br />
      <CivilStatusInput value={formData.civilStatus} onChange={handleChange} />
      <br />
      <DateOfBirthInput value={formData.dateOfBirth} onChange={handleChange} />
      <br />
      <EducationalAttainmentInput
        value={formData.educationalAttainment}
        onChange={handleChange}
      />
      <br />
      <CurrenOccupationInput
        value={formData.currentOccupation}
        onChange={handleChange}
      />
      <br />
      <MonthlyIncomeInput
        value={formData.monthlyIncome}
        onChange={handleChange}
      />
      <br />
      <button
        type="button"
        onClick={handleSubmit}
        disabled={!formValid} // Disable button if form is not valid
      >
        SUBMIT
      </button>
    </form>
  );
};

export default FamilyRelations;

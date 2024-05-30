import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlcoholQuestion from "../../components/MedicalHistoryComponents/AlcoholQuestion";
import SmokeQuestion from "../../components/MedicalHistoryComponents/SmokeQuestion";
import BloodType from "../../components/MedicalHistoryComponents/BloodType";
import PrevConditions from "../../components/MedicalHistoryComponents/PrevConditions";

const MedicalHistory = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    alcohol: "",
    alcoholFrequency: "",
    smoke: "",
    smokeFrequency: "",
    bloodType: "",
    previousConditions: "",
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

  const handleYesNoChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Reset hidden question fields if user changes selection
    if (value === "No") {
      setFormData({
        ...formData,
        [`${name}Frequency`]: "",
      });
    }
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

  return (
    <form className="forms">
      <h2>Page 2: Medical History</h2>
      <AlcoholQuestion value={formData.alcohol} onChange={handleYesNoChange} />
      {formData.alcohol === "Yes" && (
        <div>
          <label>
            How often do you drink alcohol?
            <textarea
              name="alcoholFrequency"
              value={formData.alcoholFrequency}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      )}
      <br />
      <SmokeQuestion value={formData.smoke} onChange={handleYesNoChange} />
      {formData.smoke === "Yes" && (
        <div>
          <label>
            How often do you smoke?
            <textarea
              name="smokeFrequency"
              value={formData.smokeFrequency}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      )}
      <br />
      <BloodType value={formData.bloodType} onChange={handleChange} />
      <br />
      <PrevConditions
        value={formData.previousConditions}
        onChange={handleChange}
      />
      <br />
      <button
        type="button"
        onClick={() => {
          if (formValid) {
            // Proceed only if the form is valid
            navigate("/family-relations");
          }
        }}
        disabled={!formValid} // Disable button if form is not valid
      >
        NEXT
      </button>
    </form>
  );
};

export default MedicalHistory;

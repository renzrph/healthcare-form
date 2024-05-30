import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NameInput from "../../components/BasicInfoComponents/NameInput";
import BirthdayInput from "../../components/BasicInfoComponents/BirthdayInput";
import AddressInput from "../../components/BasicInfoComponents/AddressInput";
import EmailInput from "../../components/BasicInfoComponents/EmailInput";
import PhoneInput from "../../components/BasicInfoComponents/PhoneInput";
import HeightInput from "../../components/BasicInfoComponents/HeightInput";
import WeightInput from "../../components/BasicInfoComponents/WeightInput";

const BasicInfo = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    birthday: "",
    address: "",
    email: "",
    phone: "",
    height: "",
    weight: "",
  });

  // State to track form validity
  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
    // Handle form submission here
    console.log(formData);
    // You can send the form data to a backend or do whatever you need with it
  };

  return (
    <form onSubmit={handleSubmit} className="forms">
      <h2>Page 1: Basic Info</h2>
      <NameInput
        value={formData.name}
        onChange={handleChange}
        onBlur={checkFormValidity}
      />
      <br />
      <BirthdayInput
        value={formData.birthday}
        onChange={handleChange}
        onBlur={checkFormValidity}
      />
      <br />
      <AddressInput
        value={formData.address}
        onChange={handleChange}
        onBlur={checkFormValidity}
      />
      <br />
      <EmailInput
        value={formData.email}
        onChange={handleChange}
        onBlur={checkFormValidity}
      />
      <br />
      <PhoneInput
        value={formData.phone}
        onChange={handleChange}
        onBlur={checkFormValidity}
      />
      <br />
      <HeightInput
        value={formData.height}
        onChange={handleChange}
        onBlur={checkFormValidity}
      />
      <br />
      <WeightInput
        value={formData.weight}
        onChange={handleChange}
        onBlur={checkFormValidity}
      />
      <br />
      <button
        type="button"
        onClick={() => {
          if (formValid) {
            // Proceed only if the form is valid
            navigate("/medical-history");
          }
        }}
        disabled={!formValid} // Disable button if form is not valid
      >
        NEXT
      </button>
    </form>
  );
};

export default BasicInfo;

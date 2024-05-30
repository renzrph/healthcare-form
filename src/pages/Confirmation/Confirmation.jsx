import "./Confirmation.css";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="forms">
      <h2>Form was successfully submitted!</h2>
      <button
        className="back-to-homepage-btn"
        type="button"
        onClick={() => {
          navigate("/");
        }}
      >
        Submit Another Form
      </button>
    </div>
  );
};

export default Confirmation;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicInfo from "./pages/BasicInfo/BasicInfo";
import MedicalHistory from "./pages/MedicalHistory/MedicalHistory";
import FamilyRelations from "./pages/FamilyRelations/FamilyRelations";
import Confirmation from "./pages/Confirmation/Confirmation";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicInfo />} />
        <Route path="/medical-history" element={<MedicalHistory />} />
        <Route path="/family-relations" element={<FamilyRelations />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

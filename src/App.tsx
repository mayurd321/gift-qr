import OTPForm from "./components/Form";
import TermsAndConditions from "./components/TermsAndConditions";
import UPIForm from "./components/UPIForm";
import { Routes, Route } from "react-router";
import VoucherSuccess from "./components/VoucherSuccess";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<OTPForm />} />
        <Route path="/upi" element={<UPIForm />} />
        <Route path="/tnc" element={<TermsAndConditions />} />
        <Route path="/voucher" element={<VoucherSuccess />} />
      </Routes>
    </>
  );
}

export default App;

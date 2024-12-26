import { useState } from "react";
import nupiIcon from "../../assets/nupi-icon.svg";
import giftBoxIcon from "../../assets/gift-box.svg";
import { Link } from "react-router";

const VoucherSuccess = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSend = () => {
    console.log("Sending voucher to email:", email);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText("1245 4541 4655 4865");
    // You might want to add a toast notification here
  };

  const handleCopyPin = () => {
    navigator.clipboard.writeText("124 215");
    // You might want to add a toast notification here
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl text-gray-700">Congratulations!</h1>
        <div className="text-[#1B6B82]">
          <p>You won</p>
          <p className="text-xl">Rs 500 Myntra Voucher</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#1B6B82] to-blue-400 rounded-xl p-6 text-white space-y-4">
        <h2 className="text-xl">Gift Card Worth Rs. 3,000</h2>
        
        <div className="space-y-4">
          <div>
            <p className="text-sm mb-1">CODE</p>
            <div className="flex items-center justify-between">
              <span className="text-lg">1245 4541 4655 4865</span>
              <button
                onClick={handleCopyCode}
                className="px-4 py-1 bg-white/20 rounded-full text-sm"
              >
                Copy
              </button>
            </div>
          </div>

          <div>
            <p className="text-sm mb-1">PIN</p>
            <div className="flex items-center justify-between">
              <span className="text-lg">124 215</span>
              <button
                onClick={handleCopyPin}
                className="px-4 py-1 bg-white/20 rounded-full text-sm"
              >
                Copy
              </button>
              <img src={giftBoxIcon} alt=" gift box icon" height={60} width={60} />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm bg-white text-[#1B6B82]">
          <button className="hover:underline">How to redeem</button>
          <p>Expires on Oct 21,2025</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-gray-500">Send voucher to your email</h3>
        <div className="space-y-2">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="youremail@gmail.com"
            className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200"
          />
          <button
            onClick={handleSend}
            className="w-full p-3 rounded-full bg-[#1B6B82] text-white hover:bg-blue-500"
          >
            Send
          </button>
        </div>
      </div>

      <div className="text-center text-gray-500">
        Having trouble?{" "}
        <a href="#" className="text-[#1B6B82] hover:underline">
          Contact Us
        </a>
      </div>

      <div className="text-center text-sm text-gray-500">
        <Link to="/privacy" className="text-[#1B6B82] hover:underline">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link to="/terms" className="text-[#1B6B82] hover:underline">
          Terms of Use
        </Link>
      </div>

      <div className="text-center space-y-1">
        <p className="text-sm text-gray-500">Powered By</p>
        <img
          src={nupiIcon}
          alt="Powered by NUPI"
          className="mx-auto w-8 h-8"
        />
      </div>
    </div>
  );
};

export default VoucherSuccess;
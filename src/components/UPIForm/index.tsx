import { useEffect, useState } from "react";
import nupiIcon from "../../assets/nupi-icon.svg";
import giftBoxIcon from "../../assets/gift-box.svg";
import CashbackPopup from "../Popup";
import { Link, useLocation } from "react-router";

const UPIForm = () => {
  const location = useLocation();
  const { apiResponse } = location.state || {}; // Destructure the state
  console.log(apiResponse);
  const [payoutAmt, setPayoutAmount] = useState(Math.floor(Math.random() * 5 + 1));
  const [upiId, setUpiId] = useState("");
  const [isValidUpiId, setIsValidUpiId] = useState(false); // Validation state
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => setPayoutAmount(Math.floor(Math.random() * 5) + 1), []);

  // Function to validate UPI ID
  const validateUpiId = (id: string) => {
    const upiRegex = /^[\w.\-_]{3,}@[\w.\-_]{2,}$/; // Regex for UPI ID validation
    return upiRegex.test(id);
  };

  useEffect(() => {
    if (upiId) {
      setIsValidUpiId(validateUpiId(upiId));
    } else {
      setIsValidUpiId(false);
    }
  }, [upiId]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("UPI ID Submitted:", upiId);
    setShowPopup(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      {/* Logo */}
      <div className="flex items-center justify-center">
        <img src={giftBoxIcon} alt="NUPI Logo" width={200} height={200} />
      </div>
      <h2 className="text-center text-[#464646] text-2xl font-medium">
        Congratulations!
      </h2>
      <div className="w-2/5 mx-auto text-center text-[#1B6B82] text-xl font-semibold">
        You won Rs {payoutAmt} Cashback
      </div>
      <div className="w-3/4 mx-auto text-center text-[#9C9C9C] text-sm font-normal">
        Lorem ipsum dolor sit amet consectetur. Id velit augue semper dignissim
        aliquet augue consequat amet
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="text-[#9C9C9C] font-medium">Enter your UPI ID</div>
        <div className="relative">
          <input
            type="text"
            name="upiId"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            className={`w-full p-3 rounded-xl focus:outline-[#1B6B82] bg-[#1B6B821A] border ${
              isValidUpiId
                ? "border-green-500 focus:outline-green-500"
                : upiId
                ? "border-red-500 focus:outline-red-500"
                : "border-transparent"
            }`}
            placeholder="loremipsum@ybl"
          />
          {upiId && (
            <span
              className={`absolute inset-y-0 right-3 flex items-center text-sm ${
                isValidUpiId ? "text-green-500" : "text-red-500"
              }`}
            >
              {isValidUpiId ? "✓" : "X"}
            </span>
          )}
        </div>
        <div className="text-[#9C9C9C] font-medium">Vikram Hiran</div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="px-6 py-3 rounded-3xl bg-[#1B6B82] text-white font-medium hover:bg-blue-500"
          >
            Claim Cashback
          </button>
        </div>
      </form>

      {/* Popup */}
      {showPopup && <CashbackPopup onClose={() => setShowPopup(false)} />}

      {/* Links */}
      <div className="text-center text-sm text-gray-500">
        Having trouble?{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Contact Us
        </a>
      </div>

      <div className="text-center text-sm text-gray-500">
        <Link to="/tnc" className="text-blue-600 hover:underline">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link to="/tnc" className="text-blue-600 hover:underline">
          Terms of Use
        </Link>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-500">
        Powered by{" "}
        <img
          src={nupiIcon}
          alt="Powered by NUPI"
          className="inline-block w-4 h-4 ml-1"
        />
      </div>
    </div>
  );
};

export default UPIForm;

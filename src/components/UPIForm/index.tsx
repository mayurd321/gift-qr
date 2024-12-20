import { useState } from "react";
import nupiIcon from "../../assets/nupi-icon.svg";
import gifBoxIcon from "../../assets/gift-box.svg";

const UPIForm = () => {
  const [upiId, setUpiId] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("UPI ID Submitted:", upiId);
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      {/* Logo */}
      <div className="flex items-center justify-center">
        <img src={gifBoxIcon} alt="NUPI Logo" width={200} height={200} />
      </div>

      {/* Form Header */}
      <div className="text-center">
        <h2 className="text-lg font-semibold">Enter your UPI ID</h2>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <input
            type="text"
            name="upiId"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#1B6B82] text-white placeholder-white border border-transparent"
            placeholder="loremipsum@ybl"
          />
        </div>
        <div className="text-right text-[#ffffffb3] font-light">
          Verified ✓
        </div>
        <div className="text-center text-gray-600 font-medium">Vikram Hiran</div>
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-[#1B6B82] text-white hover:bg-blue-500"
        >
          Claim Cashback
        </button>
      </form>

      {/* Links */}
      <div className="text-center text-sm text-gray-500">
        Having trouble?{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Contact Us
        </a>
      </div>

      <div className="text-center text-sm text-gray-500">
        <a href="#" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Terms of Use
        </a>
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

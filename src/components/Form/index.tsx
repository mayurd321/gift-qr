import { useState } from "react";
import nupiIcon from "../../assets/nupi-icon.svg";
import { Link } from "react-router";
import axios from "axios";

const OTPForm = () => {
  const [formData, setFormData] = useState({
    code: "",
    phone: "",
    otp: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const response = await axios.post(
      "http://localhost:8110/api/instant-cashback/verify-otp",
      {
        phoneNumber: formData.phone,
        otp: formData.otp,
        voucherCode: formData.code,
      }
    );
    console.log("api response:", response);
  } catch (err) {
    console.error("Error verifying OTP:", err);
  }
  };

  const handleGetOTP = async () => {
    try {
      console.log("Requesting OTP for phone:", formData.phone);
      // call api for sending otp to the given phone number
      const { data } = await axios.post(
        "http://localhost:8110/api/instant-cashback/send-otp",
        { phoneNumber: formData.phone }
      );
      console.log("Get OTP response :", data);
    } catch (err) {
      console.error("Error sending OTP:", err);
    }
  };

  const handleResend = () => {
    console.log("Resending OTP");
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <div className="flex items-center justify-center">
        <img src={nupiIcon} alt="no img found" width={80} height={80} />
      </div>
      <div className="text-center space-y-2">
        <h2 className=" text-[#464646] text-xl font-medium">Program Name</h2>
        <p className="text-[#9C9C9C] font-medium">
          Lorem ipsum dolor sit amet consectetur. Id velit augue semper
          dignissim aliquet augue consequat amet.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-[#9C9C9C]">Enter your Code</label>
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
            className="w-full p-3 rounded-xl focus:outline-[#1B6B82] bg-[#1B6B821A] border border-gray-200"
            placeholder="XCDC8DFDF"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-[#9C9C9C]">Enter Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-xl focus:outline-[#1B6B82] bg-[#1B6B821A] border border-gray-200"
            placeholder="9876543210"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-[#9C9C9C]">
            OTP<span className="text-[#1B6B82]">*</span>
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              className="flex-1 p-3 rounded-xl focus:outline-[#1B6B82] bg-[#1B6B821A] border border-gray-200"
              placeholder="Enter OTP"
            />
            <button
              type="button"
              onClick={handleGetOTP}
              className="px-4 py-2 rounded-xl bg-[#1B6B821A] text-md font-normal text-[#1B6B82] border border-[#1B6B82] hover:bg-blue-50"
            >
              Get OTP
            </button>
          </div>
        </div>

        <div className="text-[#9C9C9C]">
          OTP not received ?{" "}
          <button
            type="button"
            onClick={handleResend}
            className="text-[#1B6B82] font-medium hover:underline"
          >
            Resend
          </button>
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-1/4 p-3 rounded-3xl bg-[#1B6B82] text-white hover:bg-blue-500"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="text-center text-[#9C9C9C]">
        Having trouble?{" "}
        <a href="#" className="text-[#1B6B82] font-medium hover:underline">
          Contact Us
        </a>
      </div>

      <div className="text-center text-sm text-[#9C9C9C]">
        <Link to="/tnc" className="text-[#1B6B82] font-medium hover:underline">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link to="/tnc" className="text-[#1B6B82] font-medium hover:underline">
          Terms of Use
        </Link>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-[#9C9C9C]">
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

export default OTPForm;

import { useState } from "react";
import nupiIcon from "../../assets/nupi-icon.svg";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleGetOTP = () => {
    console.log("Requesting OTP for phone:", formData.phone);
  };

  const handleResend = () => {
    console.log("Resending OTP");
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <div className="flex items-center justify-center">
        <img src={nupiIcon} alt="no img found" width={80} height={80} />
      </div>
      <div>
        <h2 className=" text-[#464646] text-xl">Program Name</h2>
        <p className="text-[#9C9C9C] font-extralight">
          Lorem ipsum dolor sit amet consectetur. Id velit augue semper
          dignissim aliquet augue consequat amet.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-gray-500">Enter your Code</label>
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-50 border border-gray-200"
            placeholder="XCDC8DFDF"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-500">Enter Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-50 border border-gray-200"
            placeholder="9876543210"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-500">
            OTP<span className="text-blue-600">*</span>
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              className="flex-1 p-3 rounded bg-gray-50 border border-gray-200"
              placeholder="Enter OTP"
            />
            <button
              type="button"
              onClick={handleGetOTP}
              className="px-2 py-2 rounded bg-gray-50 text-blue-600 border border-blue-600 hover:bg-blue-50"
            >
              Get OTP
            </button>
          </div>
        </div>

        <div className="text-gray-500">
          OTP not received ?{" "}
          <button
            type="button"
            onClick={handleResend}
            className="text-blue-600 hover:underline"
          >
            Resend
          </button>
        </div>

        <button
          type="submit"
          className="w-1/4 p-3 rounded-2xl bg-[#1B6B82] text-white hover:bg-blue-500"
        >
          Submit
        </button>
      </form>

      <div className="text-center text-gray-500">
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

      <div className="text-center text-sm text-gray-500">
        The Usage and operation of this website is governed by the{" "}
        <span className="text-blue-600">NUPI</span>
      </div>
    </div>
  );
};

export default OTPForm;

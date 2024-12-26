import tickIcon from "../../assets/tick-icon.svg";

const CashbackPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center space-y-4">
        {/* Success Icon */}
        <div className="flex items-center justify-center">
          <img src={tickIcon} alt="Tick Icon" width={48} height={48} />
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-[#464646]">Cashback Sent</h2>

        {/* Message */}
        <p className="text-sm text-gray-500">
          Amount transferred, it will reflect in your bank account within 24
          hours.
        </p>

        {/* Done Button */}
        <button
          onClick={onClose}
          className="w-full py-2 rounded-lg border border-[#1B6B82] text-[#1B6B82] hover:bg-[#f0f9fc]"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default CashbackPopup;

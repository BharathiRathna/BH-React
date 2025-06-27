import React from "react";

interface MobileSearchProps {
  onClose: () => void;
}

const MobileSearch: React.FC<MobileSearchProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black text-[#f7eedf] z-50 flex flex-col px-4 pt-24">
      {/* Search input */}
      <div className="relative mb-10">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent border-b border-[#bbae96] text-base pb-2 placeholder-[#f7eedf] focus:outline-none"
        />
        <i className="fas fa-search absolute right-1 top-1 text-[#bbae96] text-sm"></i>
      </div>

      {/* Message */}
      <p className="text-sm text-center font-serif leading-relaxed px-2">
        In the search for exceptional products, recipes, and inspiration, <br />
        look no further than Boar’s Head.
      </p>

      {/* Close button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={onClose}
          className="text-sm uppercase tracking-wide text-[#f7eedf] flex items-center gap-2"
        >
          <span className="text-lg">✕</span>
          <strong>Close</strong>
        </button>
      </div>
    </div>
  );
};

export default MobileSearch;

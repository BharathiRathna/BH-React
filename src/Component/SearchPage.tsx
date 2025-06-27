import React from "react";

interface SearchPageProps {
  onClose: () => void;
}

const SearchPage: React.FC<SearchPageProps> = ({ onClose }) => {
  return (
    <div className="fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-black text-[#f7eedf] z-40 flex flex-col items-center justify-start px-4 pt-20">
      <div className="w-full max-w-2xl text-center">
       
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent border-b border-[#bbae96] text-lg pb-2 placeholder-[#f7eedf] focus:outline-none"
          />
          <i className="fas fa-search absolute right-0 top-1 text-[#bbae96]"></i>
        </div>

        
        <p className="text-xl mt-14 font-serif leading-relaxed">
          In the search for exceptional products, recipes, and inspiration,{" "}
          <br />
          look no further than Boar’s Head.
        </p>

        
        <div className="justify-center items-center flex flex-col mt-8">
          <button
            onClick={onClose}
            className="mt-12 text-sm uppercase tracking-wide text-[#f7eedf] flex items-center justify-center gap-2"
          >
            <span className="text-lg text-center">✕</span>{" "}
            <strong>Close</strong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

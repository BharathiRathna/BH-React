import React from "react";

interface MobileOurBrandProps {
  onBack: () => void;
}

const MobileOurBrand: React.FC<MobileOurBrandProps> = ({ onBack }) => {
  return (
    <div className="text-[#f7eedf] bg-black pt-6 pb-10 font-times text-sm h-full overflow-y-auto">
      {/* Back Button */}
       <div className="flex flex-col items-center text-center mb-6">
        <span className="text-[#ab965d] text-[6px] tracking-[0.25em] uppercase leading-tight mb-1">
          FAMILY OWNED SINCE 1905
        </span>
        <img
          src="/img/boars-head-logo-full.png"
          alt="Boar's Head"
          className="w-[150px] object-contain mb-2"
        />
        
      </div>
      <button
        onClick={onBack}
        className="text-xs uppercase font-semibold mb-6 block hover:underline"
        aria-label="Go back to main menu"
      >
        &lt; Back
      </button>

      {/* Our Brand Section */}
      <div className="mb-10">
        <h3 className="uppercase text-[#ab965d] text-xs mb-4 font-semibold tracking-wider">
          Our Brand
        </h3>
        <ul className="space-y-3">
          <li><a href="/our-story" className="hover:underline block">Our Story</a></li>
          <li><a href="/counter-culture" className="hover:underline block">Counter Culture</a></li>
          <li><a href="/where-to-buy" className="hover:underline block">Where to Buy</a></li>
          <li><a href="/faqs" className="hover:underline block">FAQs</a></li>
          <li><a href="/foodservice" className="hover:underline block">Foodservice</a></li>
        </ul>
      </div>

      {/* Connect Section */}
      <div className="mb-6">
        <h3 className="uppercase text-[#ab965d] text-xs mb-4 font-semibold tracking-wider">
          Connect
        </h3>
        <ul className="space-y-2 mb-4">
          <li><a href="/contact-us" className="hover:underline block">Contact Us</a></li>
          <li><a href="/newsletter" className="hover:underline block">Dish Worthy, Newsletter</a></li>
        </ul>

        {/* Social Icons using your code */}
        <div className="flex items-center space-x-4 text-[#ab965d] text-[25px] mb-3">
          <i className="fab fa-facebook-f" />
          <i className="fab fa-instagram" />
          <i className="fab fa-youtube" />
          <i className="fab fa-pinterest-p" />
          <i className="fab fa-x-twitter" />
          <i className="fab fa-tiktok" />
        </div>
      </div>
    </div>
  );
};

export default MobileOurBrand;

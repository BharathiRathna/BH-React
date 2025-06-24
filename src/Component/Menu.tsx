// components/Menu.tsx
import React from "react";

interface MenuProps {
  showMobileMenu: boolean;
  setShowMobileMenu: (val: boolean) => void;
  setShowMap: (val: boolean) => void;
  setShowSearch: (val: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({
  showMobileMenu,
  setShowMobileMenu,
  setShowMap,
  setShowSearch,
}) => {
  if (!showMobileMenu) return null;

  const menuItems = [
    "Products",
    "Our Brand",
    "Recipes",
    "Nutrition",
    "Food Safety",
    "Careers",
  ];

  return (
    <div className="fixed inset-0 bg-black text-[#f7eedf] z-50 flex flex-col p-6 overflow-y-auto font-montserrat">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        {/* Close Button */}
        <button
          onClick={() => setShowMobileMenu(false)}
          aria-label="Close Menu"
          className="text-2xl font-normal text-[#f7eedf] rounded-full w-8 h-8 flex items-center justify-center bg-[#1a1a1a]"
        >
          &times;
        </button>

        {/* Logo + Tagline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-[#ab965d] text-[6px] tracking-[0.25em] uppercase leading-tight mb-1">
            FAMILY OWNED SINCE 1905
          </span>
          <img
            src="/img/boars-head-logo-full.png"
            alt="Boar's Head"
            className="w-[150px] object-contain"
          />
        </div>

        {/* Map & Search Icons */}
        <div className="flex items-center space-x-4 text-sm">
          <button onClick={() => setShowMap(true)} aria-label="Find Locations">
            <i className="fas fa-map-marker-alt" />
          </button>
          <button onClick={() => setShowSearch(true)} aria-label="Search">
            <i className="fas fa-search" />
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <ul className="space-y-8 text-lm font-semibold mb-10">
        {menuItems.map((label, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center pb-1 border-b border-transparent"
          >
            <p className="hover:underline uppercase font-montserrat">{label}</p>
            {idx < menuItems.length - 2 && (
              <i className="fas fa-chevron-right text-xs" />
            )}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="mt-auto pt-6">
        <div
          className="text-[#ab965d] text-[15px] uppercase font-semibold tracking-[0.25em] mb-2"
          style={{ fontFamily: '"Optima", "serif"' }}
        >
          Contact Us
        </div>

        <p
          className="text-[17px] leading-[1.5] text-[#f7eedf] mb-2"
          style={{ fontFamily: '"Georgia", "Times New Roman", serif' }}
        >
          Please reach out Monday through <br />
          Friday, from 8 a.m. to 5 p.m. ET.
        </p>

        <p className="text-sm font-bold text-[#ab965d] mb-7 mt-4">
          (800) 352-6277
        </p>

        {/* Social Icons */}
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

export default Menu;

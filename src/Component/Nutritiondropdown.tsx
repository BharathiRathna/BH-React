import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const nutritionCategories = [
  "American Heart Association®",
  "Gluten Free",
  "Lower Sodium",
  "Sugar Free",
  "Suitable for a Vegetarian Diet",
  "Milk Free & Lactose Free",
];

const NutritionDropdown: React.FC = () => {
  const [nutritionOpen, setNutritionOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeAll = () => setNutritionOpen(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeAll();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (item: string) => {
    console.log(`Selected: ${item}`);
    setNutritionOpen(false);
  };

  return (
    <div className="relative font-[Times_New_Roman,serif]" ref={dropdownRef}>
      <button
        type="button"
        onMouseEnter={() => setNutritionOpen(true)}
        className="hover:underline uppercase text-sm tracking-wide bg-transparent border-0 p-0 cursor-pointer  font-['Montserrat']"
      >
        <p className="font-montserrat">Nutrition</p>
      </button>

      {nutritionOpen && (
        <div
          className="fixed top-[85px] left-0 w-full bg-black border-t border-b border-[#bbae96] text-[#f7eedf] shadow-lg z-50"
          onMouseEnter={() => setNutritionOpen(true)}
          onMouseLeave={() => setNutritionOpen(false)}
        >
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Side - Categories and Links */}
            <div className="lg:col-span-2 flex flex-col justify-between">
              <div>
                <h3 className="uppercase text-[#ab965d] text-sm font-semibold mb-6">
                  Categories
                </h3>
                <div className="grid grid-cols-2 gap-y-3 gap-x-10 text-lm">
                  {nutritionCategories.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleItemClick(item)}
                      className="text-left transition-all duration-300 ease-in-out hover:translate-x-1 hover:underline"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative overflow-hidden group w-full max-w-[380px] h-[240px] shadow-md">
              <img
                src="/img/receipes/card-151.jpg"
                alt="Quality Promise"
                className="w-full h-full object-cover grayscale transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
                <h4 className="text-[#ab965d] font-semibold text-sm uppercase mb-2 tracking-wider">
                  Our Quality Promise
                </h4>
                <p className="text-white text-lg font-medium leading-snug">
                  Made to Higher Standards
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Link aligned left */}
          <div className="max-w-7xl mx-auto px-6 pb-6">
            <motion.a
              href="/nutrition"
              className="text-xs uppercase font-bold tracking-wider inline-flex items-center gap-1"
              whileHover={{ x: 4 }} 
              transition={{ type: "spring", stiffness: 600, damping: 20 }}
            >
              Nutrition →
            </motion.a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NutritionDropdown;

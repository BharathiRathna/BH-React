


import React, { useEffect, useRef, useState } from "react";

const RecipesDropdown: React.FC = () => {
  const [recipesOpen, setRecipesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeAll = () => setRecipesOpen(false);

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

  return (
    <div
      className="relative"
      ref={dropdownRef}
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      <button
        type="button"
        onMouseEnter={() => setRecipesOpen(true)}
        className="hover:underline uppercase font-['EB_Garamond'] text-sm tracking-wide bg-transparent border-0 p-0 cursor-pointer"
      >
        <p className="font-montserrat">Recipes</p>
      </button>

      {recipesOpen && (
        <div
          className="fixed top-[100px] left-0 w-full bg-black text-[#f7eedf] border-y border-[#bbae96] shadow-xl z-50"
          onMouseEnter={() => setRecipesOpen(true)}
          onMouseLeave={() => setRecipesOpen(false)}
        >
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="grid grid-cols-2 gap-8">
              {/* Types */}
              <div>
                <h4 className="uppercase text-lm text-[#ab965d] font-bold mb-3 tracking-wide">
                  Types
                </h4>
                <ul className="space-y-2 text-lm">
                  {[
                    "Sandwiches",
                    "Soups & Salads",
                    "Appetizers",
                    "Main Dishes",
                    "Sides & Snacks",
                    "Desserts",
                  ].map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        className="hover:underline hover:translate-x-1 transition-all bg-transparent border-0 p-0 cursor-pointer text-left duration-200 ease-in-out"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a
                    href="/recipes"
                    className="text-xs uppercase font-bold tracking-wider hover:underline"
                  >
                    All Recipes →
                  </a>
                </div>
              </div>

              {/* Guides */}
              <div>
                <h4 className="uppercase text-lm text-[#ab965d] font-bold mb-3 tracking-wide">
                  Guides
                </h4>
                <ul className="space-y-2 text-lm">
                  <li>
                    <button
                      type="button"
                      className="hover:underline hover:translate-x-1 transition-all bg-transparent border-0 p-0 cursor-pointer text-left duration-200 ease-in-out"
                    >
                      How 2 Charcuterie.
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="hover:underline hover:translate-x-1 transition-all bg-transparent border-0 p-0 cursor-pointer text-left duration-200 ease-in-out"
                    >
                      Counter Culture™ Guide to the Deli
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Cards */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-6">
              {[
                {
                  src: "/img/receipes/card-149.jpg",
                  title: "Hummus Duo & Charcuterie Board",
                },
                {
                  src: "/img/receipes/card-150.jpg",
                  title: "Prosciutto, French Brie & Seasonal Fruit Skewers",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden rounded-lg cursor-pointer group"
                >
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-xs text-[#ab965d] uppercase font-bold">
                      Featured
                    </p>
                    <h5 className="text-sm mt-1">{card.title}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipesDropdown;

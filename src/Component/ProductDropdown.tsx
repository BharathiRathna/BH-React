import React, { useEffect, useRef, useState } from "react";

const productCollections = [
  "Turkey",
  "Ham",
  "Beef",
  "Chicken",
  "Premium Deli Cheese",
  "Specialty Cheese",
  "Charcuterie & Other Delicacies",
  "Hummus, Dips & Spreads",
  "Franks, Sausages & More",
  "Bacon",
  "Olives, Pickles & Condiments",
  "Pre-Sliced Meats & Cheeses",
];

const specialtyCollections = [
  "All Natural*",
  "Bold",
  "Breakfast",
  "Dinner",
  "Grilling",
  "Hummus",
  "Snacking",
];

const ProductDropdown: React.FC = () => {
  const [productOpen, setProductOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeAll = () => setProductOpen(false);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeAll();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (item: string) => {
    console.log(`Selected: ${item}`);
    setProductOpen(false);
  };

  return (
    <div
      className="relative"
      ref={dropdownRef}
      style={{ fontFamily: '"Times New Roman", serif' }}
    >
      <button
        type="button"
        onMouseEnter={() => setProductOpen(true)}
        className="hover:underline uppercase text-sm tracking-wide bg-transparent border-0 p-0 cursor-pointer font-['Montserrat']"
      >
        <p className="font-montserrat">Products</p>
      </button>

      {productOpen && (
        <div
          className="fixed top-[80px] sm:top-[100px] lg:top-[120px] left-0 w-full bg-black border-t border-b border-[#bbae96] text-[#f7eedf] shadow-lg z-50"
          onMouseEnter={() => setProductOpen(true)}
          onMouseLeave={() => setProductOpen(false)}
          style={{ fontFamily: '"Times New Roman", serif' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            {/* Mobile */}
            <div className="block sm:hidden">
              <div className="space-y-6">
                <div>
                  <h3 className="uppercase text-[#ab965d] text-xs mb-3 font-semibold">
                    Product Collections
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {productCollections.map((item, index) => (
                      <div
                        key={index}
                        className="hover:underline cursor-pointer hover:text-[#e9e7e3] transition-colors py-2 px-3 rounded hover:bg-[#ab965d]/10 text-xs"
                        onClick={() => handleItemClick(item)}
                      >
                        <a
                          href={`/products/${item
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block w-full h-full"
                        >
                          {item}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="uppercase text-[#ab965d] text-xs mb-3 font-semibold">
                    Specialty Collections
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {specialtyCollections.map((item, index) => (
                      <div
                        key={index}
                        className="hover:underline cursor-pointer hover:text-[#ab965d] transition-colors py-2 px-3 rounded hover:bg-[#ab965d]/10 text-xs"
                        onClick={() => handleItemClick(item)}
                      >
                        <button
                          type="button"
                          className="block w-full h-full text-left"
                        >
                          {item}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="relative overflow-hidden rounded-none cursor-pointer group">
                    <img
                      src="/img/receipes/card-1.jpg"
                      alt="Featured Product"
                      className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                      <h4 className="text-[#ab965d] font-semibold text-xs">
                        FEATURED
                      </h4>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-none cursor-pointer group">
                    <img
                      src="/img/receipes/card-5.jpg"
                      alt="New Arrival"
                      className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                      <h4 className="text-[#ab965d] font-semibold text-xs">
                        New
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablet */}
            <div className="hidden sm:block lg:hidden">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <h3 className="uppercase text-[#ab965d] text-sm mb-4 font-semibold">
                    Product Collections
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {productCollections.map((item, index) => (
                      <li
                        key={index}
                        className="hover:underline cursor-pointer hover:text-[#ab965d] transition-colors py-1 px-2 rounded hover:bg-[#ab965d]/10"
                      >
                        <button
                          type="button"
                          className="block w-full h-full text-left"
                          onClick={() => handleItemClick(item)}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="uppercase text-[#ab965d] text-sm mb-4 font-semibold">
                    Specialty Collections
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {specialtyCollections.map((item, index) => (
                      <li
                        key={index}
                        className="hover:underline cursor-pointer hover:text-[#ab965d] transition-colors py-1 px-2 rounded hover:bg-[#ab965d]/10"
                      >
                        <button
                          type="button"
                          className="block w-full h-full text-left"
                          onClick={() => handleItemClick(item)}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-lg cursor-pointer group">
                    <img
                      src="/img/receipes/card-1.jpg"
                      alt="Featured Product"
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <h4 className="text-[#ab965d] font-semibold text-sm">
                        FEATURED
                      </h4>
                      <p className="text-white text-xs">
                        Charcuterie & Other Delicacies
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-lg cursor-pointer group">
                    <img
                      src="/img/receipes/card-5.jpg"
                      alt="New Arrival"
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <h4 className="text-[#ab965d] font-semibold text-sm">
                        New
                      </h4>
                      <p className="text-white text-xs">
                        Hand-Selected Carefully Crafted Olive Collection
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <h3 className="uppercase text-[#ab965d] text-lm mb-4 font-semibold tracking-wider">
                    Product Collections
                  </h3>
                  <ul className="space-y-2 text-lm leading-snug">
                    {productCollections.map((item, index) => (
                      <li
                        key={index}
                        className="cursor-pointer py-1 px-2 rounded transition-transform duration-200 ease-out hover:translate-x-1"
                      >
                        <button
                          type="button"
                          className="block w-full h-full text-left hover:underline transition-all"
                          onClick={() => handleItemClick(item)}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <>
                  <h3 className="uppercase text-[#ab965d] text-lm mb-4 font-semibold tracking-wider">
                    Specialty Collections
                  </h3>
                  </>
                  <ul className="space-y-2 text-lm leading-snug">
                    {specialtyCollections.map((item, index) => (
                      <li
                        key={index}
                        className="cursor-pointer py-1 px-2 rounded transition-transform duration-200 ease-out hover:translate-x-1"
                      >
                        <button
                          type="button"
                          className="block w-full h-full text-left hover:underline transition-all"
                          onClick={() => handleItemClick(item)}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-span-2 grid grid-cols-2 gap-4">
                  <div className="relative overflow-hidden rounded-lg cursor-pointer group">
                    <img
                      src="/img/receipes/card-148.jpg"
                      alt="Featured Product"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h4 className="text-[#ab965d] font-semibold text-xs uppercase tracking-widest">
                        FEATURED
                      </h4>
                      <p className="text-white text-sm mt-1">
                        Charcuterie & Other <br /> Delicacies
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-lg cursor-pointer group">
                    <video
                      src="https://player.vimeo.com/progressive_redirect/playback/1088787057/rendition/540p/file.mp4?loc=external&signature=2b558b7571f75c47cc00cb501cfbaf43da3f5eeb88d30592a11aa80e60ad6169"
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    ></video>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h4 className="text-[#ab965d] font-semibold text-xs uppercase tracking-widest">
                        New
                      </h4>
                      <p className="text-white text-sm mt-1">
                        Hand-Selected Carefully Crafted Olive Collection
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDropdown;

import React from "react";

const MobileProductMenu = ({ onBack }: { onBack: () => void }) => {
  const productCollections = [
    "Turkey",
    "Ham",
    "Beef",
    "Chicken",
    "Bologna & Terrines",
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
        className="text-xs uppercase font-semibold mb-6 block"
      >
        &lt; Back
      </button>

      {/* Product Collections */}
      <div className="mb-8">
        <h3 className="uppercase text-[#ab965d] text-xs mb-4 font-semibold tracking-wider">
          Product Collections
        </h3>
        <ul className="space-y-2">
          {productCollections.map((item, index) => (
            <li key={index}>
              <a
                href={`/products/${item.toLowerCase().replace(/\s+/g, "-").replace(/[*,&]/g, "").replace(/-+/g, "-")}`}
                className="font-semibold hover:underline block"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Specialty Collections */}
      <div className="mb-6">
        <h3 className="uppercase text-[#ab965d] text-xs mb-4 font-semibold tracking-wider">
          Specialty Collections
        </h3>
        <ul className="space-y-2">
          {specialtyCollections.map((item, index) => (
            <li key={index}>
              <a
                href={`/products/${item.toLowerCase().replace(/\s+/g, "-").replace(/[*,&]/g, "").replace(/-+/g, "-")}`}
                className="font-semibold hover:underline block"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* All Products Button */}
      <div className="mb-4">
        <a
          href="/products"
          className="uppercase font-semibold text-[#f7eedf] text-sm inline-flex items-center space-x-2 hover:underline"
        >
          <span>All Products</span>
          <i className="fas fa-arrow-right text-xs"></i>
        </a>
      </div>

      {/* Footnote */}
      <p className="text-xs mt-2 italic">
        *No artificial ingredients. Minimally processed.
      </p>
    </div>
  );
};

export default MobileProductMenu;

import React from "react";

interface MobileRecipeProps {
  onBack: () => void;
}

const MobileRecipe: React.FC<MobileRecipeProps> = ({ onBack }) => {
  return (
    <div className="text-[#f7eedf] bg-black h-full w-full font-serif px-4 pb-10">
      {/* Back Button */}
      

      {/* Logo & Tagline */}
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
        type="button"
        onClick={onBack}
        className="text-sm uppercase flex items-center mb-4 font-semibold"
      >
        <span className="mr-2">&lt;</span> Back
      </button>

      {/* Types Section */}
      <div className="mb-8">
        <h3 className="text-[10px] uppercase font-semibold text-[#ab965d] tracking-widest mb-3">
          Types
        </h3>
        <ul className="space-y-2 text-[16px]">
          <li><a href="/recipes/sandwiches" className="hover:underline">Sandwiches</a></li>
          <li><a href="/recipes/soups-salads" className="hover:underline">Soups & Salads</a></li>
          <li><a href="/recipes/appetizers" className="hover:underline">Appetizers</a></li>
          <li><a href="/recipes/main-dishes" className="hover:underline">Main Dishes</a></li>
          <li><a href="/recipes/sides-snacks" className="hover:underline">Sides & Snacks</a></li>
          <li><a href="/recipes/desserts" className="hover:underline">Desserts</a></li>
        </ul>
      </div>

      {/* Guides Section */}
      <div className="mb-8">
        <h3 className="text-[10px] uppercase font-semibold text-[#ab965d] tracking-widest mb-3">
          Guides
        </h3>
        <ul className="space-y-2 text-[16px]">
          <li><a href="/guides/how-to-charcuterie" className="hover:underline">How 2 Charcuterie</a></li>
          <li><a href="/guides/deli-guide" className="hover:underline">Counter Culture: Guide to the Deli</a></li>
        </ul>
      </div>

      {/* All Recipes CTA */}
      <div>
        <a
          href="/recipes"
          className="text-[11px] uppercase font-semibold tracking-widest hover:underline"
        >
          All Recipes &rarr;
        </a>
      </div>
    </div>
  );
};

export default MobileRecipe;

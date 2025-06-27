import React from "react";

interface MobileNutritionProps {
  onBack: () => void;
}

const MobileNutrition: React.FC<MobileNutritionProps> = ({ onBack }) => {
  return (
    <div className="text-[#f7eedf] font-serif py-4">
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
        className="uppercase text-xs text-[#f7eedf] mb-4 tracking-wide hover:underline"
      >
        &lt; Back
      </button>

      <h2 className="uppercase text-xs font-bold text-[#ab965d] mb-4 tracking-widest">
        Categories
      </h2>

      <ul className="space-y-3 text-sm">
        <li>
          <a href="/nutrition/american-heart" className="hover:underline">
            American Heart Association®
          </a>
        </li>
        <li>
          <a href="/nutrition/gluten-free" className="hover:underline">
            Gluten Free
          </a>
        </li>
        <li>
          <a href="/nutrition/lower-sodium" className="hover:underline">
            Lower Sodium
          </a>
        </li>
        <li>
          <a href="/nutrition/sugar-free" className="hover:underline">
            Sugar Free
          </a>
        </li>
        <li>
          <a href="/nutrition/vegetarian" className="hover:underline">
            Suitable for a Vegetarian Diet
          </a>
        </li>
        <li>
          <a href="/nutrition/milk-free" className="hover:underline">
            Milk Free & Lactose Free
          </a>
        </li>
      </ul>

      <div className="mt-8">
        <a
          href="/nutrition"
          className="text-xs uppercase font-bold tracking-widest hover:underline inline-flex items-center"
        >
          Nutrition <span className="ml-2">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default MobileNutrition;

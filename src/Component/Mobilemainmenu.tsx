import React from "react";

const MobileMainMenu = ({
  onProductsClick,
}: {
  onProductsClick: () => void;
}) => {
  const menuItems = [
    "Products",
    "Our Brand",
    "Recipes",
    "Nutrition",
    "Food Safety",
    "Careers",
  ];

  return (
    <div className="text-[#f7eedf] bg-black px-4 py-6 font-times">
      <ul className="space-y-8 text-lm font-semibold mb-10">
        {menuItems.map((label, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center pb-1 border-b border-transparent"
          >
            <button
              className="hover:underline uppercase font-montserrat text-left w-full"
              onClick={() => {
                if (label === "Products") onProductsClick();
              }}
            >
              {label}
            </button>
            {idx < menuItems.length - 2 && (
              <i className="fas fa-chevron-right text-xs" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMainMenu;

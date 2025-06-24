import { useState } from "react";
const mealOptions = [
  "Sandwiches",
  "Soups & Salads",
  "Appetizers",
  "Main Dishes",
  "Sides & Snacks",
  "Desserts",
];

const productOptions = [
  "Turkey",
  "Ham",
  "Chicken",
  "Bacon",
  "Franks & Sausages",
  "Hummus",
  "Charcuterie",
];

const DropDowns = () => {
  const [mealOpen, setMealOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<any>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const toggleMeal = () => {
    setMealOpen(!mealOpen);
    if (productOpen) setProductOpen(false);
  };

  const toggleProduct = () => {
    setProductOpen(!productOpen);
    if (mealOpen) setMealOpen(false);
  };

  const closeAll = () => {
    setMealOpen(false);
    setProductOpen(false);
  };
  return (
    <div className="container px-[clamp(7.03125rem,9.375vw,9.8125rem)]">
      <div className="flex justify-start space-x-4 sticky" onClick={closeAll}>
        <div className="relative inline-block">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleMeal();
            }}
            className="flex justify-between items-center w-52 h-11 border border-white bg-transparent text-xs text-white px-4 py-2 uppercase appearance-none ring-inset relative"
          >
            <span
              className={`absolute left-0 top-0 h-full bg-[#a6192e] z-0 transition-all duration-300 ${
                selectedMeal ? "w-full" : "w-0"
              }`}
            ></span>
            <span className="relative z-10 whitespace-nowrap">
              {selectedMeal || "Meal Types"}
            </span>
            <div className="relative z-10 flex items-center space-x-2">
              {!selectedMeal && !mealOpen ? (
                <svg className="size-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              )}
              {selectedMeal && (
                <svg
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMeal(null);
                    setMealOpen(true);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-white cursor-pointer size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>
          </button>
          {mealOpen && (
            <div className="fixed top-full left-0 right-0 z-50 w-full bg-black bg-cover bg-center bg-no-repeat shadow-xl text-white text-xl">
              {mealOptions.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setSelectedMeal(item);
                    closeAll();
                  }}
                  className="block px-4 py-2 text-sm text-white hover:bg-black text-left w-full"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative inline-block">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleProduct();
            }}
            className="flex justify-between items-center w-52 h-11 border border-white bg-transparent text-xs text-white px-4 py-2 uppercase appearance-none ring-inset relative"
          >
            <span
              className={`absolute left-0 top-0 h-full bg-[#a6192e] z-0 transition-all duration-300 ${
                selectedProduct ? "w-full" : "w-0"
              }`}
            ></span>
            <span className="relative z-10 whitespace-nowrap">
              {selectedProduct || "Product Type"}
            </span>
            <div className="relative z-10 flex items-center space-x-2">
              {!selectedProduct && !productOpen ? (
                <svg className="size-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              )}
              {selectedProduct && (
                <svg
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(null);
                    setProductOpen(true);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="text-white cursor-pointer size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>
          </button>
          {productOpen && (
            <div className="absolute right-0 z-20 w-52 bg-cover bg-center bg-no-repeat ring-1 shadow-lg ring-black/5 text-white text-xl">
              {productOptions.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setSelectedProduct(item);
                    closeAll();
                  }}
                  className="block px-4 py-2 text-sm text-white hover:bg-black text-left w-full"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search By Product Name"
              className="w-80 h-11 border border-white placeholder:text-xs bg-transparent text-white px-4 py-2 uppercase placeholder:text-white appearance-none"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
          </div>

          <button className="bg-[#ab965d] text-black text-sm font-semibold px-6 py-2 uppercase hover:bg-[#9b884c] transition-colors duration-300">
            Add New Recipe
          </button>
        </div>
      </div>

      <div
        id="card-container"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10"
      ></div>
    </div>
  );
};

export default DropDowns;

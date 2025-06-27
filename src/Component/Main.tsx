import React, { useState } from "react";
import { Card } from "./Cards";

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

export default function SandwichRecipesPage() {
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

  const data = [
    {
      img: "/img/receipes/card-1.jpg",
      title: "Sandwich",
    },
    {
      img: "/img/receipes/card-2.jpg",
      title: "Burger",
    },
    {
      img: "/img/receipes/card-5.jpg",
      title: " Cream Sandwich ",
    },
  ];

  return (
    <main>
      <div className="bg-contain bg-no-repeat min-h-screen overflow-y-auto bg-[image:var(--map-all-product)]">
        <div className="pt-64">
          <div
            className="w-3/4 lg:w-1/2 text-center mx-auto"
            id="content-block"
          >
            <p className="text-[#ab965d] font-bold tracking-widest leading-4 mb-4 text-center">
              <span className="text-xl">RECIPES</span>
            </p>
            <h2 className="font-normal text-4xl mb-4 text-center">
              Sandwiches
            </h2>
            <p className="px-6 lg:px-20 text-xl text-center ">
              Enjoy timeless classics, gourmet takes, and more with our sandwich
              recipes. Of course, they’re all made with the essential ingredient
              of any great sandwich: Boar’s Head.
            </p>
          </div>

          <div className="container mt-20 px-[clamp(7.03125rem,9.375vw,9.8125rem)]">
            <div className="flex justify-start space-x-4" onClick={closeAll}>
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
                      <svg
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
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
                  <div className="absolute right-0 z-20 w-52  bg-cover bg-center bg-no-repeat ring-1 shadow-lg ring-black/5 text-white text-xl">
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
                      <svg
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
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
          <div className="bg-black w-[100%] h-[350px]  flex items-center">
            <div className="mt-10 ">
              {/* <DropDowns/> */}
              <div className="flex flex-row gap-7 justify-around w-full p-2 ">
                {data.map((item, index) => (
                  <Card key={index} img={item.img} title={item.title} />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-cover bg-[image:var(--bg-brick-desktop)] bg-center bg-no-repeat h-[466.2px] w-full p-16">
            <div className="flex items-center h-full">
              <div className="w-full flex flex-col mx-auto text-center">
                <img
                  src="/img/filigree-detail-2.png"
                  alt="img"
                  className="mx-auto w-8 h-6"
                />

                <div className="uppercase text-[#ab965d] text-xl mt-4">
                  delicious starts at the Deli{" "}
                  <span className="text-[6px] align-baseline">tm</span>
                </div>
                <p className="text-3xl text-[#f7eedf] mt-4">
                  Freshly sliced by hand for uncompromising flavor
                </p>
                <div className="flex justify-center items-center mt-4 space-x-6 ">
                  {[
                    {
                      title: "Where to buy",
                      href: "",
                      label: "find a deli",
                    },
                    {
                      title: "Counter culture",
                      href: "",
                      label: "guide to the deli",
                    },
                  ].map((link, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col justify-center items-center w-96 h-32 bg-no-repeat  bg-center bg-contain"
                      style={{
                        backgroundImage: "url('/img/frame-border.png')",
                      }}
                    >
                      <span className="text-[#ab965d] font-bold uppercase text-sm tracking-[0.08em] leading-[0.81] mb-1">
                        {link.title}{" "}
                        <span className="text-[6px] align-baseline">tm</span>
                      </span>
                      <a
                        href={link.href}
                        className="group mt-3 flex uppercase text-[#f7eedf] text-sm font-bold overflow-hidden pb-1 relative w-fit"
                      >
                        <span className="opacity-0 group-hover:opacity-100 transition-all duration-100 absolute">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                            />
                          </svg>
                        </span>
                        <span className="px-2 transition-all duration-100 group-hover:translate-x-3 text-xs font-semibold">
                          {link.label}
                        </span>
                        <span className="opacity-100 group-hover:opacity-0 transition-all duration-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-px bg-[#f7eedf] transform origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// import React, { useEffect, useState } from "react";
// import MainSection from "./Main";
// import ProductDropdown from "./ProductDropdown";
// import OurBrandDropdown from "./OurBrandDropdown";
// import RecipesDropdown from "./RecipesDropdown";
// import NutritionDropdown from "./Nutritiondropdown";
// import Footer from "./Footer";
// import SearchPage from "./SearchPage";
// import MapPage from "./Mappage";

// const RecipeForm: React.FC = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [showMobileMenu, setShowMobileMenu] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [showMap, setShowMap] = useState(false);

//   useEffect(() => {
//     fetch("http://localhost:1337/api/custom-boreshead-receipes?populate=*", {
//       headers: {
//         Authorization: "Bearer YOUR_API_TOKEN_HERE",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         const items = Array.isArray(data) ? data : data?.data || [];
//         console.log("Fetched items (not used):", items);
//       })
//       .catch((err) => {
//         console.error("Failed to fetch cards:", err);
//       });
//   }, []);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <div className="font-serif bg-black text-[#f7eedf] min-h-screen">
//       {/* Header */}
//       <header className="fixed w-full bg-black z-50">
//         <div className="h-2 bg-gradient-to-r from-[#730010] via-[#b80d31] to-[#730010]"></div>
//         <header className="bg-black text-[#f7eedf] font-sans w-full">
//           <div className="text-[#ab965d] text-[11px] mt-2 text-center pr-14 mx-auto mb-1 font-['Minion_Pro']">
//             <span className="font-bold tracking-[0.188rem]">
//               FAMILY OWNED SINCE
//             </span>
//             <span className="font-medium tracking-[0.188rem] pl-1">1905</span>
//           </div>

//           <div className="w-full">
//             <nav className="flex items-center justify-center flex-wrap gap-6 w-full text-[17px] font-semibold tracking-wider uppercase relative z-50">
//               <button
//                 className="md:hidden block"
//                 aria-label="More Options"
//                 onClick={() => setShowMobileMenu(true)}
//               >
//                 <i className="fas fa-bars text-xl text-[#bbae96]"></i>
//               </button>

//               <ProductDropdown />
//               <OurBrandDropdown />
//               <RecipesDropdown />

//               <a href="/" aria-label="Home">
//                 <img
//                   src={
//                     scrolled
//                       ? "/img/boars-head-medallion-gold.png"
//                       : "/img/boars-head-logo-full.png"
//                   }
//                   alt="Boar's Head Logo"
//                   className="w-[260px] h-12 object-contain transition-opacity duration-300 ease-in-out"
//                 />
//               </a>

//               <NutritionDropdown />
//               <a
//                 href="/food-safety"
//                 className="hover:underline uppercase font-['EB_Garamond'] text-sm tracking-wide bg-transparent border-0 p-0 cursor-pointer"
//               >
//                 <p className="font-montserrat">Food Safety</p>
//               </a>
//               <a
//                 href="/careers"
//                 className="hover:underline uppercase font-['EB_Garamond'] text-sm tracking-wide bg-transparent border-0 p-0 cursor-pointer"
//               >
//                 <p className="font-montserrat">Careers</p>
//               </a>

//               <button
//                 onClick={() => setShowMap(true)}
//                 aria-label="Find Locations"
//                 className="text-[#bbae96]"
//               >
//                 <i className="fas fa-map-marker-alt text-sm"></i>
//               </button>

//               <button
//                 type="button"
//                 aria-label="Search"
//                 className="text-[#bbae96]"
//                 onClick={() => setShowSearch(true)}
//               >
//                 <i className="fas fa-search text-sm"></i>
//               </button>
//             </nav>

//             {/* Conditionally render SearchPage */}
//             {showSearch && <SearchPage onClose={() => setShowSearch(false)} />}

//             {/* Conditionally render MapPage */}
//             {showMap && <MapPage onClose={() => setShowMap(false)} />}
//           </div>
//         </header>
//       </header>

//       {/* Mobile Menu */}
//       {/* {showMobileMenu && (
//         <div className="fixed inset-0 bg-black text-[#f7eedf] z-50 flex flex-col p-6 overflow-y-auto">
//           <button
//             className="self-start text-2xl mb-6"
//             onClick={() => setShowMobileMenu(false)}
//             aria-label="Close Menu"
//           >
//             &times;
//           </button>
//         </div>
//       )} */}

//       {showMobileMenu && (
//         <div className="fixed inset-0 bg-black text-[#f7eedf] z-50 flex flex-col p-6 overflow-y-auto font-montserrat">
//           {/* HEADER: Close, Logo, Icons */}
//           <div className="flex items-center justify-between mb-6">
//             {/* Close Button */}
//             <button
//               onClick={() => setShowMobileMenu(false)}
//               aria-label="Close Menu"
//               className="text-2xl font-normal text-[#f7eedf] rounded-full w-8 h-8 flex items-center justify-center"
//             >
//               &times;
//             </button>

//             {/* Logo & Tagline Centered */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
//               <span className="text-[#ab965d] text-[6px] tracking-[0.25em] uppercase leading-tight mb-1">
//                 FAMILY OWNED SINCE 1905
//               </span>
//               <img
//                 src="/img/boars-head-logo-full.png"
//                 alt="Boar's Head"
//                 className="w-[150px] object-contain"
//               />
//             </div>

//             {/* Map + Search Icons */}
//             <div className="flex items-center space-x-4  text-sm">
//               <button
//                 onClick={() => setShowMap(true)}
//                 aria-label="Find Locations"
//               >
//                 <i className="fas fa-map-marker-alt" />
//               </button>
//               <button onClick={() => setShowSearch(true)} aria-label="Search">
//                 <i className="fas fa-search" />
//               </button>
//             </div>
//           </div>

//           {/* MENU LIST */}
//           <ul className="space-y-8 text-lm font-semibold mb-10">
//             {[
//               "Products",
//               "Our Brand",
//               "Recipes",
//               "Nutrition",
//               "Food Safety",
//               "Careers",
//             ].map((label, idx, arr) => (
//               <li
//                 key={idx}
//                 className="flex justify-between items-center pb-1 border-b border-transparent"
//               >
//                 <p className="hover:underline uppercase font-montserrat">
//                   {label}
//                 </p>

//                 {idx < arr.length - 2 && (
//                   <i className="fas fa-chevron-right text-xs" />
//                 )}
//               </li>
//             ))}
//           </ul>
//           <></>

//           {/* FOOTER */}
//           <div className="mt-auto pt-6">
//             <div
//               className="text-[#ab965d] text-[15px] uppercase font-semibold tracking-[0.25em] mb-2"
//               style={{ fontFamily: '"Optima", "serif"' }}
//             >
//               Contact Us
//             </div>

//             <p
//               className="text-[17px] leading-[1.5] text-[#f7eedf] mb-2"
//               style={{ fontFamily: '"Georgia", "Times New Roman", serif' }}
//             >
//               Please reach out Monday through <br />
//               Friday, from 8 a.m. to 5 p.m. ET.
//             </p>

//             <p className="text-sm font-bold text-[#ab965d] mb-7 mt-4">
//               (800) 352-6277
//             </p>

//             {/* SOCIAL ICONS */}
//             <div className="flex items-center space-x-4 text-[#ab965d] text-[25px] mb-3 ">
//               <i className="fab fa-facebook-f" />
//               <i className="fab fa-instagram" />
//               <i className="fab fa-youtube" />
//               <i className="fab fa-pinterest-p" />
//               <i className="fab fa-x-twitter" />
//               <i className="fab fa-tiktok" />
//             </div>
//           </div>
//         </div>
//       )}

//       <div>
//         <MainSection />
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default RecipeForm;
import React, { useEffect, useState } from "react";
import MainSection from "./Main";
import ProductDropdown from "./ProductDropdown";
import OurBrandDropdown from "./OurBrandDropdown";
import RecipesDropdown from "./RecipesDropdown";
import NutritionDropdown from "./Nutritiondropdown";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import MapPage from "./Mappage";
import MobileProductMenu from "./Mobileproduct";
import MobileOurBrand from "./Mobileourbrand";
import MobileRecipe from "./MobileRecipe";
import MobileNutrition from "./MobileNutrition";

const RecipeForm: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState<null | "products" | "ourBrand" | "recipes" | "nutrition">(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll behavior
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // API fetch (sample only)
  useEffect(() => {
    fetch("http://localhost:1337/api/custom-boreshead-receipes?populate=*", {
      headers: {
        Authorization: "Bearer YOUR_API_TOKEN_HERE",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const items = Array.isArray(data) ? data : data?.data || [];
        console.log("Fetched items (not used):", items);
      })
      .catch((err) => {
        console.error("Failed to fetch cards:", err);
      });
  }, []);

  return (
    <div className="font-serif bg-black text-[#f7eedf] min-h-screen">
      {/* Header */}
      <header className="fixed w-full bg-black z-50">
        <div className="h-2 bg-gradient-to-r from-[#730010] via-[#b80d31] to-[#730010]"></div>
        <div className="text-[#ab965d] text-[11px] mt-2 text-center pr-14 mx-auto mb-1 font-['Minion_Pro']">
          <span className="font-bold tracking-[0.188rem]">FAMILY OWNED SINCE</span>
          <span className="font-medium tracking-[0.188rem] pl-1">1905</span>
        </div>

        <nav className="flex items-center justify-center flex-wrap gap-6 w-full text-[17px] font-semibold tracking-wider uppercase relative z-50">
          <button className="md:hidden block" aria-label="More Options" onClick={() => setShowMobileMenu(true)}>
            <i className="fas fa-bars text-xl text-[#bbae96]"></i>
          </button>

          <ProductDropdown />
          <OurBrandDropdown />
          <RecipesDropdown />

          <a href="/" aria-label="Home">
            <img
              src={scrolled ? "/img/boars-head-medallion-gold.png" : "/img/boars-head-logo-full.png"}
              alt="Boar's Head Logo"
              className="w-[260px] h-12 object-contain transition-opacity duration-300 ease-in-out"
            />
          </a>

          <NutritionDropdown />
          <a href="/food-safety" className="hover:underline uppercase font-['EB_Garamond'] text-sm tracking-wide">
            <p className="font-montserrat">Food Safety</p>
          </a>
          <a href="/careers" className="hover:underline uppercase font-['EB_Garamond'] text-sm tracking-wide">
            <p className="font-montserrat">Careers</p>
          </a>

          <button onClick={() => setShowMap(true)} aria-label="Find Locations" className="text-[#bbae96]">
            <i className="fas fa-map-marker-alt text-sm"></i>
          </button>

          <button onClick={() => setShowSearch(true)} aria-label="Search" className="text-[#bbae96]">
            <i className="fas fa-search text-sm"></i>
          </button>
        </nav>

        {/* Conditional rendering of Search & Map */}
        {showSearch && (
          isMobile ? (
            <div className="fixed inset-0 z-50 bg-black overflow-auto">
              <SearchPage onClose={() => setShowSearch(false)} />
            </div>
          ) : (
            <SearchPage onClose={() => setShowSearch(false)} />
          )
        )}
        {showMap && <MapPage onClose={() => setShowMap(false)} />}
      </header>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-black text-[#f7eedf] z-50 flex flex-col p-6 overflow-y-auto font-montserrat">
          {mobileSubMenu === "products" ? (
            <MobileProductMenu onBack={() => setMobileSubMenu(null)} />
          ) : mobileSubMenu === "ourBrand" ? (
            <MobileOurBrand onBack={() => setMobileSubMenu(null)} />
          ) : mobileSubMenu === "recipes" ? (
            <MobileRecipe onBack={() => setMobileSubMenu(null)} />
          ) : mobileSubMenu === "nutrition" ? (
            <MobileNutrition onBack={() => setMobileSubMenu(null)} />
          ) : (
            <>
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-6">
                <button onClick={() => setShowMobileMenu(false)} aria-label="Close Menu" className="text-2xl font-normal text-[#f7eedf] rounded-full w-8 h-8 flex items-center justify-center">
                  &times;
                </button>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <span className="text-[#ab965d] text-[6px] tracking-[0.25em] uppercase leading-tight mb-1">
                    FAMILY OWNED SINCE 1905
                  </span>
                  <img src="/img/boars-head-logo-full.png" alt="Boar's Head" className="w-[150px] object-contain" />
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <button onClick={() => setShowMap(true)} aria-label="Find Locations">
                    <i className="fas fa-map-marker-alt" />
                  </button>
                  <button onClick={() => setShowSearch(true)} aria-label="Search">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>

              {/* Menu List */}
              <ul className="space-y-8 text-lm font-semibold mb-10">
                <li className="flex justify-between items-center pb-1 border-b border-transparent">
                  <button onClick={() => setMobileSubMenu("products")} className="uppercase hover:underline">
                    Products
                  </button>
                  <i className="fas fa-chevron-right text-xs" />
                </li>
                <li className="flex justify-between items-center pb-1 border-b border-transparent">
                  <button onClick={() => setMobileSubMenu("ourBrand")} className="uppercase hover:underline">
                    Our Brand
                  </button>
                  <i className="fas fa-chevron-right text-xs" />
                </li>
                <li className="flex justify-between items-center pb-1 border-b border-transparent">
                  <button onClick={() => setMobileSubMenu("recipes")} className="uppercase hover:underline">
                    Recipes
                  </button>
                  <i className="fas fa-chevron-right text-xs" />
                </li>
                <li className="flex justify-between items-center pb-1 border-b border-transparent">
                  <button onClick={() => setMobileSubMenu("nutrition")} className="uppercase hover:underline">
                    Nutrition
                  </button>
                  <i className="fas fa-chevron-right text-xs" />
                </li>
                <li>
                  <a href="/food-safety" className="uppercase hover:underline">Food Safety</a>
                </li>
                <li>
                  <a href="/careers" className="uppercase hover:underline">Careers</a>
                </li>
              </ul>

              {/* Footer */}
              <div className="mt-auto pt-6">
                <div className="text-[#ab965d] text-[15px] uppercase font-semibold tracking-[0.25em] mb-2" style={{ fontFamily: '"Optima", "serif"' }}>
                  Contact Us
                </div>
                <p className="text-[17px] leading-[1.5] text-[#f7eedf] mb-2" style={{ fontFamily: '"Georgia", "Times New Roman", serif' }}>
                  Please reach out Monday through <br /> Friday, from 8 a.m. to 5 p.m. ET.
                </p>
                <p className="text-sm font-bold text-[#ab965d] mb-7 mt-4">(800) 352-6277</p>
                <div className="flex items-center space-x-4 text-[#ab965d] text-[25px] mb-3">
                  <i className="fab fa-facebook-f" />
                  <i className="fab fa-instagram" />
                  <i className="fab fa-youtube" />
                  <i className="fab fa-pinterest-p" />
                  <i className="fab fa-x-twitter" />
                  <i className="fab fa-tiktok" />
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <h1></h1>

      {/* Main Section and Footer */}
      <div className="pt-[120px]">
        <MainSection />
      </div>
      <Footer />
    </div>
  );
};

export default RecipeForm;


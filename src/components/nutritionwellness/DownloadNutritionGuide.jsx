import React from 'react';

const DownloadNutritionGuide = () => {
  return (
    <div className="w-full tracking-widest mt-6 font-[minion-pro-display,serif] text-center px-6 lg:px-0 lg:text-left">
      <div className="lg:max-w-6xl lg:mx-36 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content - Left Side */}
          <div className="text-white lg:max-w-xl">
            <h2 className="text-[#ab965d] text-xs lg:text-sm font-bold mb-8">LEARN MORE</h2>
            <h1 className="text-[28px] lg:text-[42px] px-6 lg:px-0 md:text-4xl mb-8 text-[#f7eedf] tracking-[.02em] leading-[1.06]">
              Download Our Nutrition Guide
            </h1>
            <p className="text-sm lg:text-lg font-[minion-pro-display,serif] text-[#f7eedf] mb-8 px-6 lg:px-0 antialiased font-normal lining-nums proportional-nums ">
              Discover nutritional facts and savory recipes for your favorite
              Boar's Head products with this downloadable guide.
            </p>

          <div className='flex items-center justify-center text-center lg:justify-normal'>
            <a className="flex items-start inline-block cursor-pointer text-decoration-none group relative overflow-hidden ">
                        {/* Outer container with white border by default */}
                        <span className="relative p-3 lg:p-4 items-center border border-white text-[#f7eedf] gap-x-2.5 flex z-10 overflow-hidden transition-colors duration-500 group-hover:border-transparent">

                            {/* Sliding red background & border effect */}
                            <span className="absolute inset-0 z-0 transition-transform duration-500 ease-out transform -translate-x-full group-hover:translate-x-0 border border-red-800 bg-red-800"></span>

                            {/* Arrow icon that appears on hover */}
                            <span className="opacity-0 group-hover:opacity-100 absolute left-3 transition-all duration-200 ease-out h-2.5 w-3 z-10">
                            <span className="block h-2.5 w-3 bg-center bg-contain max-w-full align-sub text-[18.889px] text-[#f7eedf]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"
                                stroke="currentColor" className="w-full h-full pointer-events-none overflow-visible block align-middle">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                            </span>

                            {/* Text */}
                            <span className="text-xs pr-1 font-extrabold font-[myriad-pro-semiextended,sans-serif] tracking-[.12em] leading-[1]
                            uppercase transition-all duration-200 ease-out relative group-hover:translate-x-3 z-10">
                            Download Brochure
                            </span>

                            {/* Arrow icon that disappears on hover */}
                            <span className="opacity-100 group-hover:opacity-0 translate-gpu transition-all ease-out duration-200 h-2.5 w-3 z-10">
                            <span className="block h-2.5 w-3 bg-center bg-contain max-w-full align-sub text-[18.889px] text-[#f7eedf]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"
                                stroke="currentColor" className="w-full h-full pointer-events-none overflow-visible block align-middle">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                            </span>

                        </span>
                    </a>
          </div>
            
          </div>

          {/* Image - Right Side */}
          <div className="flex lg:justify-end lg:pr-16 pl-20 lg:pl-0">
            <img
              src="/images/nutrition-wellness/brochure-down.jpg"
              alt="Nutrition Guide"
              className="lg:w-72 w-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadNutritionGuide;

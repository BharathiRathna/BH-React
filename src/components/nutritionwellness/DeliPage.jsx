import React from 'react';

const DeliPage = () => {
  return (
    <div
      className="font-[minion-pro-display,serif] tracking-widest bg-[url('/images/nutrition-wellness/bg-brick-mobile.png')] lg:bg-[url('/images/nutrition-wellness/bg-brick-desktop.png')] bg-cover bg-center text-center text-white py-20 px-4"
    >
      {/* Top Center PNG Image */}
      <div className="flex justify-center mb-6">
        <img
          src="/images/nutrition-wellness/filigree-detail.png"
          alt="Filigree Detail"
          className="w-7 h-auto" // adjust size as needed
        />
      </div>

      <h2 className="text-[#ab965d] text-sm lg:text-lg font-semibold tracking-widest mb-4">
        DELICIOUS STARTS AT THE DELI<sub className='align-sub text-[6px] lg:text-[10px]'>™</sub>
      </h2>
      <h1 className="text-xl lg:text-3xl font-[minion-pro-display,serif] tracking-[.025em] text-[#f7eedf]  mb-10">
        Freshly sliced by hand for uncompromising flavor
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* WHERE TO BUY BUTTON */}
        <div
          className="relative w-80 h-28 lg:w-96 lg:h-32 flex items-center justify-center text-[#ab965d] font-semibold text-lg 
          bg-[url('/images/nutrition-wellness/frame-border.png')] bg-no-repeat bg-center bg-[length:100%_100%]"
        >
          <div className="text-center">
            <div className='lg:text-[17px]'>WHERE TO BUY</div>
            <div className="font-[myriad-pro-semiextended,sans-serif] text-[#f7eedf]  text-xs mt-2 ">
               <a href="#" className="relative inline-flex group/link">
                            <span className="relative flex items-center gap-x-2 text-[#f7eedf]">
                                {/* Left arrow (visible by default) */}
                                <span className='h-2.5 w-3 transition-all duration-200 ease-out opacity-0 group-hover/link:opacity-100'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12" fill="currentColor" className='block w-full h-full'>
                                        <path d="M0 6L12 6" strokeWidth="1.25" stroke="currentColor" />
                                        <path d="M7 11L12 6L7 1" strokeWidth="1.25" stroke="currentColor" />
                                    </svg>
                                </span>

                                {/* Text */}
                                <span className='relative text-xs font-[myriad-pro-semiextended,sans-serif] font-semibold tracking-[.12em] uppercase whitespace-nowrap transition-all duration-200 ease-out group-hover/link:translate-x-1'>
                                    FIND A DELI
                                </span>

                                {/* Right arrow (hidden by default) */}
                                <span className='h-2.5 w-3 transition-all duration-200 ease-out opacity-1000 group-hover/link:opacity-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12" fill="currentColor" className='block w-full h-full'>
                                        <path d="M0 6L12 6" strokeWidth="1.25" stroke="currentColor" />
                                        <path d="M7 11L12 6L7 1" strokeWidth="1.25" stroke="currentColor" />
                                    </svg>
                                </span>

                                {/* Underline - now properly sized to text content */}
                                <span className="absolute bottom-[-10px] left-0 h-px bg-[#f7eedf] transition-all duration-300 ease-out origin-left transform scale-x-0 group-hover/link:scale-x-100" style={{ width: 'calc(100% - 1rem)' }}></span>
                            </span>
                        </a>
                        </div>
          </div>
          
        </div>

        {/* COUNTER CULTURE BUTTON */}
        <div
          className="relative w-80 h-28 lg:w-96 lg:h-32 flex items-center justify-center text-[#ab965d] font-semibold text-lg 
          bg-[url('/images/nutrition-wellness/frame-border.png')] bg-no-repeat bg-center bg-[length:100%_100%]"
        >
          <div className="text-center">
            <div className='text-[17px]'>COUNTER CULTURE</div>
            <div className="font-[myriad-pro-semiextended,sans-serif] text-[#f7eedf] text-xs mt-2">
              <a href="#" className="relative inline-flex group/link">
                            <span className="relative flex items-center gap-x-2 text-[#f7eedf]">
                                {/* Left arrow (visible by default) */}
                                <span className='h-2.5 w-3 transition-all duration-200 ease-out opacity-0 group-hover/link:opacity-100'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12" fill="currentColor" className='block w-full h-full'>
                                        <path d="M0 6L12 6" strokeWidth="1.25" stroke="currentColor" />
                                        <path d="M7 11L12 6L7 1" strokeWidth="1.25" stroke="currentColor" />
                                    </svg>
                                </span>

                                {/* Text */}
                                <span className='relative  text-xs font-[myriad-pro-semiextended,sans-serif] font-semibold tracking-[.12em] uppercase whitespace-nowrap transition-all duration-200 ease-out group-hover/link:translate-x-1'>
                                    Guide to the Deli
                                </span>

                                {/* Right arrow (hidden by default) */}
                                <span className='h-2.5 w-3 transition-all duration-200 ease-out opacity-100 group-hover/link:opacity-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12" fill="currentColor" className='block w-full h-full'>
                                        <path d="M0 6L12 6" strokeWidth="1.25" stroke="currentColor" />
                                        <path d="M7 11L12 6L7 1" strokeWidth="1.25" stroke="currentColor" />
                                    </svg>
                                </span>

                                {/* Underline - now properly sized to text content */}
                                <span className="absolute bottom-[-10px] left-0 h-px bg-[#f7eedf] transition-all duration-300 ease-out origin-left transform scale-x-0 group-hover/link:scale-x-100" style={{ width: 'calc(100% - 1rem)' }}></span>
                            </span>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliPage;

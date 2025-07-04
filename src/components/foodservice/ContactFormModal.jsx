import React from "react";

export default function ContactFormModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-[1100] overflow-y-auto hide-scrollbar flex justify-center items-start py-16"
      onClick={onClose}
    >
      <div 
        className="bg-[#151310] text-[#f7eedf] px-8 py-16 lg:px-20 lg:py-20 rounded-md w-11/12 lg:w-2/6 min-h-fit relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="text-[#f7eedf] absolute top-6 right-6 text-xl mb-8"
          onClick={onClose}
        >
          ×
        </button>
        
        <div className="flex justify-center items-center mb-6">
          <h2 className="text-[#f7eedf] text-base font-[minion-pro,'Times_New_Roman','Times','Georgia',serif] not-italic font-bold tracking-[.06em] leading-[1.28] uppercase mb-6">
            All Fields Are Required
          </h2>
        </div>

        <form className="space-y-12 font-[myriad-pro-semiextended, sans-serif]">
         <div className="space-y-2 ">
             {/* First Column Fields */}
          <input
            placeholder="NAME"
            className="w-full text-sm font-semibold font-[myriad-pro-semiextended, sans-serif] px-4 py-2 border border-wight bg-transparent text-[#f7eedf] placeholder:text-[#f7eedf] uppercase"
            required
          />
          
          <input
            placeholder="TITLE"
            className="w-full text-sm font-semibold font-[myriad-pro-semiextended, sans-serif] px-4 py-2 border border-wight bg-transparent text-[#f7eedf] placeholder:text-[#f7eedf] uppercase"
            required
          />

          {/* PREFERRED CONTACT METHOD */}
          <select
            required
            className="w-full text-sm font-semibold font-[myriad-pro-semiextended, sans-serif] px-4 py-2 border border-wight bg-transparent text-[#f7eedf] uppercase"
          >
            <option className="text-black" value="">PREFERRED CONTACT METHOD</option>
            <option className="text-black">BY PHONE</option>
            <option className="text-black">BY EMAIL</option>
            <option className="text-black">BY A SALE REPRESENTATIVE VISIT</option>
          </select>

          <input
            placeholder="EMAIL ADDRESS"
            className="w-full text-sm font-semibold font-[myriad-pro-semiextended, sans-serif] px-4 py-2 border border-wight bg-transparent text-[#f7eedf] placeholder:text-[#f7eedf] uppercase"
            required
          />

          <input
            placeholder="PHONE NUMBER"
            className="w-full text-sm font-semibold font-[myriad-pro-semiextended, sans-serif] px-4 py-2 border border-wight bg-transparent text-[#f7eedf] placeholder:text-[#f7eedf] uppercase"
            required
          />

          <input
            placeholder="NAME OF BUSINESS/CORPORATION"
            className="w-full text-sm font-semibold font-[myriad-pro-semiextended, sans-serif] px-4 py-2 border border-wight bg-transparent text-[#f7eedf] placeholder:text-[#f7eedf] uppercase"
            required
          />

          <input
            placeholder="BUSINESS STREET ADDRESS"
            className="w-full text-sm font-semibold font-[myriad-pro-semiextended, sans-serif] px-4 py-2 border border-wight bg-transparent text-[#f7eedf] placeholder:text-[#f7eedf] uppercase"
            required
          />

          <input
            placeholder="BUSINESS CITY"
            className="w-full text-sm font-semibold font-[myriad-pro-semiextended, sans-serif] px-4 py-2 border border-wight bg-transparent text-[#f7eedf] placeholder:text-[#f7eedf] uppercase"
            required
          />

          <input
            placeholder="BUSINESS STATE"
            className="w-full text-sm font-semibold font-[myriad-pro-semiextended, sans-serif] px-4 py-2 border border-wight bg-transparent text-[#f7eedf] placeholder:text-[#f7eedf] uppercase"
            required
          />

          <input
            placeholder="BUSINESS ZIP CODE"
            className="w-full text-sm font-semibold font-[myriad-pro-semiextended, sans-serif] px-4 py-2 border border-wight bg-transparent text-[#f7eedf] placeholder:text-[#f7eedf] uppercase"
            required
          />

          {/* CHANNEL */}
          <select
            required
            className="w-full text-sm font-semibold font-[myriad-pro-semiextended, sans-serif] px-4 py-2 border border-wight bg-transparent text-[#f7eedf] uppercase"
          >
            <option className="text-black" value="">CHANNEL</option>
            <option className="text-black">COMMERCIAL SEGMENTS</option>
            <option className="text-black">NON-COMMERCIAL SEGMENTS</option>
          </select>

          {/* SEGMENT */}
           <select
            required
            className="w-full text-sm font-semibold font-[myriad-pro-semiextended, sans-serif] px-4 py-2 border border-wight bg-transparent text-[#f7eedf] uppercase"
            >
                <option className="text-black" value="">STATEMENT</option>
                <option className="text-black">QUICK SERVICE RESTAURANT</option>
                <option className="text-black">FAST CASUAL</option>
                <option className="text-black">CASUAL DINING RESTAURANT</option>
                <option className="text-black">MIDSCALE DINING RESTAURANT</option>
            </select>

          {/* LOCATION TYPE */}
          <select
            required
            className="w-full text-sm font-semibold font-[myriad-pro-semiextended, sans-serif] px-4 py-2 border border-wight bg-transparent text-[#f7eedf] uppercase"
          >
            <option className="text-black" value="">LOCATION TYPE</option>
            <option className="text-black">INDEPENDENT OPERATOR</option>
            <option className="text-black">REGIONAL CHAIN/FRANCHISE</option>
            <option className="text-black">A SELF-OPERATED FOODSERVICE LOCATION</option>
            <option className="text-black">A CONTRACT MANAGED FOODSERVICE LOCATION</option>
          </select>

          {/* Remaining fields not shown in screenshot */}
          <select
            required
            className="w-full text-sm font-semibold font-[myriad-pro-semiextended, sans-serif] px-4 py-2 border border-wight bg-transparent text-[#f7eedf] uppercase"
          >
            <option className="text-black" value="">SUBJECT</option>
            <option className="text-black">PRODUCT</option>
            <option className="text-black">RECIPE</option>
            <option className="text-black">CAREER</option>
            <option className="text-black">OTHER INQUIRY</option>
          </select>

          {/* MESSAGE */}
          <textarea
            required
            className="w-full text-sm font-semibold font-[myriad-pro-semiextended, sans-serif] px-4 py-2  border border-wight bg-transparent text-[#f7eedf] h-24 uppercase placeholder:text-[#f7eedf]"
            placeholder="MESSAGE"
          ></textarea>

          
         </div>

          <div className="space-y-8">
              {/* Checkbox */}
                <div className="flex font-[minion-pro-display,serif]  text-center gap-2 text-sm border-b border-red-900 pb-2 ">
                    <input 
                        name="checkbox" 
                        type="checkbox" 
                        className="appearance-none h-4 w-8 mt-4 border border-[#ab965d] checked:bg-[#ab965d] checked:border-[#ab965d] mr-2" 
                      />
                      <p className="text-base">
                        Yes, I'd like to receive updates from Boar's Head Foodservice. See our{" "}
                        <a href="#" className="underline text-[#c9a34c]">Privacy Policy</a>.
                      </p>
                </div>
            
                {/* Submit */}
               <div className='justify-center flex'>
                         <a onClick={() => setShowModal(true)} className="inline-block cursor-pointer text-decoration-none group relative overflow-hidden">
                            <span className="relative p-3 lg:p-4 items-center bg-[#a6192e] text-[#f7eedf] gap-x-2.5 flex z-10">
                                {/* Gold texture background that slides in on hover */}
                                <span
                                    className="absolute inset-0 bg-[length:100%_100%] bg-no-repeat z-0 transition-all duration-500 ease-out transform -translate-x-full group-hover:translate-x-0 bg-[url('/images/nutrition-wellness/heading-gold-texture.jpg')]"
                                  
                                ></span>
    
                                {/* Arrow icon that appears on hover */}
                                <span className='opacity-0 group-hover:opacity-100 absolute left-3 transition-all duration-200 ease-out h-2.5 w-3 z-10'>
                                    <span className='block h-2.5 w-3 bg-center bg-contain max-w-full align-sub text-[18.889px] text-[#f7eedf]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"
                                            stroke="currentColor" className="w-full h-full pointer-events-none overflow-visible block align-middle ">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                    </span>
                                </span>
    
                                {/* Text */}
                                <span className="text-xs pr-1 font-extrabold font-[myriad-pro-semiextended,sans-serif] tracking-[.12em] leading-[1]
                                 uppercase transition-all duration-200 ease-out relative group-hover:translate-x-3 z-10">
                                  Submit     
                                </span>
    
                                {/* Arrow icon that disappears on hover */}
                                <span className='opacity-100 group-hover:opacity-0 translate-gpu transition-all ease-out duration-200 h-2.5 w-3 z-10'>
                                    <span className='block h-2.5 w-3 bg-center bg-contain max-w-full align-sub text-[18.889px] text-[#f7eedf]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"
                                            stroke="currentColor" className="w-full h-full pointer-events-none overflow-visible block align-middle ">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                    </span>
                                </span>
                            </span>
                        </a>
                    </div>
          </div>
        </form>
      </div>
    </div>
  );
}
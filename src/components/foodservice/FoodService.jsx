import React, { useState } from "react";
import ContactFormModal from "./ContactFormModal";

export default function FoodService() {
 const [showModal, setShowModal] = useState(false);

  return (
     <section className="relative bg-[#000] px-6 text-white lg:mx-20 pt-[86px] overflow-visible">
         <div className='grid grid-cols-[1fr] pt-[40px] lg:grid-cols-[3fr_1.5fr] lg:pb-32 lg:pt-[72px] text-center lg:text-left items-start grid'>
            <section className='lg:pr-20 block pb-14'>
                <div className='pb-10 lg:pb-12 items-center flex flex-col justify-center overflow-hidden relative text-center'>
                    <div className='mx-auto px-6 lg:px-0 my-5 lg:my-0 w-full lg:w-[750px] z-[2] items-center flex flex-col justify-center '>
                        <h2 className="text-sm lg:text-lg text-[#ab965d] mb-6 font-[minion-pro,'Times_New_Roman','Times','Georgia',serif] not-italic font-bold tracking-[.08em] leading-[1] text-center uppercase">
                            <span>Foodservice</span>
                        </h2>
                        <h3 className='mb-0 pb-0 text-[28px] lg:text-[42px] antialiased font-[minion-pro-display,serif] not-italic lining-nums proportional-nums font-normal tracking-[.01em] leading-[1.06] text-center text-[#f7eedf] '>Passion and Culinary Expertise Since 1905</h3>
                    </div>
                </div>
                <div className='text-center max-w-[550px] lg:max-w-[687.5px] mb-12 lg:mb-[60px] mx-auto'>
                    <p className='tracking-[.0em] leading-[1.35] lining-nums proportional-nums font-[minion-pro-display,serif] not-italic text-base lg:text-xl font-normal antialiased text-[#f7eedf]'>
                        At Boar’s Head, we pride ourselves on being master artisans in the food industry. 
                        Our products are of unquestionable quality, without compromise, 
                        using only the best natural ingredients and nothing else.
                    </p>
                   
                    <div className='mb-6'></div>
                
                    <p className='tracking-[.0em] leading-[1.35] lining-nums proportional-nums font-[minion-pro-display,serif] not-italic text-base lg:text-xl font-normal antialiased text-[#f7eedf]'>
                        Boar’s Head is committed to providing simply the best for Chefs.
                        We offer a wide variety of products that allow Chefs to be 
                        creative by leveraging our unique bold flavors and solutions.
                    </p>
                    <div className='mb-9'></div>
                    <h2 className="text-xs lg:text-sm text-[#ab965d]  font-bold font-[minion-pro,'Times_New_Roman','Times','Georgia',serif] not-italic tracking-[.06em] leading-[1.28] uppercase mb-[22.5px]">
                        <span className='inline-block'>
                            For Exceptional Service
                        </span>
                    </h2>
                    <div className='justify-center flex'>
                         <a onClick={() => setShowModal(true)} className="inline-block cursor-pointer text-decoration-none group relative overflow-hidden ">
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
                                    CONTACT US       
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
                 {/* Modal */}
                <ContactFormModal isOpen={showModal} onClose={() => setShowModal(false)} />
                <hr className="lg:border-t-2 border-red-600 h-px w-full mx-auto mb-4 mt-2  lg:mb-5 lg:mt-2.5" />
    
                <div className='text-center max-w-[400px] lg:max-w-[500px] mb-5 lg:mb-6 mt-12 lg:mt-[60px] mx-auto'>
                    <h2 className='lg:text-[42px] text-[27px] text-[#f7eedf] antialiased font-[minion-pro-display,serif] not-italic lining-nums proportional-nums font-normal tracking-[.01em] leadng-[1.06]'>
                       Why Chefs and Operators Prefer Boar’s Head Products
                    </h2>
                </div>
                
                <ol className='text-center max-w-[500px] lg:max-w-[625px] mb-7 lg:mb-9 mx-auto list-none pl-0'>
    
                    <li className='mb-5 lg:mb-6 break-inside-avoid'>
                        <p className="text-xs lg:text-base font-[minion-pro,'Times_New_Roman','Times','Georgia',serif] not-italic font-bold tracking-[.06em] leading-[1.28] mb-2.5 uppercase">
                            <span className="text-[#ab965d]">Quality</span>
                        </p>
                        <p className='text-base lg:text-xl text-[#f7eedf] font-[minion-pro-display,serif] antialiased not-italic lining-nums proportional-nums font-normal tracking-[.025em] leading-[1.35]'>
                            Our meats, cheeses, condiments and hummus contain no gluten,
                            artificial colors or flavors, no MSG added, no by-products,
                            fillers, or trans fat.*
                        </p>
                    </li>
                    <li className='mb-6 break-inside-avoid'>
                        <p className="text-xs lg:text-base font-[minion-pro,'Times_New_Roman','Times','Georgia',serif] not-italic font-bold tracking-[.06em] leading-[1.28] mb-2.5 uppercase">
                            <span className="text-[#ab965d]">Authentic Flavors</span>
                        </p>
                        <p className='text-base lg:text-xl text-[#f7eedf] font-[minion-pro-display,serif] antialiased not-italic lining-nums proportional-nums font-normal tracking-[.025em] leading-[1.35]'>
                           Products made of only the finest ingredients and spices sourced from around the globe.
                        </p>
                    </li>
                    <li className='mb-6 break-inside-avoid'>
                        <p className="text-xs lg:text-base font-[minion-pro,'Times_New_Roman','Times','Georgia',serif] not-italic font-bold tracking-[.06em] leading-[1.28] mb-2.5 uppercase">
                            <span className="text-[#ab965d]">Nutrition and Wellness</span>
                        </p>
                        <p className='text-base lg:text-xl text-[#f7eedf] font-[minion-pro-display,serif] antialiased not-italic lining-nums proportional-nums font-normal tracking-[.025em] leading-[1.35]'>
                            We are proud to work with the American Heart Association® in its Food Certification Program and others.
                        </p>
                    </li>
                    <li className='mb-6 break-inside-avoid'>
                        <p className="text-xs lg:text-base font-[minion-pro,'Times_New_Roman','Times','Georgia',serif] not-italic font-bold tracking-[.06em] leading-[1.28] mb-2.5 uppercase">
                            <span className="text-[#ab965d]">Best in Class Service</span>
                        </p>
                        <p className='text-base lg:text-xl text-[#f7eedf] font-[minion-pro-display,serif] antialiased not-italic lining-nums proportional-nums font-normal tracking-[.025em] leading-[1.35]'>
                            Uncompromised delivery service and customer attention provided by a strong local purveyor network.
                        </p>
                    </li>
                    <li className='mb-6 break-inside-avoid'>
                        <p className="text-xs lg:text-base font-[minion-pro,'Times_New_Roman','Times','Georgia',serif] not-italic font-bold tracking-[.06em] leading-[1.28] mb-2.5 uppercase">
                            <span className="text-[#ab965d]">Innovation</span>
                        </p>
                        <p className='text-base lg:text-xl text-[#f7eedf] font-[minion-pro-display,serif] antialiased not-italic lining-nums proportional-nums font-normal tracking-[.025em] leading-[1.35]'>
                            For over a century we have provided products and solutions that help Chefs stay on top of trends.
                        </p>
                    </li>
                </ol>
    
                <small className='text-center block text-xs lg:text-base text-[#f7eedf] antialiased font-[minion-pro-display,serif] not-italic lining-nums proportional-nums font-normal tracking-[.025em] leading-[1.35]'>*No trans-fat from partially hydrogenated oils.</small>
            </section>
    
            <hr className="block lg:hidden border-t-1 border-red-600 h-px w-full mx-auto mb-4 mt-2" />
    
            <section className='lg:self-start lg:sticky lg:pl-20 lg:top-[86px] lg:mt-0 mt-6'>
    
                <div className="font-[minion-pro,'Times_New_Roman','Times','Georgia',serif] not-italic font-bold tracking-[.06em] leading-[1.28] uppercase"></div>
                <div className='mb-7 mt-5 lg:mb-9 lg:mt-6'>
                    <h3 className="text-xs lg:text-sm font-[minion-pro,'Times_New_Roman','Times','Georgia',serif] not-italic font-bold tracking-[.06em] leading-[1.28] uppercase mb-2 lg:mb-[11.25px] text-left text-[#ab965d]">Foodservice Recipes</h3>
                    <p className='text-left text-[#f7eedf] mb-5 lg:mb-6 antialiased font-[minion-pro-display,serif] not-italic lining-nums proportional-nums font-normal tracking-[.025] leading-[1.35] text-base lg:text-xl'>
                        Get inspired by our library of recipes in the
                         <br />Boar's Head Foodservice Culinary Corner
                    </p>
                    <div className='flex items-start'>
                        <a className="inline-block cursor-pointer text-decoration-none group relative overflow-hidden">
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
                                EXPLORE RECIPES
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
    
                <hr className="border-t-1 border-red-600 h-px w-full mx-auto  mb-5 mt-2.5" />
    
                <div className='truncate relative'>
                    <div className='relative block w-full mb-11 aspect-[1280 / 720]'>
                        <img
                            src="/images/kitchen.jpg"
                            alt="A History of Quality"
                            className=" rounded"/>
                            <div className='relative z-0 pointer-events-none before:absolute before:inset-0 before:bg-black before:opacity-15 after:absolute after:inset-0 after:box-border '>
                                {/* after and before */}
                            </div>
                            {/* Dark overlay */}
                            <div className='absolute inset-0 pointer-events-none before:absolute before:inset-0 before:bg-black before:opacity-15 after:absolute after:inset-0 after:box-border'></div>
    
                            {/* Play button centered */}
                            <a href="/" 
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-14 w-14 z-[1] text-decoration-none after:content-[''] after:border after:border-[#f7eedf] after:absolute after:top-0 after:right-0 after:transition-transform after:duration-200 ease-[cubic-bezier(0.65,0,0.35,1)] after:w-full after:h-full after:-rotate-45 hover:after:scale-[1.1]">
                                
                                <span className="text-[#f7eedf] font-[myriad-pro-semiextended, sans-serif] text-xs font-semibold uppercase">
                                play
                                </span>
                            </a>
                            <div></div>
                    </div>    
                </div>
    
                  <h3 className="text-xs lg:text-sm font-[minion-pro,'Times_New_Roman','Times','Georgia',serif] not-italic font-bold tracking-[.06em] leading-[1.28] uppercase mb-2 lg:mb-[11.25px] text-left text-[#ab965d]">
                    <span>A History of Quality</span>
                </h3>
                <p className='text-left text-[#f7eedf] mb-5 lg:mb-6 antialiased font-[minion-pro-display,serif] not-italic lining-nums proportional-nums font-normal tracking-[.025] leading-[1.35] text-base lg:text-xl'>
                    Frank Brunckhorst founded the Boar’s Head Brand in 1905, 
                    with one simple mission: to offer products of the highest standards. 
                    And to this day, Boar’s Head refuses to cut corners. We still focus on using only premium cuts of meat,
                    skillfully hand-trimmed and hand-crafted, just like we have been doing for over 110 years.
                </p>
                <hr className="border-t-1 border-red-600 h-px w-full mx-auto  mb-5 mt-2.5" />
                <div className='my-9'>
                    <img
                        src="/images/foodservice-guide.jpg"
                        alt="Foodservice Guide"
                        className="mx-auto mb-6 max-w-full"
                    />
                </div>
                <h3 className="text-xs lg:text-sm font-[minion-pro,'Times_New_Roman','Times','Georgia',serif] not-italic font-bold tracking-[.06em] leading-[1.28] uppercase mb-2 lg:mb-[11.25px] text-left text-[#ab965d]">
                    <span>Foodservice Guide</span>
                </h3>
               <p className='text-left text-[#f7eedf] mb-5 lg:mb-6 antialiased font-[minion-pro-display,serif] not-italic lining-nums proportional-nums font-normal tracking-[.025] leading-[1.35] text-base lg:text-xl'>
                    Uncompromising quality means maximum
                    <br /> results in your kitchen.
                </p>
                <div>
                   <a className="flex items-start inline-block cursor-pointer text-decoration-none group relative overflow-hidden">
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
                                VIEW & DOWNLOAD
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
            </section>
         </div>
         
        </section>
  );
}

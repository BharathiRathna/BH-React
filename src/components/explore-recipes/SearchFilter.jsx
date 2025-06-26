import React, { useState } from 'react';

const SearchFilter = () => {
  // State for the image slider
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
       image: "/images/explore-recipes/hqdefault (2).jpg",
       title: "Pastrami Top Round Egg Rolls"
    },
    {
      image: "/images/explore-recipes/hqdefault (3).jpg",
      title: "Breakfast Sausage Patty Scramble with Johnny Cake"
    },
    {
      image: "/images/explore-recipes/hqdefault (1).jpg",
      title: "Madrasala Curry Chicken Pot Pies"
    },
    {
       
      image: "/images/explore-recipes/hqdefault (4).jpg",
      title: "Bold,BourbonRidge,Ham Belgian Waffles "
    },
    {
      image: "/images/explore-recipes/hqdefault.jpg",
      title: "Lemon Pepper Chicken Hummus Bowl with Tzatziki"
    }
  ];

  // Calculate the translateX value based on current slide
  const slideWidth = 432; // width of each slide
  const slideMargin = 24; // mr-6 = 24px margin
  const translateXValue = `-${currentSlide * (slideWidth + slideMargin)}px`;

  // Navigation functions
  const goToPrevious = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='px-6 pt-[86px] relative overflow-visible  xl:px-20 xl:pt-[86px] bg-[#000]'>
      {/*existing header and search form */}
      <section className='pt-[86px] overflow-visible relative'>
        <div className='pb-10 xl:pb-12 items-center flex flex-col justify-center overflow-hidden relative text-center'>
          <div className='sm:px-6 sm:w-full sm:z-[2] xl:w-5/6 mx-auto flex flex-col justify-center items-center'>
            <h2 className="xl:text-xl sm:mt-4 mb-6 text-sm text-[#ab965d] minion-heading  font-bold tracking-[.08em] leading-[1] text-center uppercase"> 
              <span className='inline-block'>food service recipes</span>
            </h2>
            <h3 className='font-[minion-pro-display,serif] not-italic lining-nums proportional-nums font-normal tracking-[.02em] leading-[1.06] text-center text-[#f7eedf] text-[28px] xl:text-5xl'>
              Culinary Corner        
            </h3>
          </div>
        </div>
        <form className='xl:w-[625px] xl:mb-9 -mb-12 mx-auto opacity-100 transition-opacity transition-max-height duration-300 ease-in-out ease' action="">
          <div className='border-b border-[#a6192e] flex-nowrap flex w-full'>
            <label className='mb-2.5 relative block grow shrink basis-auto w-full'> 
              <input className='outline-none font-[myriad-pro-semiextended,sans-serif] bg-transparent text-white text-xs font-semibold h-10 tracking-[.12em] pr-4 uppercase w-full' placeholder='Search for recipes...' type="text" />
            </label>
            <button className='items-center text-[#8a7449] flex py-[6.25px] pr-[1.25px] pl-4 basis-auto'>
              <span>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="20px" fill="#8a7449" viewBox="0 0 122.879 119.799" enableBackground="new 0 0 122.879 119.799" xmlSpace="preserve">
                  <g><path fill="#8a7449" d="M49.988,0h0.016v0.007C63.803,0.011,76.298,5.608,85.34,14.652c9.027,9.031,14.619,21.515,14.628,35.303h0.007v0.033v0.04 h-0.007c-0.005,5.557-0.917,10.905-2.594,15.892c-0.281,0.837-0.575,1.641-0.877,2.409v0.007c-1.446,3.66-3.315,7.12-5.547,10.307 l29.082,26.139l0.018,0.016l0.157,0.146l0.011,0.011c1.642,1.563,2.536,3.656,2.649,5.78c0.11,2.1-0.543,4.248-1.979,5.971 l-0.011,0.016l-0.175,0.203l-0.035,0.035l-0.146,0.16l-0.016,0.021c-1.565,1.642-3.654,2.534-5.78,2.646 c-2.097,0.111-4.247-0.54-5.971-1.978l-0.015-0.011l-0.204-0.175l-0.029-0.024L78.761,90.865c-0.88,0.62-1.778,1.209-2.687,1.765 c-1.233,0.755-2.51,1.466-3.813,2.115c-6.699,3.342-14.269,5.222-22.272,5.222v0.007h-0.016v-0.007 c-13.799-0.004-26.296-5.601-35.338-14.645C5.605,76.291,0.016,63.805,0.007,50.021H0v-0.033v-0.016h0.007 c0.004-13.799,5.601-26.296,14.645-35.338C23.683,5.608,36.167,0.016,49.955,0.007V0H49.988L49.988,0z M50.004,11.21v0.007h-0.016 h-0.033V11.21c-10.686,0.007-20.372,4.35-27.384,11.359C15.56,29.578,11.213,39.274,11.21,49.973h0.007v0.016v0.033H11.21 c0.007,10.686,4.347,20.367,11.359,27.381c7.009,7.012,16.705,11.359,27.403,11.361v-0.007h0.016h0.033v0.007 c10.686-0.007,20.368-4.348,27.382-11.359c7.011-7.009,11.358-16.702,11.36-27.4h-0.006v-0.016v-0.033h0.006 c-0.006-10.686-4.35-20.372-11.358-27.384C70.396,15.56,60.703,11.213,50.004,11.21L50.004,11.21z"/></g>
                </svg>
              </span>
            </button>
          </div>
        </form>
      </section>
      
      {/* Filter Dropdowns */}
      <section className="w-full ">
        <div className='relative mb-10 pt-20 lg:pb-24 z-[10]'>
          <div className='xl:flex flex-row xl:flex-wrap gap-2.5 text-[#f7eedf] w-full mb-9 font-semibold gap-x-3 grid grid-cols-1'>
            <div className="relative basis-auto text-base items-start border border-red-700 flex grow shrink not-italic font-[ myriad-pro-semiextended, sans-serif] font-semibold justify-between tracking-[.12em] p-2.5 uppercase z-[1]">
              <h3 className='cursor-pointer flex justify-between w-full'> 
                <span>Segment</span>
                <span>
                  <span className='text-[#a6192e] h-[1em] w-3.5 bg-center bg-contain inline-block align-sub'>
                    <svg className='block h-full visible pointer-events-none w-full' xmlns="http://www.w3.org/2000/svg" fill='currentColor' stroke="currentColor" viewBox="0 0 12.9 12.9" id="arrow-down">
                      <path stroke="none" d="M.7 3.7l5.7 5.7 5.8-5.7"/>
                    </svg>
                  </span>
                </span>
              </h3>
            </div>
            <div className="relative basis-auto text-base items-start border border-red-700 flex grow shrink not-italic font-[ myriad-pro-semiextended, sans-serif] font-semibold justify-between tracking-[.12em] p-2.5 uppercase z-[1]">
              <h3 className='cursor-pointer flex justify-between w-full'> 
                <span>Main Ingredient</span>
                <span>
                  <span className='text-[#a6192e] h-[1em] w-3.5 bg-center bg-contain inline-block align-sub'>
                    <svg className='block h-full visible pointer-events-none w-full' xmlns="http://www.w3.org/2000/svg" fill='currentColor' stroke="currentColor" viewBox="0 0 12.9 12.9" id="arrow-down">
                      <path stroke="none" d="M.7 3.7l5.7 5.7 5.8-5.7"/>
                    </svg>
                  </span>
                </span>
              </h3>
            </div>
            <div className="relative basis-auto text-base items-start border border-red-700 flex grow shrink not-italic font-[ myriad-pro-semiextended, sans-serif] font-semibold justify-between tracking-[.12em] p-2.5 uppercase z-[1]">
              <h3 className='cursor-pointer flex justify-between w-full'> 
                <span>Day Part</span>
                <span>
                  <span className='text-[#a6192e] h-[1em] w-3.5 bg-center bg-contain inline-block align-sub'>
                    <svg className='block h-full visible pointer-events-none w-full' xmlns="http://www.w3.org/2000/svg" fill='currentColor' stroke="currentColor" viewBox="0 0 12.9 12.9" id="arrow-down">
                      <path stroke="none" d="M.7 3.7l5.7 5.7 5.8-5.7"/>
                    </svg>
                  </span>
                </span>
              </h3>
            </div>
            <div className="relative basis-auto text-base items-start border border-red-700 flex grow shrink not-italic font-[ myriad-pro-semiextended,sans-serif] font-semibold justify-between tracking-[.12em] p-2.5 uppercase z-[1]">
              <h3 className='cursor-pointer flex justify-between w-full'> 
                <span>Dish Type</span>
                <span>
                  <span className='text-[#a6192e] h-[1em] w-3.5 bg-center bg-contain inline-block align-sub'>
                    <svg className='block h-full visible pointer-events-none w-full' xmlns="http://www.w3.org/2000/svg" fill='currentColor' stroke="currentColor" viewBox="0 0 12.9 12.9" id="arrow-down">
                      <path stroke="none" d="M.7 3.7l5.7 5.7 5.8-5.7"/>
                    </svg>
                  </span>
                </span>
              </h3>
            </div>
          </div>
          <div className="justify-center flex">
            <button 
                onClick={() => console.log("Search Recipes Clicked")}
                className="inline-block cursor-pointer text-decoration-none group relative overflow-hidden">
                <span className="relative p-3 lg:p-4 items-center bg-[#a6192e] text-[#f7eedf] gap-x-2.5 flex z-10">
                
                {/* Gold texture background that slides in on hover */}
                <span
                    className="absolute inset-0 bg-[length:100%_100%] bg-no-repeat z-0 transition-all duration-500 ease-out transform -translate-x-full group-hover:translate-x-0 bg-[url('/images/nutrition-wellness/heading-gold-texture.jpg')]"
                ></span>

                {/* Arrow icon that appears on hover */}
                <span className="opacity-0 group-hover:opacity-100 absolute left-3 transition-all duration-200 ease-out h-2.5 w-3 z-10">
                    <span className="block h-2.5 w-3 bg-center bg-contain max-w-full align-sub text-[18.889px] text-[#f7eedf]">
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
                    Search Recipes
                </span>

                {/* Arrow icon that disappears on hover */}
                <span className="opacity-100 group-hover:opacity-0 translate-gpu transition-all ease-out duration-200 h-2.5 w-3 z-10">
                    <span className="block h-2.5 w-3 bg-center bg-contain max-w-full align-sub text-[18.889px] text-[#f7eedf]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"
                        stroke="currentColor" className="w-full h-full pointer-events-none overflow-visible block align-middle ">
                        <path strokeLinecap="round" strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    </span>
                </span>
                </span>
            </button>
            </div>

        </div>
        
        {/* Image Slider */}
        <div className=" xl:h-full  xl:w-full mb-24 touch-pan-y block mx-auto overflow-hidden relative z-[1] before:absolute before:left-0 before:w-2.5 before:z-[1] before:bg-[linear-gradient(90deg,_#000,_transparent)] before:bg-no-repeat before:bg-origin-padding before:bg-clip-border before:bg-scroll before:bg-auto before:bg-left-top before:content-[''] xl:before:h-full">
          <div 
            className='xl:flex-row xl:box-content xl:flex h-full relative xl:transition-transform w-full z-[1] duration-300 ease-in-out gap-x-3 grid grid-cols-1'
            style={{ transform: `translateX(${translateXValue})` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className='lg:mr-2.5 mb-[30px]  lg:w-[442px] backface-hidden translate-z-0 relative block shrink-0 h-full transition-transform'>
                <div className='relative mb-6 lg:mb-0 '>
                  <div className='pb-[160px] lg:pb-[280.75px] lg:w-full'></div>
                  <div className='absolute bottom-0 left-0 right-0 top-0  lg:aspect-[1280 / 720]'>
                    <div className='absolute bottom-0 left-0 right-0 top-0 z-[1] text-white'>
                        <a href="/"
                        className="absolute left-1/2 top-1/2 w-14 z-[1] -translate-x-1/2 -translate-y-1/2
                                    items-center flex h-[47.9167px] lg:h-14 w-[47.9167px] lg:w-[57.5px] justify-center
                                    relative
                                    before:content-[''] before:absolute before:top-1/2 before:left-1/2
                                    before:h-[266.67%] before:w-[266.67%] before:transform
                                    before:-translate-x-1/2 before:-translate-y-1/2
                                    before:opacity-20 before:pointer-events-none before:z-[-1]
                                    before:bg-[radial-gradient(ellipse_at_center,_#0d0806_0,_rgba(13,_8,_6,_0)_50%)]
                                    after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full
                                    after:border after:border-[#f7eedf] after:transform after:-rotate-[45deg]
                                    after:transition-transform after:duration-200">
                        <span>Play</span>
                        </a>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-0 z-0 pointer-events-none
                                before:content-[''] before:absolute before:inset-0
                                before:bg-black before:opacity-[0.15] before:box-border
                                after:content-[''] after:absolute after:inset-0
                                after:bg-[radial-gradient(ellipse_at_center,_#000_0,_transparent_33.3333333333%)]
                                after:opacity-[0.4] after:box-border">     
                    </div>
                    {/* this will use future */}
                     {/* <div className="invisible opacity-0 transition-opacity duration-300 ease-in-out bg-black" >
                                        <div className='pb-[303.75px] w-full'></div>
                                        <div className='opacity-0 transition-none z-[100] absolute top-1/2 left-0 w-full h-full overflow-hidden -translate-y-1/2'></div>
                                        <button className='absolute right-[10px] top-[10px] z-[100] transparent'>
                                            <span className='h-7 w-7 inline-block bg-center bg-contain max-w-full align-sub'>
                                                    <svg className='w-full pointer-events-none overflow-visible block' xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 30 30" id="video-close">
                                                        <path stroke="currentColor"  d="M15 29a14 14 0 1 1 13.986-14A14.009 14.009 0 0 1 15 29zm0-26.612A12.612 12.612 0 1 0 27.6 15 12.619 12.619 0 0 0 15 2.388z"/>
                                                        <path stroke="currentColor" d="M22.521 21.172l-5.76-5.757 5.747-5.749-1.537-1.536-5.748 5.748-5.75-5.746-1.536 1.537 5.747 5.748-5.747 5.749 1.538 1.536 5.746-5.748 5.744 5.746 1.556-1.528z"/>
                                                    </svg>
                                            </span>
                                        </button>
                        </div> */}

                    <div className='w-full h-full object-cover'>
                        <img src={slide.image} alt={slide.title}  className="object-cover h-[240px] lg:h-[345px]" style={{ objectPosition: '0 -40px' }} />
                    </div>
                </div>   
                </div>
                <a className='relative items-center px-[30px] no-underline text-sm text-[#ab965d] antialiased lining-nums proportional-nums items-start flex font-[minion-pro-display, serif] font-normal justify-center tracking-[0.4px] leading-[1.35] w-full' href="/">
                  <p className='text-center block' >{slide.title}</p>
                </a>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <div 
            className="hidden sm:flex text-white absolute left-[10px] top-[95.313px] z-[10]
                      h-14 w-20 mt-[22px] items-center cursor-pointer
                      after:absolute
                      after:font-['swiper-icons'] after:text-[var(--swiper-navigation-size)]
                      after:font-normal after:tracking-[0] after:leading-[1]
                      after:uppercase after:!normal-case
                      after:box-border after:pointer-events-auto"
            onClick={goToPrevious}
          >
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-chevron-left h-full w-full " viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            </svg>
          </div>

          {/* Right Arrow */}
          <div 
            className="hidden sm:flex text-white absolute right-[10px] top-[95.313px] z-[10]
                      h-14 w-20 mt-[22px] items-center cursor-pointer
                      after:absolute
                      after:font-['swiper-icons'] after:text-[var(--swiper-navigation-size)]
                      after:font-normal after:tracking-[0] after:leading-[1]
                      after:uppercase after:!normal-case
                      after:box-border after:pointer-events-auto"
            onClick={goToNext}
          >
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-chevron-right w-full h-full" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </div>

        </div>

        <ul className='lg:grid lg:grid-cols-4 lg:gap-x-3.5 lg:gap-y-10 lg:items-stretch gap-x-3 grid grid-cols-1'>
            <li className='opacity-100 delay-[0.3s] w-full pb-4 relative block'>
                <a href="">
                    <div class="relative group bg-transparent shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div class="relative overflow-hidden h-52"> 
                                    <img src="/images/explore-recipes/detail-001@1200.1642611562.jpg" alt="${title}" class="w-full h-full object-cover transition duration-300 ease-out opacity-100 scale-100 group-hover:opacity-60 group-hover:scale-110 pointer-events-none" />
                                    <div class="absolute bottom-0 left-0 w-full h-2 bg-[#a6192e] opacity-0 group-hover:opacity-100 transition duration-200"></div>
                                    <a href="recipes-details.html?id=${card.id}" class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out z-10 flex items-center justify-center border bottom-1 border-[#f7eedf] w-[clamp(2.99rem,4vw,4.18rem)] h-[clamp(2.99rem,4vw,4.18rem)] -rotate-45">
                                        <span class="text-[#f7eedf] text-xs font-bold rotate-45">view</span>
                                    </a>
                                </div>
                                <div class="pt-4 pb-10 lg:p-4">
                                    <span class="block max-w-11/12 lg:text-xl font-[minion-pro-display,serif] not-italic leading-[1.35] font-normal lining-nums proportional-nums tracking-[.o25em] text-[#f7eedf] hover:text-[#a3987b]">Herb-Marinated Mozzarella</span>
                                </div>
                    </div>
                </a>
            </li>
            <li className='opacity-100 delay-[0.3s] w-full pb-4 relative block'>
                <a href="">
                    <div class="relative group bg-transparent shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div class="relative overflow-hidden h-52"> 
                                    <img src="/images/explore-recipes/detail-001@1200.1566335690.jpg" alt="${title}" class="w-full h-full object-cover transition duration-300 ease-out opacity-100 scale-100 group-hover:opacity-60 group-hover:scale-110 pointer-events-none" />
                                    <div class="absolute bottom-0 left-0 w-full h-2 bg-[#a6192e] opacity-0 group-hover:opacity-100 transition duration-200"></div>
                                    <a href="recipes-details.html?id=${card.id}" class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out z-10 flex items-center justify-center border bottom-1 border-[#f7eedf] w-[clamp(2.99rem,4vw,4.18rem)] h-[clamp(2.99rem,4vw,4.18rem)] -rotate-45">
                                        <span class="text-[#f7eedf] text-xs font-bold rotate-45">view</span>
                                    </a>
                                </div>
                                <div class="pt-4 pb-10 lg:p-4">
                                    <span class="block max-w-11/12 lg:text-xl font-[minion-pro-display,serif] not-italic leading-[1.35] font-normal lining-nums proportional-nums tracking-[.o25em] text-[#f7eedf] hover:text-[#a3987b]">Dark Chocolate Hummus'S mores</span>
                                </div>
                    </div>
                </a>
            </li>
            <li className='opacity-100 delay-[0.3s] w-full pb-4 relative block'>
                <a href="">
                    <div class="relative group bg-transparent shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div class="relative overflow-hidden h-52"> 
                                    <img src="/images/explore-recipes/detail-001@1200.1650552346.jpg" alt="${title}" class="w-full h-full object-cover transition duration-300 ease-out opacity-100 scale-100 group-hover:opacity-60 group-hover:scale-110 pointer-events-none" />
                                    <div class="absolute bottom-0 left-0 w-full h-2 bg-[#a6192e] opacity-0 group-hover:opacity-100 transition duration-200"></div>
                                    <a href="recipes-details.html?id=${card.id}" class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out z-10 flex items-center justify-center border bottom-1 border-[#f7eedf] w-[clamp(2.99rem,4vw,4.18rem)] h-[clamp(2.99rem,4vw,4.18rem)] -rotate-45">
                                        <span class="text-[#f7eedf] text-xs font-bold rotate-45">view</span>
                                    </a>
                                </div>
                                <div class="pt-4 pb-10 lg:p-4">
                                    <span class="block max-w-11/12 lg:text-xl font-[minion-pro-display,serif] not-italic leading-[1.35] font-normal lining-nums proportional-nums tracking-[.o25em] text-[#f7eedf] hover:text-[#a3987b]">BourbonRidge®Ham Straw and Hay Pasta with Spring Vegetables</span>
                                </div>
                    </div>
                </a>
            </li>
            <li className='opacity-100 delay-[0.3s] w-full pb-4 relative block'>
                <a href="">
                    <div class="relative group bg-transparent shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div class="relative overflow-hidden h-52"> 
                                    <img src="/images/explore-recipes/detail-001@1200.1650548019.jpg" alt="${title}" class="w-full h-full object-cover transition duration-300 ease-out opacity-100 scale-100 group-hover:opacity-60 group-hover:scale-110 pointer-events-none" />
                                    <div class="absolute bottom-0 left-0 w-full h-2 bg-[#a6192e] opacity-0 group-hover:opacity-100 transition duration-200"></div>
                                    <a href="recipes-details.html?id=${card.id}" class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out z-10 flex items-center justify-center border bottom-1 border-[#f7eedf] w-[clamp(2.99rem,4vw,4.18rem)] h-[clamp(2.99rem,4vw,4.18rem)] -rotate-45">
                                        <span class="text-[#f7eedf] text-xs font-bold rotate-45">view</span>
                                    </a>
                                </div>
                                <div class="pt-4 pb-10 lg:p-4">
                                    <span class="block max-w-11/12 lg:text-xl font-[minion-pro-display,serif] not-italic leading-[1.35] font-normal lining-nums proportional-nums tracking-[.o25em] text-[#f7eedf] hover:text-[#a3987b]">Bold PitCraft, Slow Smoked Turkey BBQ Flatbread</span>
                                </div>
                    </div>
                </a>
            </li>
        </ul>    
      </section>

      <section className="text-center pt-[86px] overflow-visible relative font-[minion-pro,'Times_New_Roman','Times','Georgia',serif] font-bold tracking-[.06em] leading-[1.28] uppercase">
        <div className="px-20">
            <div className="text-center">
            <p className="opacity-100 text-[#f7eedf] text-[10px] lg:text-sm delay-[0.1s]">Proud Sponsor Of</p>
            </div>

            <div className="flex justify-center items-center mt-8 pb-40">
            <img
                className="lg:w-auto lg:h-auto transition-opacity duration-[400ms] ease-out"
                src="/images/explore-recipes/acf.png"
                alt=""
            />
            </div>
        </div>
        </section>

    </div>
  );
};

export default SearchFilter;
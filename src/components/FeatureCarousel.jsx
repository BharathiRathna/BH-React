import HeadingGoldTexture from '../assets/images/heading-gold-texture.png';
import Corousel2 from '../assets/images/detail-001.jpg';
import DKPaperCard from '../assets/images/dk-paper-card.jpg';
import FiligreeDetail1 from '../assets/images/filigree-detail-1.png';
import OliveImage from '../assets/images/olives.jpg';
import NewImage from '../assets/images/new.png';
import { useState } from 'react';


const FeatureCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('next');

    const slides = [

        <div key={1} className="w-full">
            <div className='mr-6 backface-hidden translate-z-0 grid grid-cols-1 lg:grid-cols-[1fr_29.77%] grid-rows-1 lg:max-w-[88.194444vw] overflow-hidden w-full shrink-0 relative transition-transform' >
                <div className='grid overflow-hidden'>
                    <div className='translate-z-0 grid transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)] w-full lg:max-w-[88.194444vw] shrink-0 relative'>
                        <div className='z-[2] aspect-[375/339] lg:aspect-[892/669] grid grid-cols-1 grid-rows-1 col-start-1 col-end-auto row-start-1 row-end-auto overflow-hidden relative w-full'>
                            <picture className='col-start-1 col-end-auto row-start-1 row-end-auto object-cover h-full w-full z-0'>
                                <img src={Corousel2} alt="" className={`h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)] opacity-100 ${currentIndex === 0 ? 'scale-100' : 'scale-150'
                                    }`} />
                            </picture>
                        </div>
                    </div>
                </div>
            
                <div className='px-6 lg:px-0 flex flex-col items-end h-full w-full justify-center relative z-[2]'>
                    <div className='grid w-full'>
                        <div className='translate-z-0 grid col-start-1 col-end-auto row-start-1 row-end-auto justify-self-end w-full transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)]'>
                            <div className='h-auto  px-8 pt-[30px] pb-8 lg:px-6 lg:pt-[66.1111px] lg:pb-[51.9444px] w-full lg:w-[calc(100%+50px)] z-[2] items-center bg-no-repeat bg-cover flex flex-col col-start-1 col-end-auto row-start-1 row-end-auto justify-center justify-self-end relative -mt-11 lg:mt-0 ' style={{ backgroundImage: `url(${DKPaperCard})` }}>
                                <h2 className="mt-7 lg:mt-0 mb-4 lg:mb-6 text-lg lg:text-xl font-[minion-pro,'Times_New_Roman','Times','Georgia',serif] font-bold tracking-[.08em] leading-[.81] lowercase w-[86px] h-7 lg:h-auto lg:w-auto flex justify-center items-center font-variant-full">
                                    <span className='text-transparent bg-clip-text bg-cover bg-no-repeat text-xl' style={{ backgroundImage: `url(${HeadingGoldTexture})` }}>
                                        Recipes
                                    </span>
                                </h2>
                                <div className='flex flex-col items-center justify-center'>
                                    <h2 className='mb-7 text-[28px] lg:text-[39.6667px] antialiased font-[minion-pro-display,serif] lining-nums proportional-nums leading-[1.06] tracking-[.02em] text-center max-w-4/5'>
                                        <span className='items-center inline lg:whitespace-nowrap'>
                                            Ovengold
                                            <sub className='bottom-auto text-[8px] relative align-baseline transform-none whitespace-nowrap'>®</sub>
                                        </span>
                                        <span className='lg:whitespace-nowrap'> Turkey California Club</span>
                                    </h2>
                                    <img src={FiligreeDetail1} alt="" className='scale-100 mb-7 w-[60px] bg-center bg-contain inline-block max-w-full align-sub' />
                                    <div className='hidden lg:block mb-7 lg:mb-[42.5px] text-center'>
                                        This savory twist on a classic club is perfect for lunch or anytime!
                                        <span className='whitespace-nowrap'>
                                            Boar's <sub className='bottom-auto text-[8px] relative align-baseline transform-none whitespace-nowrap'>®</sub>
                                        </span>
                                        Head meats, creamy avocoda, and sourdough bread and add a satisfying West Coast flair.
                                    </div>
                                    <div className='block lg:hidden mb-7 text-center'>
                                        This savory twist on a classic club is perfect for lunch or anytime!
                                    </div>
                                    <a className="inline-block cursor-pointer text-decoration-none group relative overflow-hidden">
                                        <span className="relative p-3 lg:p-4 items-center bg-[#a6192e] text-[#f7eedf] gap-x-2.5 flex z-10">
                                            {/* Gold texture background that slides in on hover */}
                                            <span
                                                className="absolute inset-0 bg-[length:100%_100%] bg-no-repeat z-0 transition-all duration-500 ease-out transform -translate-x-full group-hover:translate-x-0"
                                                style={{ backgroundImage: `url(${HeadingGoldTexture})` }}
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
                                            <span className="text-xs pr-1 font-extrabold font-[myriad-pro-semiextended,sans-serif] tracking-[.12em] leading-[1] uppercase transition-all duration-200 ease-out relative group-hover:translate-x-3 z-10"> View Recipe</span>

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
                        </div>
                    </div>
                </div>
            </div >
        </div>,
        <div key={2} className="w-full">
            {/* Simplified grid container - single column for all screens */}
            <div className="backface-hidden transition-transform translate-z-0 mr-6 grid grid-cols-1 lg:max-w-[88.194444vw] w-full h-full relative">

                {/* Video Section - Always visible */}
                <div className="relative aspect-[375/339] lg:aspect-[892/669] w-full">
                    <video
                        src="https://player.vimeo.com/progressive_redirect/playback/1071630700/rendition/720p/file.mp4?loc=external&signature=4dc88b282124b5c0beda7d901839df8f209fbc4b37eec677e8776742313ce5c3"
                        autoPlay
                        loop
                        muted
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                {/* Content Section - Will stack below video */}
                <div className="flex flex-col justify-center items-center px-6 lg:px-0 relative w-full z-[2] -mt-11 lg:mt-0">
                    <div className="w-full">
                        <div className="flex flex-col justify-center items-center w-full h-auto relative z-[1] px-8 pt-[30px] pb-8 lg:pt-[70px] lg:px-9 lg:pb-14 bg-no-repeat bg-cover"
                            style={{ backgroundImage: `url(${DKPaperCard})` }}>
                            {/* Your content remains unchanged */}
                            <h2 className="mb-6 text-xl font-bold tracking-[.08em] leading-[.81] uppercase font-[minion-pro,'Times_New_Roman','Times','Georgia',serif] hidden lg:block">
                                <span className="text-transparent bg-clip-text bg-cover bg-no-repeat" style={{ backgroundImage: `url(${HeadingGoldTexture})` }}>
                                    Featured
                                </span>
                            </h2>
                            <h2 className="text-[#f7eedf] text-[28px] lg:text-[42px] font-[minion-pro-display,serif] font-normal max-w-4/5 text-center mb-7 lg:mb-11 antialiased lining-nums proportional-nums leading-[1.06] tracking-[.02em]">
                                Committed to Craft Since <span>1905<sub className='text-xs align-baseline relative top-1'>™</sub> </span>
                            </h2>
                            <img src={FiligreeDetail1} alt="" className='scale-100 mb-7 w-[60px] bg-center bg-contain inline-block max-w-full align-sub lg:hidden' />

                            {/* play button for desktop */}
                            <a href="/" className="hidden relative lg:flex left-auto top-auto transform-none items-center justify-center h-14 w-14 z-[1] text-decoration-none mx-auto after:content-[''] after:border after:border-[#f7eedf] after:absolute after:top-0 after:right-0 after:transition-transform after:duration-200 ease-[cubic-bezier(0.65,0,0.35,1)] after:w-full after:h-full after:-rotate-42 hover:after:scale-[1.1]">
                                <span className="text-[#f7eedf] font-[myriad-pro-semiextended, sans-serif] text-xs font-semibold uppercase">
                                    play
                                </span>
                            </a>

                            {/* play button for mobile */}
                            <a className="inline-block lg:hidden cursor-pointer text-decoration-none group relative overflow-hidden">
                                <span className="relative p-3.5 lg:p-4 items-center bg-[#a6192e] text-[#f7eedf] gap-x-2.5 flex z-10">
                                    {/* Gold texture background that slides in on hover */}
                                    <span
                                        className="absolute inset-0 bg-[length:100%_100%] bg-no-repeat z-0 transition-all duration-500 ease-out transform -translate-x-full group-hover:translate-x-0"
                                        style={{ backgroundImage: `url(${HeadingGoldTexture})` }}
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
                                    <span className="text-[11.5px] lg:text-xs pr-1 font-extrabold font-[myriad-pro-semiextended,sans-serif] tracking-[.12em] leading-[1] uppercase transition-all duration-200 ease-out relative group-hover:translate-x-3 z-10">Play Video</span>

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
                </div>
            </div>
        </div>,

        <div key={3} className="w-full">
            < div className='mr-6 backface-hidden translate-z-0 grid grid-cols-1 lg:grid-cols-[1fr_29.77%] grid-rows-1 lg:max-w-[88.194444vw] overflow-hidden w-full shrink-0 relative transition-transform'>
                <div className='grid col-start-1 col-end-auto row-start-1 row-end-auto overflow-hidden'>
                    <div className='translate-z-0 grid col-start-1 col-end-auto row-start-1 row-end-auto transition-transform duration-[1.5s] ease-[cubic-bezier(0.65,0,0.35,1)]'>
                        <div className='z-[2] aspect-[892/669] grid grid-cols-1 grid-rows-1 col-start-1 col-end-auto row-start-1 row-end-auto overflow-hidden relative w-full '>
                            <picture className='col-start-1 col-end-auto row-start-1 row-end-auto object-cover transition-transform duration-[1s] ease-[cubic-bezier(0.65,0,0.35,1)]'>
                                <img src={OliveImage} alt="" className={`h-full w-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${currentIndex === 2 ? 'scale-100' : 'scale-150'
                                    }`} />
                            </picture>
                        </div>
                    </div>
                </div>
                <div className='px-6 lg:px-0 flex flex-col items-end h-full w-full justify-center relative z-[2]'>
                    <div className='grid w-full'>
                        <div className='translate-z-0 grid col-start-1 col-end-auto row-start-1 row-end-auto justify-self-end w-full transition-transform duration-[1.2s] ease-[cubic-bezier(0.65,0,0.35,1)]'>
                            <div className='h-auto px-8 pt-7 pb-10 lg:px-9 lg:pt-[70px] lg:pb-[54.9999px] w-full lg:w-[calc(100%+50px)] z-[2] items-center bg-no-repeat bg-cover flex flex-col col-start-1 col-end-auto row-start-1 row-end-auto justify-center justify-self-end relative -mt-11 lg:mt-0' style={{ backgroundImage: `url(${DKPaperCard})` }}>
                                <h2 className='mb-7 lg:mb-12 w-[86px] lg:w-24 h-7 lg:h-9 flex items-center justify-center'>
                                    <img src={NewImage} alt="NewImage" />
                                </h2>
                                <div className='flex flex-col items-center justify-center'>
                                    <h2 className='mb-7 text-3xl lg:text-[39.6667px] antialiased lining-nums proportional-nums font-normal font-[lining-nums,proportional-nums] tracking-[.02em] leading-[1.06] max-w-4/5 text-center'>
                                        Introducing our Curated Olive Collection
                                    </h2>
                                    <img src={FiligreeDetail1} alt="" className='scale-100 mb-7 w-[60px] bg-center bg-contain inline-block max-w-full align-sub' />
                                    <div className='mb-7 lg:mb-[42.5px] text-center '>
                                        Crafted from authentic olive varietals, hand-selected from small European family farms for bold, smooth flavor and a tender bite.
                                    </div>
                                    <a className="inline-block cursor-pointer text-decoration-none group relative overflow-hidden">
                                        <span className="relative p-3.5 lg:p-4 items-center bg-[#a6192e] text-[#f7eedf] gap-x-2.5 flex z-10">
                                            {/* Gold texture background that slides in on hover */}
                                            <span
                                                className="absolute inset-0 bg-[length:100%_100%] bg-no-repeat z-0 transition-all duration-500 ease-out transform -translate-x-full group-hover:translate-x-0"
                                                style={{ backgroundImage: `url(${HeadingGoldTexture})` }}
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
                                            <span className="text-[11.5px] lg:text-xs pr-1 font-extrabold font-[myriad-pro-semiextended,sans-serif] tracking-[.12em] leading-[1] uppercase transition-all duration-200 ease-out relative group-hover:translate-x-3 z-10"> View Our Product</span>

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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ];
    const goToPrev = () => {
        setDirection('prev');
        setCurrentIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setDirection('next');
        setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    };
    return (
        <section className='block'>
            <div id="controls-carousel" className='pb-8 md:py-[108.611px] block md:mx-auto overflow-hidden relative z-[1]'>
                <h2 className='font-10 antialiased lining-nums proportional-nums font-[minion-pro-display,serif] tracking-[.02em] leading-[1.06] text-center absolute h-px w-px overflow-hidden'></h2>
                <button onClick={goToPrev} className='left-5 lg:left-[41.5556px] text-[#f7eedf] absolute aspect-[25/366] lg:aspect-[25/194] transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] w-[6vw] z-[5] bg-transparent outline-none border-0 cursor-pointer hover:-translate-x-3'>
                    <span className='h-4 w-6 md:h-9 md:w-11 rotate-90 bg-contain inline-block align-sub max-w-full bg-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="block overflow-visible h-full w-full pointer-events-none">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </span>
                </button>
                <button onClick={goToNext} className='right-5 lg:right-[41.5556px] text-[#f7eedf] absolute aspect-[25/366] lg:aspect-[25/194] transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] w-[6vw] z-[5] bg-transparent outline-none border-0 cursor-pointer hover:translate-x-3'>
                    <span className='h-4 w-6 md:h-9 md:w-11 bg-contain inline-block align-sub max-w-full bg-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="block overflow-visible h-full w-full pointer-events-none">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </span>
                </button>
                <div className='box-content flex h-full relative w-full z-[1] [transform:translate3d(0px,0px,0px)] transition-transform duration-0 delay-0 ease-in-out'
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}>
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0">
                            {slide}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeatureCarousel

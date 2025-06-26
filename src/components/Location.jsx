import FiligreeDetails from '../assets/images/filigree-detail-2.png';
import FrameBorder from '../assets/images/frame-border.png';
import HeadingGoldTexture from '../assets/images/heading-gold-texture.png'

function Location() {
    return (
        <div
            className="bg-cover bg-no-repeat h-[466.2px] w-full pt-14 pb-12 px-6 lg:pt-20 lg:pb-[93px] lg:px-20 bg-[url('/images/bg-brick-mobile.png')] lg:bg-[url('/images/bg-brick-desktop.png')]">
            <div className="flex flex-col items-center justify-center">
                <img src={FiligreeDetails} alt="" className='bg-contain w-7 bg-center inline-block align-sub max-w-full mb-5 lg:mb-6' />
                <h2 className="lowercase font-variant-full inline-block text-lg lg:text-[22px] text-center mb-6 font-[minion-pro,'Times_New_Roman','Times','Georgia',serif] font-bold leading-[.81] tracking-[.08em]">
                    <span className='text-transparent bg-clip-text bg-cover bg-no-repeat' style={{ backgroundImage: `url(${HeadingGoldTexture})` }}>
                        delicious starts at the
                        <span className="items-center whitespace-nowrap inline font-variant-full lowercase align-baseline ml-1">
                            Deli
                            <sub className='relative top-[.25em] text-[35%] align-baseline text-transparent bg-clip-text bg-cover bg-no-repeat' style={{ backgroundImage: `url(${HeadingGoldTexture})` }}>™</sub>
                        </span>
                    </span>
                </h2>

                <p className="text-xl lg:text-3xl text-[#f7eedf] mb-8 lg:mb-[37.7778px] text-center leading-[1.28] antialiased font-[minion-pro-display,serif] lining-nums proportional-nums tracking-[.025em]">Freshly sliced by hand for
                    uncompromising flavor</p>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-x-[1.1458333333rem] lg:gap-x-6 gap-y-3.5 lg:gap-y-3.5">
                    <div
                        className="flex flex-col flex-nowrap bor justify-center items-center w-[19.2708333333rem] lg:w-96 h-[6.6666666667rem] lg:h-32 bg-contain bg-no-repeat gap-2.5 p-7 group" style={{ backgroundImage: `url(${FrameBorder})` }}>
                        <span
                            className="font-bold lowercase font-variant-full text-lg lg:text-[22px] tracking-[0.08em] leading-[0.81] mb-2 text-center font-[minion-pro,'Times_New_Roman','Times','Georgia',serif]">
                            <span className='text-transparent bg-clip-text bg-cover bg-no-repeat' style={{ backgroundImage: `url(${HeadingGoldTexture})` }}>Where to buy</span>
                        </span>
                        <a href=""
                            className="self-center inline-flex relative after:content-[''] after:h-full after:absolute after:top-0 after:w-full">
                            <span className="overflow-visible relative items-center gap-x-2.5 flex">
                                <span
                                    className="opacity-0 group-hover:opacity-100 transition-opacity transition-transform duration-200 absolute h-2.5 w-3 -translate-x-full translate-y-0 translate-z-0">
                                    <span className='h-2.5 w-3 block bg-center bg-contain max-w-full align-sub'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" className="w-full max-h-full block overflow-visible pointer-events-none align-middle">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                    </span>
                                </span>
                                <span
                                    className="text-xs font-semibold font-[myriad-pro-semiextended,sans-serif] leading-[1] tracking-[.12em] uppercase translate-gpu transition-transform duration-200 ease-out whitespace-nowrap group-hover:translate-x-1">
                                    find a deli
                                </span>
                                <span className="opacity-100 group-hover:opacity-0 translate-gpu transition-transform duration-200 transition-opacity ease-out h-2.5 w-3 relative">
                                    <span className='h-2.5 w-3 block bg-center bg-contain align-sub max-w-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" className="w-full max-h-full block overflow-visible pointer-events-none align-middle">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                    </span>
                                </span>
                                <span className="absolute bottom-[-10px] left-0 h-px bg-[#f7eedf] transition-all duration-300 ease-out origin-left transform -translate-x-2 scale-x-0 group-hover:scale-x-100 w-full"></span>
                            </span>

                        </a>
                    </div>
                    <div
                        className="flex flex-col flex-nowrap bor justify-center items-center w-[19.2708333333rem] lg:w-96 h-[6.6666666667rem] lg:h-32 bg-contain bg-no-repeat gap-2.5 p-7 group" style={{ backgroundImage: `url(${FrameBorder})` }}>
                        <span
                            className="font-bold lowercase font-variant-full text-lg lg:text-[22px] tracking-[0.08em] leading-[0.81] mb-2 text-center font-[minion-pro,'Times_New_Roman','Times','Georgia',serif]">
                            <span className='text-transparent bg-clip-text bg-cover bg-no-repeat' style={{ backgroundImage: `url(${HeadingGoldTexture})` }}>
                                Counter culture
                                <sub className='relative top-[.25em] text-[35%] align-baseline text-transparent bg-clip-text bg-cover bg-no-repeat' style={{ backgroundImage: `url(${HeadingGoldTexture})` }}>™</sub>
                            </span>
                        </span>
                        <a href=""
                            className="self-center inline-flex relative after:content-[''] after:h-full after:absolute after:top-0 after:w-full">
                            <span className="overflow-visible relative items-center gap-x-2.5 flex">
                                <span
                                    className="opacity-0 group-hover:opacity-100 transition-opacity transition-transform duration-200 absolute h-2.5 w-3 -translate-x-full translate-y-0 translate-z-0">
                                    <span className='h-2.5 w-3 block bg-center bg-contain max-w-full align-sub'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" className="w-full max-h-full block overflow-visible pointer-events-none align-middle">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                    </span>
                                </span>
                                <span
                                    className="text-xs font-semibold font-[myriad-pro-semiextended,sans-serif] leading-[1] tracking-[.12em] uppercase translate-gpu transition-transform duration-200 ease-out whitespace-nowrap group-hover:translate-x-1">
                                    guide to the deli
                                </span>
                                <span className="opacity-100 group-hover:opacity-0 translate-gpu transition-transform duration-200 transition-opacity ease-out h-2.5 w-3 relative">
                                    <span className='h-2.5 w-3 block bg-center bg-contain align-sub max-w-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" className="w-full max-h-full block overflow-visible pointer-events-none align-middle">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                    </span>
                                </span>
                                <span className="absolute bottom-[-10px] left-0 h-px bg-[#f7eedf] transition-all duration-300 ease-out origin-left transform -translate-x-2 scale-x-0 group-hover:scale-x-100 w-full"></span>
                            </span>

                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Location;
import VermontCheddarCheeseImg from '../assets/images/Vermont_Cheddar_Cheese.jpg';
import HeadingGoldTexture from '../assets/images/heading-gold-texture.png'
import RecipesInspiration from '../assets/images/Recipes_inspiration.jpg'

function FeatureCard() {
    return (
        <div className="flex px-6 lg:px-[75.5556px] justify-center">
            <div className="grid gap-x-5 gap-y-10 grid-cols-1 lg:grid-cols-2 lg:max-w-[76.3888888889vw]">
                {/* Product Card */}
                <div className="grid grid-cols-1 grid-rows-1 group">
                    {/* Product Card image */}
                    <div className="col-start-1 col-end-auto row-start-1 row-end-auto relative overflow-hidden aspect-[326/404] lg:aspect-[540/670] will-change-transform after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:transition-opacity after:ease-in-out after:duration-500">
                        <picture>
                            <img src={VermontCheddarCheeseImg} alt="" className='h-full w-full object-cover transition-transform duration-1000 ease-in-out opacity-100 group-hover:opacity-60 group-hover:scale-105' />
                        </picture>
                    </div>
                    {/* Product Card content */}
                    <div className='p-6 lg:p-8 flex flex-col col-start-1 col-end-auto row-start-1 row-end-auto justify-end relative z-[1]'>
                        <h2 className='mb-2 text-lg lg:text-xl font-variant-full font-[minion-pro,"Times_New_Roman","Times","Georgia",serif] font-bold tracking-[.08em] leading-[.81] lowercase'>
                            <span className='inline-block text-transparent bg-clip-text bg-cover bg-no-repeat' style={{ backgroundImage: `url(${HeadingGoldTexture})` }}>
                                Premium Deli Cheese
                            </span>
                        </h2>
                        <h3 className='font-[minion-pro-display,serif] font-normal tracking-[.025em] text-xl lg:text-3xl leading-[1.28] mb-2 lg:mb-4 antialiased lining-nums proportional-nums'>
                            Handcrafted Texture and Taste
                        </h3>
                        <a href="#" className="relative inline-flex self-start bg-transparent cursor-pointer">
                            <span className="relative flex items-center lg:gap-x-2 text-[#f7eedf] before:content-[''] before:absolute before:-bottom-2.5 before:left-0 before:h-px before:bg-[#f7eedf] before:transition-all before:duration-300 before:ease-out before:origin-left before:transform before:scale-x-0 before:group-hover:scale-x-100 before:w-full">
                                {/* Left arrow (visible by default) */}
                                <span className='h-2.5 w-3 transition-all duration-200 ease-out opacity-0 group-hover:opacity-100'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-full max-h-full block overflow-visible pointer-events-none align-middle">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </span>

                                {/* Text */}
                                <span className='relative text-xs font-[myriad-pro-semiextended,sans-serif] font-semibold tracking-[.12em] uppercase whitespace-nowrap transition-all duration-200 ease-out group-hover:translate-x-1'>
                                    View Product
                                </span>

                                {/* Right arrow (hidden by default) */}
                                <span className='h-2.5 w-3 transition-all duration-200 ease-out opacity-100 group-hover:opacity-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-full max-h-full block overflow-visible pointer-events-none align-middle">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>

                {/* Recipes Card */}
                <div className="grid grid-cols-1 grid-rows-1 group">
                    {/* Recipes Card image */}
                    <div className="col-start-1 col-end-auto row-start-1 row-end-auto relative overflow-hidden aspect-[326/404] lg:aspect-[540/670] will-change-transform after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:transition-opacity after:ease-in-out after:duration-500">
                        <picture>
                            <img src={RecipesInspiration} alt="" className='h-full w-full object-cover transition-transform duration-1000 ease-in-out opacity-100 group-hover:opacity-60 group-hover:scale-105' />
                        </picture>
                    </div>
                    {/* Recipes Card content */}
                    <div className='p-6 lg:p-8 flex flex-col col-start-1 col-end-auto row-start-1 row-end-auto justify-end relative z-[1]'>
                        <h2 className='mb-2 text-lg lg:text-xl font-variant-full font-[minion-pro,"Times_New_Roman","Times","Georgia",serif] font-bold tracking-[.08em] leading-[.81] lowercase'>
                            <span className='inline-block text-transparent bg-clip-text bg-cover bg-no-repeat' style={{ backgroundImage: `url(${HeadingGoldTexture})` }}>
                                Recipes
                            </span>
                        </h2>
                        <h3 className='font-[minion-pro-display,serif] font-normal tracking-[.025em] text-xl lg:text-3xl leading-[1.28] mb-2 lg:mb-4 antialiased lining-nums proportional-nums'>
                            Ignite Your Culinary Passion
                        </h3>
                        <a href="#" className="relative inline-flex self-start bg-transparent cursor-pointer">
                            <span className="relative flex items-center lg:gap-x-2 text-[#f7eedf] before:content-[''] before:absolute before:-bottom-2.5 before:left-0 before:h-px before:bg-[#f7eedf] before:transition-all before:duration-300 before:ease-out before:origin-left before:transform before:scale-x-0 before:group-hover:scale-x-100 before:w-full">
                                {/* Left arrow (visible by default) */}
                                <span className='h-2.5 w-3 transition-all duration-200 ease-out opacity-0 group-hover:opacity-100'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-full max-h-full block overflow-visible pointer-events-none align-middle">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </span>

                                {/* Text */}
                                <span className='relative text-xs font-[myriad-pro-semiextended,sans-serif] font-semibold tracking-[.12em] uppercase whitespace-nowrap transition-all duration-200 ease-out group-hover:translate-x-1'>
                                    View All Recipes
                                </span>

                                {/* Right arrow (hidden by default) */}
                                <span className='h-2.5 w-3 transition-all duration-200 ease-out opacity-100 group-hover:opacity-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" className="w-full max-h-full block overflow-visible pointer-events-none align-middle">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FeatureCard
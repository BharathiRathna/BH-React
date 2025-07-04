import React from 'react';

const NutritionWellness = () => {
  return (
    <div className="font-[minion-pro-display,serif] min-h-screen  flex flex-col items-center text-white p-4">
      {/* Nutrition & Wellness Section */}
      <div className="w-full max-w-2xl  flex flex-col items-center my-16 lg:my-20 lg:mb-20">
        <h2 className="text-[#ab965d] text-sm lg:text-lg font-bold uppercase text-center tracking-widest mb-2 lg:mb-6">NUTRITION & WELLNESS</h2>
        <h1 className="lg:text-4xl text-2xl  text-center tracking-widest mb-4 lg:mb-6 text-[#f7eedf] tracking-[.02em] leading-[1.06]">The Highest Standards</h1>
        
        <div className="space-y-4 text-center">
          <p className="lg:text-xl text-lg font-normal tracking-[.025em]  text-[#f7eedf]">
            Boar's Head products are made using only the highest quality ingredients and rise
            to standards rarely found today. Over 115 years ago, we opened our doors with a
            different set of rules. No cutting corners, no compromises. The result: exceptional
              Boar's Head products made using only the highest quality ingredients.
          </p>
        </div>
      </div>

       <section className="lg:mb-6 lg:w-full lg:px-20 px-2 opacity-65 aspect-[326/398] lg:aspect-[1420/710] object-cover">
            <div className="grid grid-cols-1 grid-rows-1">
                {/* image and bg-video section */}
                <div className="grid grid-cols-1 grid-rows-1 col-start-1 col-end-auto row-start-1 row-end-auto relative overflow-hidden aspect-[326/398] lg:aspect-[1280/720]">
                    <picture className="col-start-1 col-end-auto row-start-1 row-end-auto object-cover relative w-full h-full z-0">
                        <img src="/images/nutrition-video.jpg" alt="" className='w-full h-full block object-cover opacity-70'/>
                    </picture>
                    <video className='opacity-100 pointer-event-auto visible z-10 object-cover col-start-1 col-end-auto row-start-1 row-end-auto relative w-full h-full aspect-[1280/720] overflow-hidden grid-cols-1 grid-rows-1 transition-opacity transition-visibility duration-300 delay-0 ease ease-linear' data-lazyload="https://player.vimeo.com/progressive_redirect/playback/256102133/rendition/720p/file.mp4?loc=external&amp;signature=0bb840ff3ae2acbf7b2ee32ed302caec40a16b41bf9ad26b4a3f33890828054a" autoPlay
                        loop
                        muted
                        playsInline src="https://player.vimeo.com/progressive_redirect/playback/965091266/rendition/720p/file.mp4?loc=external&signature=b6fc862f2a95030ba209dab74fd38ca60cd9b806b9902948f4cb6b93bb1cf045">
                    </video>
                </div>   
            </div>
        </section>

      {/* Quality Promise Section */}
      <div className="max-w-2xl flex flex-col items-center mt-16 lg:mt-24">
        <h2 className="text-[#ab965d] text-sm lg:text-lg font-bold uppercase text-center mb-4 lg:mb-6">OUR QUALITY PROMISE</h2>
        
        <div className="space-y-4 text-center max-w-2xl">
          <p className="text-lg lg:text-xl text-[#f7eedf] mb-14 lg:mb-10 ">
            We're proud to say that all of our exceptional quality meats, cheeses, condiments,
            and hummus contain no gluten*, no artificial colors, flavors, or caramel color, no
            MSG added, no fillers or by-products, and no trans fat†.
          </p>
          
          <p className="text-[#bbae96] text-sm lg:text-[13px] text-center font-normal  leading-[1.35] text-center">
           *All Boar's Head meats, cheeses, condiments, and spreads are gluten free. †No trans-fat from partially hydrogenated oils
          </p>
        </div>
      </div>
    </div>
  );
};

export default NutritionWellness;
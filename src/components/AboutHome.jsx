import OurStory from '../assets/images/our-story.jpg'
import HeadingGoldTexture from '../assets/images/heading-gold-texture.png'

function AboutHome() {
    return (
        <section className="mb-[79px] lg:mb-[132.222px] mt-[85px] lg:mt-[173.778px] relative">
            <div className="grid grid-cols-1 grid-rows-1 px-6 lg:px-[75.5556px]">
                {/* image and bg-video section */}
                <div className="grid grid-cols-1 grid-rows-1 col-start-1 col-end-auto row-start-1 row-end-auto relative overflow-hidden aspect-[326/398] lg:aspect-[1280/720]">
                    <picture className="col-start-1 col-end-auto row-start-1 row-end-auto object-cover relative w-full h-full z-0">
                        <img src={OurStory} alt="" className='w-full h-full block object-cover opacity-70'/>
                    </picture>
                    <video className='opacity-100 pointer-event-auto visible z-10 object-cover col-start-1 col-end-auto row-start-1 row-end-auto relative w-full h-full aspect-[1280/720] overflow-hidden grid-cols-1 grid-rows-1 transition-opacity transition-visibility duration-300 delay-0 ease ease-linear' preload="none" data-lazyload="https://player.vimeo.com/progressive_redirect/playback/256102133/rendition/720p/file.mp4?loc=external&amp;signature=0bb840ff3ae2acbf7b2ee32ed302caec40a16b41bf9ad26b4a3f33890828054a" playsinline autoplay loop muted src="https://player.vimeo.com/progressive_redirect/playback/256102133/rendition/720p/file.mp4?loc=external&amp;signature=0bb840ff3ae2acbf7b2ee32ed302caec40a16b41bf9ad26b4a3f33890828054a">
                    </video>
                </div>
                {/* video details */}
                <div className='flex flex-col p-5 lg:p-14 col-start-1 col-end-auto row-start-1 row-end-auto z-[1] justify-end h-full w-full relative'>
                    <h2 className='text-lg lg:text-[22px] font-[minion-pro,"Times_New_Roman","Times","Georgia",serif] font-bold leading-[.81] tracking-[.08em] mb-1.5 lg:mb-2 lowercase font-variant-full'>
                        <span className='text-transparent bg-clip-text bg-cover bg-no-repeat' style={{ backgroundImage: `url(${HeadingGoldTexture})` }}>
                            our brand
                        </span>
                    </h2>
                    <h3 className='font-[minion-pro-display,serif] antialiased lining-nums proportional-nums font-normal leading-[1.28] text-xl lg:text-3xl tracking-[.025em] mb-2.5 lg:mb-3'>
                        Since 1905
                    </h3>
                </div>
            </div>
        </section>
    );
}

export default AboutHome;
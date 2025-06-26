import HeroHeaderImg from '../assets/images/hero-header.png';
function HeroHeader() {
    return (
        <section className="md:h-screen relative">
            <div className='grid grid-cols-1 grid-rows-1'>
                <div className="grid aspect-[374/690] lg:aspect-[1440/900] grid-cols-1 grid-rows-1 relative col-start-1 col-end-auto row-start-1 row-end-auto">
                    <video
                        src="https://player.vimeo.com/progressive_redirect/playback/1071632005/rendition/720p/file.mp4?loc=external&signature=aaea9e6911a3d2c5dc378d3c929394eb8bd4faea6b27df354b66e00abe84adbf"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover col-start-1 col-end-auto row-start-1 row-end-auto w-full h-full lg:h-screen"
                    ></video>
                </div>
                <div className="flex items-center justify-center absolute inset-0 z-10 w-full h-full">
                    <img src={HeroHeaderImg} alt="Hero Image" className="mt-12 w-[317px] md:w-2/5 object-contain" />
                </div>
            </div>
        </section>
    );
}

export default HeroHeader
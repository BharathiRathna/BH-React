import { useVideoModal } from '../context/VideoModalContext';

function VideoModal() {
    const { isModalOpen, setIsModalOpen } = useVideoModal();

    return (
        <div className={`${isModalOpen ? 'opacity-100 visible flex' : 'opacity-0 invisible hidden'} overflow-y-auto overflow-x-hidden px-6 py-8  items-center justify-center bottom-0 left-0 right-0 top-0 transition-opacity duration-200 ease z-[1100] fixed bg-black bg-opacity-75`}>
                <div className=" absolute transform w-full max-w-[95vw] lg:w-[calc(177.77778vh-126.22222px)] pt-10 mx-auto">
                    <div className="bg-transparent min-h-12 lg:max-h-14 relative lg:p-0">
                        <button onClick={() => setIsModalOpen(false)} className="absolute items-center text-[#f7eedf] gap-x-3 flex flex-nowrap font-[myriad-pro-semiextended,sans-serif] text-xs font-semibold h-auto w-auto left-auto right-auto -top-8 z-[1005] bg-transparent">
                            <span className="block h-3 w-3 bg-center bg-contain max-w-full align-sub">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-full h-full pointer-events-none overflow-visible">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </span>
                            <span className="text-[#f7eedf] text-xs font-semibold tracking-[.12em] uppercase">Close</span>
                        </button>
                        <div className="relative">
                            <div>
                                <div className="aspect-[16/9]">
                                    <iframe className="h-full w-full" src="https://www.youtube.com/embed/WvghNHARRr8?autohide=1&autoplay=0&controls=1&enablejsapi=1&hl=en&cc_load_policy=0&cc_lang_pref=en&fs=1&iv_load_policy=3&modestbranding=1&height=200&width=600&origin=https%3A%2F%2Fboarshead.com&rel=0&showinfo=0&wmode=transparent&widgetid=2&forigin=https%3A%2F%2Fboarshead.com%2F%23feature-0&aoriginsup=1&gporigin=https%3A%2F%2Fboarshead.com%2Fproducts%2Fturkey&vf=1" frameborder="0" title="Boar's Head 2025 New Dawn"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default VideoModal;
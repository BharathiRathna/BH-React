import BHMedallionGold from '../assets/images/boars-head-medallion-gold.png';
import HeadingGoldTexture from '../assets/images/heading-gold-texture.png';

function FooterSection() {
    return (
        <footer className="bg-black py-11 px-6 lg:py-14 lg:pr-[160.556px] lg:pl-[75.5556px] w-full h-full z-[1] relative">
            <div className="grid grid-cols-1 lg:grid-cols-[clamp(22.3958333333rem,29.8611111111vw,31.3125rem)_1fr]  [grid-template-areas:'logo'_'navigation'_'newsletter'_'social'_'copyright'] lg:[grid-template-areas:'logo_navigation'_'newsletter_navigation'_'social_copyright'] text-[#f7eedf] text-xl gap-x-[50px] lg:gap-x-14">
                {/* logo */}
                <div className="[grid-area:logo] mb-9 lg:mb-0 mx-auto lg:mx-0">
                    <img src={BHMedallionGold} alt="BH-logo" className="w-20 h-14 lg:mb-10" />
                </div>

                {/* newsletter */}
                <div className='[grid-area:newsletter] flex flex-col items-center lg:items-start justify-center mb-0 lg:mb-8'>
                    <p className='mb-4 lg:mb-[18.889px] text-center lg:text-left'>
                        <span className="font-[minion-pro-display,serif] antialiased lining-nums proportional-nums text-lg leading-[1.35] tracking-[.02em] mb-10">Sign Up for Our Dish Worthy<sub className='align-baseline leading-[1.35]'>®</sub> Newsletter</span>
                    </p>
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
                            <span className="text-xs pr-1 font-extrabold font-[myriad-pro-semiextended,sans-serif] tracking-[.12em] leading-[1] uppercase transition-all duration-200 ease-out relative group-hover:translate-x-3 z-10">join today</span>

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
                {/* social link */}
                <div className="[grid-area:social] pt-6 lg:pt-[18.8889px]">
                    <ul
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-x-1.5 lg:gap-x-3.5 text-[#ab965d]">
                        <li className="w-9 h-12 lg:w-[22.98px] lg:h-[34.98px]">
                            <a href="#" className="inline-flex items-center justify-center">
                                <span className='w-9 h-11 lg:w-[22.98px] lg:h-7 p-[6px] lg:pt-1 lg:pr-[5.838px] lg:pl-1 lg:pb-[5px] text-[#ab965d]'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 13 20"
                                        fill="currentColor"
                                        className='w-full h-full'
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <path
                                            d="M12.1617 0.559341C12.1617 0.412729 12.1034 0.272121 11.9998 0.16845C11.8961 0.0647791 11.7555 0.00653726 11.6089 0.00653726H8.84486C7.45304 -0.0627945 6.09035 0.421573 5.05453 1.35381C4.01871 2.28604 3.39398 3.59036 3.31682 4.98177V7.96692H0.552804C0.406191 7.96692 0.265583 8.02516 0.161913 8.12883C0.0582418 8.2325 0 8.37311 0 8.51972V11.3943C0 11.5409 0.0582418 11.6815 0.161913 11.7852C0.265583 11.8889 0.406191 11.9471 0.552804 11.9471H3.31682V19.3547C3.31682 19.5013 3.37506 19.6419 3.47874 19.7456C3.58241 19.8492 3.72301 19.9075 3.86963 19.9075H7.18645C7.33306 19.9075 7.47367 19.8492 7.57734 19.7456C7.68101 19.6419 7.73925 19.5013 7.73925 19.3547V11.9471H10.6359C10.7589 11.9489 10.8789 11.9096 10.977 11.8355C11.0751 11.7614 11.1457 11.6568 11.1777 11.538L11.9737 8.66345C11.9957 8.58177 11.9987 8.49613 11.9824 8.41313C11.9661 8.33013 11.9309 8.25197 11.8797 8.18469C11.8284 8.1174 11.7624 8.06278 11.6867 8.02503C11.611 7.98727 11.5276 7.96739 11.443 7.96692H7.73925V4.98177C7.76676 4.70811 7.89527 4.45452 8.09971 4.27053C8.30415 4.08653 8.56982 3.98535 8.84486 3.98673H11.6089C11.7555 3.98673 11.8961 3.92848 11.9998 3.82481C12.1034 3.72114 12.1617 3.58053 12.1617 3.43392V0.559341Z"
                                        />
                                    </svg>
                                </span>
                            </a>
                        </li>
                        <li className="h-12 w-11 lg:w-7 lg:h-[34.98px]">
                            <a href="" className='inline-flex items-center justify-center'>
                                <span className='h-11 w-11 lg:w-7 lg:h-7 py-1.5 pr-1 pl-2 lg:py-1 lg:pr-[3.114px] lg:pl-1'>
                                    <svg viewBox="0 0 23 23"
                                        xmlns="https://www.w3.org/2000/svg" fill="currentColor" className='h-full w-full'>
                                        <mask id="mask0_2028_2804" style={{ maskType: 'alpha' }}
                                            maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="23">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M0 0H22.9973V22.9973H0V0Z" fill="currentColor"></path>
                                        </mask>
                                        <g mask="url(#mask0_2028_2804)">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M11.4985 16.2462C9.29996 16.2462 7.51769 14.464 7.51769 12.2654C7.51769 10.0668 9.29996 8.28458 11.4985 8.28458C13.6971 8.28458 15.4793 10.0668 15.4793 12.2654C15.4793 14.464 13.6971 16.2462 11.4985 16.2462ZM11.4986 6.13281C8.11161 6.13281 5.36597 8.87845 5.36597 12.2654C5.36597 15.6524 8.11161 18.398 11.4986 18.398C14.8855 18.398 17.6312 15.6524 17.6312 12.2654C17.6312 8.87845 14.8855 6.13281 11.4986 6.13281Z"
                                                stroke="currentColor"></path>
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M18.3979 5.74949C18.3979 6.38455 17.883 6.89934 17.248 6.89934C16.613 6.89934 16.0981 6.38455 16.0981 5.74949C16.0981 5.11443 16.613 4.59961 17.248 4.59961C17.883 4.59961 18.3979 5.11443 18.3979 5.74949Z"
                                                stroke="currentColor"></path>
                                        </g>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M11.4987 0C8.37579 0 7.98421 0.0132383 6.75776 0.0692044C5.53386 0.125033 4.69799 0.319454 3.96659 0.603758C3.21045 0.897603 2.5692 1.29083 1.92991 1.93014C1.29067 2.56951 0.897496 3.21084 0.603686 3.96706C0.319416 4.69855 0.125019 5.53452 0.0691961 6.75856C0.0132367 7.98516 0 8.37679 0 11.5C0 14.6232 0.0132367 15.0148 0.0691961 16.2414C0.125019 17.4655 0.319416 18.3015 0.603686 19.0329C0.897496 19.7892 1.29067 20.4305 1.92991 21.0699C2.5692 21.7092 3.21045 22.1024 3.96659 22.3963C4.69799 22.6805 5.53386 22.875 6.75776 22.9308C7.98421 22.9868 8.37579 23 11.4987 23C14.6215 23 15.0131 22.9868 16.2395 22.9308C17.4634 22.875 18.2993 22.6805 19.0307 22.3963C19.7868 22.1024 20.4281 21.7092 21.0673 21.0699C21.7066 20.4305 22.0998 19.7892 22.3936 19.0329C22.6778 18.3015 22.8722 17.4655 22.9281 16.2414C22.984 15.0148 22.9973 14.6232 22.9973 11.5C22.9973 8.37679 22.984 7.98516 22.9281 6.75856C22.8722 5.53452 22.6778 4.69855 22.3936 3.96706C22.0998 3.21084 21.7066 2.56951 21.0673 1.93014C20.4281 1.29083 19.7868 0.897603 19.0307 0.603758C18.2993 0.319454 17.4634 0.125033 16.2395 0.0692044C15.0131 0.0132383 14.6215 0 11.4987 0ZM11.4986 2.07206C14.5689 2.07206 14.9326 2.08379 16.1451 2.13912C17.2662 2.19024 17.875 2.37759 18.2802 2.53508C18.8169 2.7437 19.2 2.99289 19.6023 3.39534C20.0047 3.79774 20.2539 4.18083 20.4625 4.71762C20.6199 5.12285 20.8073 5.73176 20.8584 6.853C20.9137 8.06563 20.9254 8.42936 20.9254 11.5C20.9254 14.5706 20.9137 14.9343 20.8584 16.147C20.8073 17.2682 20.6199 17.8771 20.4625 18.2824C20.2539 18.8192 20.0047 19.2022 19.6023 19.6046C19.2 20.0071 18.8169 20.2563 18.2802 20.4649C17.875 20.6224 17.2662 20.8097 16.1451 20.8609C14.9328 20.9162 14.5691 20.9279 11.4986 20.9279C8.42813 20.9279 8.06453 20.9162 6.85219 20.8609C5.73108 20.8097 5.12224 20.6224 4.71706 20.4649C4.18033 20.2563 3.79729 20.0071 3.39494 19.6046C2.99259 19.2022 2.74337 18.8192 2.53478 18.2824C2.37731 17.8771 2.18998 17.2682 2.13886 16.147C2.08354 14.9343 2.07181 14.5706 2.07181 11.5C2.07181 8.42936 2.08354 8.06563 2.13886 6.853C2.18998 5.73176 2.37731 5.12285 2.53478 4.71762C2.74337 4.18083 2.99254 3.79774 3.39494 3.39534C3.79729 2.99289 4.18033 2.7437 4.71706 2.53508C5.12224 2.37759 5.73108 2.19024 6.85219 2.13912C8.06467 2.08379 8.42836 2.07206 11.4986 2.07206Z"
                                            stroke="currentColor"></path>
                                    </svg>
                                </span>
                            </a>
                        </li>
                        <li className="w-[52.78px] h-11 lg:w-[33.98px] lg:h-[34.98px] ">
                            <a href="" className='inline-flex items-center justify-center'>
                                <span className='w-[52.78px] h-11 lg:w-[33.98px] lg:h-[27.98px] pt-[7.766px] pr-[5.383px] pl-[6.999px] pb-[6.213px] lg:pt-[5px] lg:pb-1 lg:pr-[3.465px] lg:pl-[4.506px]'>
                                    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 27 18" fill="currentColor" className='w-full h-full'>
                                        <path
                                            d="M25.95 2.759C25.648 1.673 24.748.818 23.609.527 21.54 0 13.252 0 13.252 0S4.964 0 2.897.527C1.757.817.858 1.673.554 2.76 0 4.729 0 8.835 0 8.835s0 4.107.554 6.076c.304 1.086 1.203 1.941 2.343 2.232 2.068.527 10.355.527 10.355.527s8.29 0 10.356-.527c1.14-.29 2.039-1.146 2.343-2.232.554-1.968.554-6.076.554-6.076s0-4.107-.554-6.076Zm-15.408 9.805V5.106l6.927 3.729-6.927 3.73Z">
                                        </path>
                                    </svg>
                                </span>
                            </a>
                        </li>
                        <li className="w-10 h-12 lg:w-[26.98px] lg:h-[34.98px]">
                            <a href="" className='inline-flex items-center justify-center'>
                                <span className='w-10 h-11 lg:w-[26.98px] lg:h-[28.98px] pt-1.5 pr-[5.803px] pl-1.5 pb-1 lg:pt-1 lg:pb-0.5 lg:px-1'>
                                    <svg xmlns="https://www.w3.org/2000/svg" width="21" height="21"
                                        viewBox="0 0 21 21" fill="currentColor" className='w-full h-full'>
                                        <path
                                            d="M10.2137 0C4.66238 0 0.162109 4.49994 0.162109 10.05C0.162109 14.1665 2.63663 17.702 6.1788 19.2564C6.1489 18.5541 6.17227 17.7125 6.35218 16.9491C6.54641 16.1327 7.64673 11.4715 7.64673 11.4715C7.64673 11.4715 7.32611 10.8297 7.32611 9.88187C7.32611 8.39202 8.18922 7.27986 9.26341 7.27986C10.1785 7.27986 10.6193 7.96686 10.6193 8.78855C10.6193 9.70698 10.0341 11.0825 9.73279 12.3552C9.48126 13.4217 10.2672 14.2916 11.3181 14.2916C13.2227 14.2916 14.5057 11.8449 14.5057 8.94761C14.5057 6.74513 13.0219 5.09623 10.3233 5.09623C7.27384 5.09623 5.37574 7.36956 5.37574 9.90901C5.37574 10.7852 5.63254 11.4021 6.03809 11.8801C6.22328 12.1004 6.24941 12.1891 6.18157 12.4407C6.13332 12.6259 6.02377 13.0711 5.97678 13.247C5.91019 13.5021 5.7044 13.5925 5.47348 13.4993C4.06938 12.9249 3.41632 11.3885 3.41632 9.65948C3.41632 6.80393 5.82426 3.38098 10.5984 3.38098C14.4363 3.38098 16.9631 6.15713 16.9631 9.13808C16.9631 13.0809 14.7703 16.0272 11.5384 16.0272C10.4537 16.0272 9.43302 15.4397 9.0835 14.7736C9.0835 14.7736 8.49954 17.0901 8.37692 17.5366C8.16309 18.3111 7.74598 19.0865 7.36505 19.6901C8.26863 19.9567 9.22421 20.102 10.2137 20.102C15.7648 20.102 20.2638 15.602 20.2638 10.0502C20.2638 4.50019 15.7648 0.000251281 10.2137 0.000251281V0Z"
                                            stroke="currentColor"></path>
                                    </svg>
                                </span>
                            </a>
                        </li>
                        <li className="w-[34.14px] h-[42.84px] lg:w-[23.89px] lg:h-[32.89px]">
                            <a href="" className='inline-flex items-center justify-center'>
                                <span className='w-[34.14px] h-[37.25px] lg:w-[23.89px] lg:h-[25.89px] pt-1.5 pr-[5.803px] pl-1.5 pb-1 lg:pt-1 lg:pb-0.5 lg:px-1'>
                                    <svg xmlns="https://www.w3.org/2000/svg" width="18" height="18"
                                        viewBox="0 0 26 26" fill="currentColor" className='w-full h-full'>
                                        <path
                                            d="M15.4542 11.0247L25.0588 0.0999756H22.7825L14.4432 9.58551L7.78226 0.0999756H0.0996094L10.1722 14.444L0.0996094 25.9H2.37581L11.1828 15.8829L18.217 25.9H25.8996L15.4536 11.0247H15.4542ZM12.3367 14.5701L11.316 13.1419L3.19586 1.77657H6.69195L13.2447 10.9489L14.2652 12.3771L22.7836 24.2996H19.2879L12.3367 14.5708V14.5701Z"
                                            stroke="currentColor"></path>
                                    </svg>
                                </span>
                            </a>
                        </li>
                        <li className="w-10 h-12 lg:w-[26.98px] lg:h-[35.98px]">
                            <a href="" className='inline-flex items-center justify-center '>
                                <span className='w-10 h-11 lg:w-[26.98px] lg:h-7 pt-1.5 pr-[5.803px] pl-1.5 pb-1 lg:pt-1 lg:pb-0.5 lg:px-1'>
                                    <svg xmlns="https://www.w3.org/2000/svg" width="21" height="21"
                                        viewBox="0 0 30 30" fill="currentColor" className='w-full h-full'>
                                        <path
                                            d="M14.9334 0.732788C12.0985 0.732788 9.32716 1.57345 6.96998 3.14847C4.6128 4.72349 2.7756 6.96212 1.69071 9.58128C0.60582 12.2004 0.321963 15.0825 0.875036 17.863C1.42811 20.6435 2.79327 23.1975 4.79789 25.2021C6.8025 27.2067 9.35654 28.5719 12.137 29.125C14.9175 29.678 17.7996 29.3942 20.4187 28.3093C23.0379 27.2244 25.2765 25.3872 26.8515 23.03C28.4265 20.6728 29.2672 17.9015 29.2672 15.0666C29.2634 11.2662 27.752 7.62254 25.0647 4.93525C22.3775 2.24796 18.7338 0.736583 14.9334 0.732788ZM23.4463 11.7884V12.7144C23.4463 12.7853 23.4321 12.8554 23.4046 12.9207C23.377 12.986 23.3367 13.0451 23.2859 13.0946C23.2351 13.144 23.1749 13.1828 23.1089 13.2086C23.0429 13.2344 22.9724 13.2467 22.9016 13.2448C21.3882 13.1375 19.9404 12.5849 18.7405 11.6566V18.4336C18.7403 19.1837 18.5906 19.9262 18.3002 20.6177C18.0098 21.3093 17.5845 21.9361 17.0491 22.4614C16.5089 22.9998 15.867 23.4254 15.1607 23.7133C14.4544 24.0012 13.6979 24.1457 12.9353 24.1384C11.4015 24.1358 9.92938 23.534 8.83295 22.4614C8.13545 21.7582 7.63306 20.8855 7.37519 19.9292C7.11733 18.9729 7.11289 17.9659 7.3623 17.0074C7.59021 16.0871 8.05032 15.2415 8.69964 14.552C9.18388 13.9601 9.79428 13.484 10.4862 13.1584C11.1781 12.8327 11.9341 12.6659 12.6988 12.67H13.8741V15.111C13.8747 15.1819 13.8601 15.2521 13.8313 15.3169C13.8026 15.3817 13.7603 15.4397 13.7074 15.4869C13.6545 15.5341 13.5922 15.5694 13.5245 15.5906C13.4569 15.6118 13.3855 15.6184 13.3151 15.6098C12.6327 15.4048 11.8973 15.4728 11.264 15.7995C10.6307 16.1261 10.149 16.6859 9.92037 17.3608C9.69175 18.0357 9.7341 18.773 10.0385 19.4173C10.3429 20.0615 10.8855 20.5625 11.5521 20.8144C11.9391 21.0366 12.372 21.167 12.8163 21.1971C13.1603 21.2115 13.5043 21.1685 13.8311 21.0653C14.377 20.8816 14.8517 20.532 15.1892 20.0653C15.5266 19.5986 15.7098 19.0381 15.7132 18.4623V6.11369C15.713 6.046 15.7262 5.97893 15.7519 5.91633C15.7777 5.85373 15.8156 5.79684 15.8634 5.7489C15.9112 5.70097 15.968 5.66293 16.0305 5.63698C16.093 5.61103 16.1601 5.59768 16.2278 5.59768H18.256C18.3879 5.59749 18.5148 5.64795 18.6106 5.73864C18.7063 5.82933 18.7636 5.95333 18.7706 6.08503C18.8447 6.71741 19.0457 7.32833 19.3615 7.88125C19.6772 8.43416 20.1012 8.91771 20.6082 9.30296C21.2935 9.81739 22.1074 10.1328 22.9603 10.2146C23.0881 10.2255 23.2076 10.2824 23.2966 10.3746C23.3857 10.4668 23.4384 10.5882 23.4448 10.7163L23.4463 11.7884Z"
                                            stroke="currentColor"></path>
                                    </svg>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* navigation link */}
                <div className="[grid-area:navigation] flex flex-row flex-wrap lg:flex-nowrap w-full gap-x-4 items-start justify-center lg:justify-start lg:gap-x-[18.8889px]">
                    <div className="flex flex-col basis-[45%] lg:basis-1/2 items-start justify-center mb-[50px] lg:mb-0 lg:justify-start lg:items-start">
                        <h2
                            className="font-variant-full lowercase mb-3.5 lg:mb-4 text-lg leading-[1] tracking-[.08em] font-bold font-[minion-pro,'Times_New_Roman','Times','Georgia',serif]">
                            About us</h2>
                        <ul className="text-lg lg:text-xl text-[#f7eedf] flex flex-col gap-y-2.5 font-[minion-pro-display,serif] lining-nums proportional-nums leading-[1.35] tracking-[.025em] lg:tracking-[.02em]">
                            <li>Careers</li>
                            <li>Foodservices</li>
                            <li>Awards</li>
                        </ul>
                    </div>
                    <div className="flex flex-col basis-[45%] lg:basis-1/2 items-start justify-center mb-[50px] lg:mb-0 lg:justify-start lg:items-start">
                        <h2
                            className="font-variant-full lowercase mb-3.5 lg:mb-4 text-lg leading-[1] tracking-[.08em] font-bold font-[minion-pro,'Times_New_Roman','Times','Georgia',serif]">
                            resources</h2>
                        <ul className="text-lg lg:text-xl text-[#f7eedf] flex flex-col gap-y-2.5 font-[minion-pro-display,serif] lining-nums proportional-nums leading-[1.35] tracking-[.025em] lg:tracking-[.02em]">
                            <li>FAQs</li>
                            <li>Contact Us</li>
                            <li>Animal Well-Being</li>
                            <li>Become a Local Purveyor</li>
                        </ul>
                    </div>
                    <div className="items-center lg:items-start flex flex-col justify-start mb-[50px] w-[75vw] lg:w-full text-[#f7eedf] text-xl lg:pl-9">
                        <h2 className="font-variant-full lowercase mb-3.5 lg:mb-4 text-lg leading-[1] lg:leading-[1.28] tracking-[.08em] lg:tracking-[.06em] font-bold font-[minion-pro,'Times_New_Roman','Times','Georgia',serif]">Contact Us</h2>
                        <p className='antialiased text-lg lg:text-xl leading-[1.35] tracking-[.025em] lg:tracking-[.02em] font-[minion-pro-display,serif] mb-5 lg:6 text-center lg:text-left lining-nums proportional-nums'>Please reach out Monday through Friday, from 8 a.m. to 5 p.m. ET.</p>
                        <a href="tel:8003526277" className="text-[#ab965d] hover:text-[#f7eedf] text-base lg:text-sm font-bold font-[myriad-pro-semiextended,sans-serif] tracking-[.1em] uppercase">(800) 352-6277</a>
                    </div>
                </div>
                {/* copyright */}
                <div className="[grid-area:copyright] flex flex-col lg:flex-row items-center lg:items-start  justify-between mt-10 lg:mt-11">
                    <p className="text-[#bbae96] text-lg lg:text-sm lg:flex lg:flex-col flex-nowrap lg:flex-wrap font-[minion-pro-display,serif] inline  align-baseline antialiased lining-nums proportional-nums text-center leading-[1.35] tracking-[.025em]  order-2 lg:order-0 mt-[50px] lg:mt-0">
                        <span>© 2025 Boar’s Head Brand / All rights reserved.</span>
                        <a href="" className="text-center underline">Privacy Policy</a>
                    </p>
                    <ul className="flex flex-row uppercase gap-x-[15px] lg:gap-x-3.5 text-base font-[myriad-pro-semiextended,sans-serif] font-semibold tracking-[.1em] mb-7 lg:mb-0">
                        <li> <a href="" className="underline">english</a></li>
                        <li><a href="" className="underline">Español</a></li>
                    </ul>
                    <a href=""
                        className="uppercase text-[#ab965d] underline text-base font-[myriad-pro-semiextended,sans-serif] font-semibold rotate-0">sitemap</a>
                </div>
            </div>
        </footer>
    );
}

export default FooterSection;
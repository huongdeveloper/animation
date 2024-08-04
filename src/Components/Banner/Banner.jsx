import BackgroundWebpage from "./webpage/BackgroundWebpage"
import bannercenter from "../../assets/bannerApp/contentBan.jfif";
import GroupTop from "./webpage/GroupTop";
import Frame from "./webpage/Frame";
import Explore from "./webpage/Explore";
import Tick from "./webpage/Tick";
import { IoIosArrowRoundForward } from "react-icons/io";
import nui from "../../assets/bannerApp/nuicenter.png";
import may3 from "../../assets/Footer/may3.png";
import may5 from "../../assets/Footer/may5.png";
import may6 from "../../assets/Footer/may6.png";
import may4 from "../../assets/Footer/may 4.png";
import Beautiful from "./webpage/Beautiful";
const Banner = () => {
    return (
        <div className="Banner-contents container px-0">
            <div className="Banner-Animation container px-0">
                <svg height="148" viewBox="0 0 1600 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.6749 7.67356C27.619 7.67159 27.5632 7.6696 27.5075 7.66759C27.6907 7.66759 27.8665 7.66752 28.0351 7.66738C31.7785 7.60562 32.8779 7.66342 28.0351 7.66738C27.9176 7.66932 27.7975 7.67138 27.6749 7.67356C42.7482 8.20436 64.3362 7.30376 78.8556 9.01005C88.853 10.1849 99.6545 10.9359 110.031 11.4368C128.356 12.3212 147.8 15.5909 165.353 17.4778C203.584 21.5877 268.22 28.1687 305.184 21.1437C331.301 16.1804 350.551 9.13432 382.359 8.59698C399.327 8.31035 415.315 7.01793 431.874 6.7382C439.03 6.61731 462.033 1.69265 462.744 1.88473C479.896 6.52087 498.904 12.5454 521.274 14.225C556.973 16.9052 593.059 15.2874 628.555 19.285C631.499 19.6166 665.36 24.2008 668.441 22.8993C675.153 20.0647 684.719 18.4414 694.574 16.9615C705.736 15.2854 714.612 11.3851 727.736 11.3851C735.271 11.3851 736.419 10.6779 742.713 9.7329C747.472 9.01823 753.475 10.1577 757.842 9.01005C765.492 6.99983 770.861 1.16187 781.224 1.16187C786.317 1.16187 789.248 2.09126 793.602 2.09126C799.973 2.09126 804.446 0.357599 811.483 0.232481C827.295 -0.0486955 827.378 -1.00511 835.628 4.87943C839.652 7.7492 845.243 8.79998 852.133 10.6623C860.266 12.8606 867.548 14.7273 878.113 15.8256C895.131 17.5948 918.897 16.6258 933.129 20.4725C941.333 22.69 957.573 22.7519 966.138 25.1195C979.324 28.7645 1002.17 30.0538 1017.79 32.5546C1025.2 33.7408 1074.78 41.4527 1081.06 38.8021C1092.96 33.7779 1117.47 29.0249 1134.7 25.7907C1147.1 23.4639 1157.52 23.4653 1171.84 23.4671L1173.06 23.4672C1179.91 23.4672 1180.13 25.1681 1186.2 25.326C1194.11 25.5314 1200.6 26.2554 1208.97 26.2554C1241.19 26.2554 1272.18 25.8757 1303.57 28.5272C1316.51 29.6202 1331.67 31.8317 1345.14 31.8317H1386.4C1390.43 31.8317 1400.33 32.4514 1402.9 31.367C1406.11 30.0134 1415.64 32.5931 1419.41 32.9676C1432.69 34.2878 1446.64 38.9879 1460.67 39.2668C1466.15 39.3758 1469.48 40.177 1474.42 40.9191C1483.03 42.2114 1494.29 40.2294 1503.15 41.5903C1515.38 43.468 1538.17 41.4592 1548.54 44.3785C1553.46 45.7627 1585.77 45.2624 1591.72 45.8363C1611.49 47.7453 1612.5 54.8912 1612.5 60.5C1629.23 84.4802 1610.51 114.331 1607.18 140.149C1608.22 141.05 1609.9 141.643 1612.5 141.706C1615.12 141.769 1612.16 141.759 1607 141.721C1606.8 143.599 1606.69 145.454 1606.69 147.283V141.718C1597.61 141.65 1582.12 141.5 1577.58 141.5L1576.11 141.5C1565.43 141.499 1553.51 141.499 1542.28 141.706C1505.64 142.383 1470.21 142.239 1433.93 141.448C1377.67 140.222 1319.84 135.923 1263.83 135.923C1207.62 135.923 1152.65 134.994 1096.8 134.994H992.118C958.151 134.994 924.985 136.604 891.103 136.801C814.228 137.249 737.228 136.853 660.342 136.853H167.034H66.7827C55.5225 136.853 41.9085 137.543 30.8696 136.853C-8.50056 136.853 -13.1416 108.5 -5.50055 108.5C-13.2817 94.5666 -0.000397682 85.5607 -0.000397682 71.3824V23.4672V11.3851C-0.000397682 8.51881 19.4581 7.81962 27.6749 7.67356Z" fill="#122718" />
                </svg>

            </div>
            <div className="Banner-Background ">
                <div className="Banner-BackgroundA">
                    <div className="Banner-Back-one pt-56 z-10">
                        <BackgroundWebpage />
                    </div>
                    <div className="Banner-Back">
                        <img src={bannercenter} alt="bannercenter" className="Banner-Back-img" />
                        <div className="blur-overlay"></div>
                    </div>
                    <div className="Banner-overlay"></div>
                </div>
                <div className="Banner-section">
                    <div className="Banner-Banner-one z-30">
                        <div className="Banner-GroupTop">
                            <div className="Banner-GroupTop-one"><GroupTop /></div>
                            <div className="Banner-GroupTop-Text font-bold">Hong Hao Travel is a travel company in Ha Giang, we specialize in organizing
                                unforgettable tours to explore Ha Giang loop but still focus on the pristine
                                nature of nature.
                            </div>
                            <div className="Banner-Frame">
                                <div className="Banner-Frame-one">
                                    <Frame />
                                </div>
                                <div className="Banner-Frame-two">
                                    <Frame />
                                    <h5>Personalization</h5>
                                </div>
                                <div className="Banner-Frame-father">
                                    <Frame />
                                    <h5>Tour guide with good English</h5>
                                </div>
                                <div className="Banner-Frame-four">
                                    <Frame />
                                </div>
                                <div className="Banner-Frame-five">
                                    <Frame />
                                    <h5>Unique Experiences</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Banner-GroupCenter z-30">
                        <div className="Banner-GroupCenterB">
                            <div className="Banner-Explore">
                                <h3 className="font-extrabold leading-4">EXPLORE YOUR JOURNEY WITH US</h3>
                                <Explore />
                            </div>
                            <div className="Banner-Tour">
                                <div className="Banner-Tour-left">
                                    <h1 className="font-black">HONG HAO MOTORBIKE TOUR</h1>
                                    <div className="Banner-Tour-Text">
                                        <span>Experience the raw beauty of Hà Giang with our immersive travel adventures.
                                            From rugged mountain landscapes to vibrant ethnic cultures, Hà Giang offers a truly
                                            unique and authentic experience. Explore remote villages.
                                        </span>
                                        <li>
                                            <ul className="mr-2"><Tick /></ul>
                                            <ul>Tours accommodate a maximum of 10 guests</ul>
                                        </li>
                                        <li>
                                            <ul className="mr-2"><Tick /></ul>
                                            <ul>Flexible cancellation policy</ul>
                                        </li>
                                        <li>
                                            <ul className="mr-2"><Tick /></ul>
                                            <ul>Book now, pay later</ul>
                                        </li>
                                        <li>
                                            <ul className="mr-2"><Tick /></ul>
                                            <ul>Fluent English-speaking guides</ul>
                                        </li>
                                        <li>
                                            <ul className="mr-2"><Tick /></ul>
                                            <ul>Creating job opportunities for the Vietnamese community</ul>
                                        </li>
                                    </div>
                                    <div className="Banner-Tour-btn mt-8">
                                        <button className="Banner-Tour-btnOne"><IoIosArrowRoundForward className="ml-20" /></button>
                                        <button className="Banner-Tour-btnTwo ml-5"><IoIosArrowRoundForward className="ml-24" /></button>
                                    </div>
                                </div>
                                <div className="Banner-Tour-Center"></div>
                                <div className="Banner-Tour-right">
                                    <div className="Banner-Tour-right-img">
                                        <img src={nui} alt="Nui" className="Banner-right-img w-full h-72 relative z-10" />
                                    </div>
                                    <img src={may4} alt="May3" className="w-60 h-56 absolute -top-11 right-32 z-20 " />
                                    <img src={may3} alt="May3" className="w-60 h-56 absolute top-2 right-80 z-20 opacity-80" />
                                    <img src={may5} alt="May5" className="w-96 h-48 absolute top-24 right-72 z-20 opacity-80" />
                                    <img src={may6} alt="May6" className="w-96 h-40 absolute top-36 right-40 z-20 opacity-30" />
                                </div>
                            </div>
                            <div className="Banner-Welcome">
                                <h4>WELCOME TO</h4>
                                <h1>HA GIANG NATURALLY</h1>
                                <div className="Banner-Beautiful"><Beautiful /></div>
                                <div className="Banner-Tour-mountain">
                                    <img src={bannercenter} alt="bannercenter" className="rounded-xl" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div >
    )
}

export default Banner

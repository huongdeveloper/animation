import { useRef, useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaArrowRightLong } from "react-icons/fa6";
import Item from './Item/Item';
import House from './Item/House';
import User from './Item/User';
import Train from './Item/Train';
import Motorbike from './Item/Motorbike';
import { useMediaQuery } from 'react-responsive';
import trips from './tripsData';
const Explore = () => {
    const sliderRef = useRef(null);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [slidesToShow, setSlidesToShow] = useState(1);

    useEffect(() => {
        if (isMobile) {
            setSlidesToShow(1.1);
        } else {
            setSlidesToShow(5);
        }
    }, [isMobile]);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(0);
        }
    }, []);

    const settings = {
        // dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        vertical: false,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesPerRow: 1,
        rows: 1,

    };

    return (
        <div className="Explore-contents">
            <div className="Explore-contents-text">
                <h5>EXPLORE</h5>
                <h1>BEST TRIPS FOR YOU</h1>
            </div>
            <div className="Explore-contents-slider">
                <div className="Explore-slider">
                    <Slider ref={sliderRef} {...settings}>
                        {trips.map((trip, index) => (
                            <div key={index} className="grid__colum-2-4">
                                <div className="home-Explore-item">
                                    <div className='home-Explore-item-top'>
                                        <img src={trip.img} alt="bannercenter" className="home-Explore-item-img" />
                                        <div className='home-Explore-text'>
                                            <div className='home-Explore-margin'>
                                                <div className='home-Explore-Nights'>
                                                    <Item />
                                                    <span>{trip.daysNights}</span>
                                                </div>
                                                <div className='home-Explore-money'>
                                                    <div className='home-Explore-money-left'>
                                                        <h3>${trip.selfDrivingPrice}</h3>
                                                        <span>Self - Driving</span>
                                                    </div>
                                                    <div className='home-Explore-money-right'>
                                                        <h3>${trip.localDriverPrice}</h3>
                                                        <span>Local driver</span>
                                                    </div>
                                                </div>
                                                <div className='home-Explore-location'>
                                                    <h1>{trip.title}</h1>
                                                    <ul className='home-Explore-ul'>
                                                        <li><House /></li>
                                                        <li className='home-Explore-li'><p>Accomodation:</p><span>{trip.accommodation}</span></li>
                                                    </ul>
                                                    <ul className='home-Explore-ul'>
                                                        <li><Motorbike /></li>
                                                        <li className='home-Explore-li'><p>Motorbike:</p><span>{trip.motorbike}</span></li>
                                                    </ul>
                                                    <ul className='home-Explore-ul'>
                                                        <li><User /></li>
                                                        <li className='home-Explore-li'><p>Tour guide:</p><span>{trip.tourGuide}</span></li>
                                                    </ul>
                                                    <ul className='home-Explore-ul'>
                                                        <li><Train /></li>
                                                        <li className='home-Explore-li'><p>Transport:</p><span>{trip.transport}</span></li>
                                                    </ul>

                                                </div>
                                            </div>

                                        </div>
                                        <div className='Explore-overlay'></div>
                                    </div>
                                    <div className='home-Explore-item-bottom'>
                                        <button>BOOK NOW <FaArrowRightLong className="ml-1" /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div >
        </div >
    )
}

export default Explore
import girlImg from "../images/6cdeda1b6a898e776452dfb4e0160606.png";
import AmenetiesCard from "./AmenetiesCard";
import Heading from './Heading';
import React, { useState } from "react";
import Slider from "react-slick";

export default function Ameneties() {
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        afterChange: function (currentSlide) {
            setActiveSlide(currentSlide); // Update active slide index
            console.log("after change", currentSlide);
        },
    };

    return (
        <>
            <div id="amenities" className='lg:container mx-auto lg:mt-28 lg:mb-16 my-6'>
                <Heading heading="AMENETIES" para="Within the premises of the Sushma Township are reputed Schools." />
            </div>
            <div className='md:flex justify-center items-center lg:h-[576px]'>
                <div className='md:w-[45%] lg:h-full h-[300px]'>
                    <img className='w-full h-full ' src={girlImg} alt="" />
                </div>
                <div className='md:w-[55%] bg-[#254E58] h-full flex justify-center items-center'>
                    <div className="slider-container  md:min-w-0 py-3 ">
                        <Slider {...settings} className="ameneties mb-2 ">
                            <div>
                                <AmenetiesCard />
                            </div>
                            <div>
                                <AmenetiesCard />
                            </div>
                            <div className="">
                                <AmenetiesCard />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}

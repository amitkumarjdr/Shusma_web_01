import React, { Component } from "react";
import Slider from "react-slick";


import ShusmaPristineCard from './ShusmaPristineCard';

export default function WhyShushma() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        arrows:false,
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };

    return (
        <div className='bg-[#E1E8EE] lg:py-16 py-4'>
            <div className='lg:container mx-auto text-center'>
                <p className='lg:text-[40px] text-[25px] sm:text-[30px] md:text-[35px] text-[#254E58] font-[700] uppercase'>
                    Why Sushma pristine?
                </p>
                <p className='lg:text-[33.52px] md:text-[26px] sm:text-[22px] text-[15px] text-[#212728] font-[700] uppercase sm:py-6 py-3 px-4 '>
                    12% ASSURED RETURNS , 9 YEARS LEASE GUARANTEE
                </p>
                <div className="slider-container">
                    <Slider {...settings} className="why_shushma_slide">
                        {
                            [1, 2, 3].map((item, Index) => (
                                <div key={Index}>
                                    <div className='grid md:grid-cols-3 grid-cols-1 h-[350px] sm:h-auto overflow-y-auto sm:grid-cols-2 sm:gap-4 gap-2 grid-flow-row sm:py-5 py-2 ' >
                                        {
                                            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                                                <ShusmaPristineCard index={index} index_2={Index} />
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>


            </div>
        </div>
    )
}

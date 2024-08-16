import React from "react";
import Slider from "react-slick";
import ClientCard from "./ClientCard";
import Heading from "./Heading";

function Testimonial() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        autoplay:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="lg:container mx-auto lg:my-28 my-5">
            <Heading heading="What Our Clients Say " para="Within the premises of the Sushma Township are reputed Schools." />
            <div className="slider-container px-5 h-full  lg:mt-16 mt-3">
                <Slider {...settings} className="">
                    <div className="px-3">
                        <ClientCard />
                    </div>
                    <div className="px-3">
                        <ClientCard />
                    </div>
                    <div className="px-3">
                        <ClientCard />
                    </div>
                    <div className="px-3">
                        <ClientCard />
                    </div>
                    <div className="px-3">
                        <ClientCard />
                    </div>
                    <div className="px-3">
                        <ClientCard />
                    </div>

                </Slider>
            </div>
        </div>
    );
}

export default Testimonial;

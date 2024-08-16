import React, { Component, useState } from "react";
import Slider from "react-slick";
import PriceCard from './PriceCard'
import Heading from './Heading';
import img1 from "../images/2a1b1ef3909d3b7bdb1608b424f45cc7.png";
import img2 from "../images/f920ac4327416802fbecf1736314577d.png";
import img3 from "../images/813b318e49c8e4d7fe2f2cc911edf93f.png";
import img4 from "../images/6f9ecdf7fbe13585a4c2c47c048769f7.png";
import img5 from "../images/0c76a549bdf4f7b4a09efdce14139b62.png";


export default function PriceList() {

  const [activePlan, setActivePlan] = useState(0)

  const cardData = [
    {
      img : img1,
      title : "luxury office",
    },
    {
      img : img2,
      title : "Retail shops",
    },
    {
      img : img3,
      title : "Mini Mall",
    },
    {
      img : img4,
      title : "luxury office",
    },
    {
      img : img5,
      title : "luxury office",
    },
  ]

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 864,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='lg:container mx-auto lg:mt-28 lg:mb-16 my-5' id="Price">
        <Heading heading="Price List " para="Within the premises of the Sushma Township are reputed Schools." />
        <div className='grid grid-cols-2 uppercase lg:pt-12 pt-5'>
          {

            ["Price", "Payment plan"].map((item, index) => (
              <div key={index} className={`lg:text-[35px] text-[20px] sm:text-[25px] md:py-4 py-1 sm:py-2  font-[700]  flex justify-center items-center cursor-pointer ${activePlan == index ? "bg-[#254E58] text-white duration-700" : "text-[#254E58] bg-white"}`} onClick={() => setActivePlan(index)}>
                {item}
              </div>
            ))
          }


        </div>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {
            cardData.map((item) => (
              <div key={item} className="lg:px-3 px-1">
                <PriceCard img={item.img} title={item.title} />
              </div>
            ))
          }
        </Slider>
      </div>

    </>
  )
}

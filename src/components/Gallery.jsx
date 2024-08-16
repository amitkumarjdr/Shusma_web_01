import React, { useState } from 'react'
import Heading from './Heading'
import img1 from "../images/73b17d96d7a012737abdf74f62eabd69.png";
import img2 from "../images/610cd720a48e53fb572218d6ca260e2e.png";
import img3 from "../images/a2faec89f9c1be9956dfef6f8e750a71.png";
import img4 from "../images/73b17d96d7a012737abdf74f62eabd69.png";
import img5 from "../images/71104fac79c6734464ff93780afe5ff4.png";

export default function Gallery() {

    let [activeProduct, setActiveProduct] = useState(0);
    let [mainImg, setMainImg] = useState([img1, img2, img3, img4, img5])

    let [subImg, setSubImg] = useState(mainImg[0])

    let productsBtn = [
        {
            title: "SOHO",
            images: [img1, img2, img3, img4, img5]
        },
        {
            title: "DECK OFFICE ",
            images: [img5, img4, img3, img2, img1]
        },
        {
            title: "FOOD  COURT ",
            images: [img1, img2, img3, img4, img5]
        },
        {
            title: "MICROBERRY ",
            images: [img1, img2, img3, img4, img5]
        },
        {
            title: "RETAIL ACHOR ",
            images: [img1, img2, img3, img4, img5]
        },
        {
            title: "MINI MALL  ",
            images: [img1, img2, img3, img4, img5]
        },
        {
            title: "construction update",
            images: [img1, img2, img3, img4, img5]
        },
    ];

    const handleBtn = (item, index) => {
        setActiveProduct(index)
        setMainImg(item.images)
    }

    const chnageSrc = (e) => {
        // console.log(e.target.src)
        setSubImg(e.target.src);
    }


    return (
        <div className='lg:container mx-auto lg:mt-36  my-8' id='GALLERY'>
            <Heading heading="Gallery" para="Within the premises of the Sushma Township are reputed Schools." />
            <div className="text-sm font-medium text-center text-gray-500  dark:text-gray-400 dark:border-gray-700 lg:my-10 my-5 ">
                <ul className='flex lg:justify-between justify-evenly gap-4  overflow-x-scroll productbtn_scroll '>
                    {
                        productsBtn.map((item, index) => (

                            <li key={index} className=' relative  cursor-pointer text-[#254E58] lg:text-[22px] text-[15px] font-[700]   md:pb-6 pb-3  text-nowrap  uppercase my-4  ' onClick={() => handleBtn(item, index)}>
                                <span className={` ${(activeProduct == index) ? "after:absolute after:w-[100%] after:h-[5px] after:bottom-[0%] after:rounded-[15px] after:left-[0%] after:bg-[#254E58]" : " "} `}>

                                    {item.title}
                                </span>
                                <span className={` ${(activeProduct == index) ? " w-0 h-0  border border-t-[10px] border-t-[#254E58] border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-transparent absolute left-1/2 -translate-x-1/2 md:translate-y-[44px] translate-y-[30px]  " : " "} `}></span>

                            </li>

                        ))
                    }
                </ul>
            </div>
            <div>
                <div className='w-full lg:h-[663px] h-[250px] sm:h-[350px] md:h-[500px] rounded-[16px] overflow-hidden relative'>
                    <img className='w-full h-full ' src={subImg} alt="" />
                    <div className='bg-[#ECF1F4] grid grid-cols-4 gap-3 w-[80%] absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:p-5 p-2 lg:pb-0'>
                        <div className='w-full lg:h-[118px] h-[70px] sm:h-[90px] md:h-[110px] rounded-[7px] overflow-hidden ' onClick={chnageSrc}>
                            <img className='w-full h-full ' src={mainImg[1]} alt="" />
                        </div>
                        <div className='w-full lg:h-[118px] h-[70px] sm:h-[90px] md:h-[110px] rounded-[7px] overflow-hidden' onClick={chnageSrc}>
                            <img className='w-full h-full ' src={mainImg[2]} alt="" />
                        </div>
                        <div className='w-full lg:h-[118px] h-[70px] sm:h-[90px] md:h-[110px] rounded-[7px] overflow-hidden' onClick={chnageSrc}>
                            <img className='w-full h-full ' src={mainImg[3]} alt="" />
                        </div>
                        <div className='w-full lg:h-[118px] h-[70px] sm:h-[90px] md:h-[110px] rounded-[7px] overflow-hidden' onClick={chnageSrc}>
                            <img className='w-full h-full ' src={mainImg[4]} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

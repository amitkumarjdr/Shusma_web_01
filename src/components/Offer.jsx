import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import img01 from "../images/d9a97dff9d5266e9cd95d261b673d130.png";
import img02 from "../images/0c76a549bdf4f7b4a09efdce14139b62.png";
import img03 from "../images/ac6ef0c582c8304069c3a536e51074b3.png";
import icon1 from "../images/fluent_slide-size-20-filled.png";
import icon2 from "../images/Vector (2).png";
import icon3 from "../images/Vector (3).png";
import icon4 from "../images/Vector (4).png";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Offer() {


    let plotDetails = [
        {
            icon: icon1,
            title: "Size Available ",
            desc: "500 Sqft - 1000 Sqft"
        },
        {
            icon: icon2,
            title: "Size Available ",
            desc: "500 Sqft - 1000 Sqft"
        },
        {
            icon: icon3,
            title: "Size Available ",
            desc: "500 Sqft - 1000 Sqft"
        },
        {
            icon: icon4,
            title: "Size Available ",
            desc: "500 Sqft - 1000 Sqft"
        },
    ]

    let imgData = [
        {
            img: img01,
            title: "Luxury Office",
        },
        {
            img: img02,
            title: "Soho",
        },
        {
            img: img03,
            title: "Retail",
        },
    ]
    let [activeImg, setActiveImg] = useState(imgData[0])

    // let handleImageTab = (item,index) => {
    //     console.log(item)
    //     imgData.unshift(item)
    //     console.log(imgData[index])
    //     setActiveImg(imgData[index])
    // }

    // useEffect(() => {
    //     handleImageTab()
    // }, [activeImg])

    return (
        <div className='lg:container mx-auto' id='Products'>
            <Heading heading="Our Offering" para="Within the premises of the Sushma Township are reputed Schools." />
            <div className=' gap-3 md:py-20 py-5'>
                <div className='lg:col-span-2 lg:h-[601px]  rounded-[24px]  bg-white'>
                    <div className='w-full h-full lg:overflow-hidden rounded-[24px] xl:gap-20  flex flex-col-reverse lg:flex lg:flex-row justify-start items-center relative transform lg:translate-y-2 lg:translate-x-1'>
                        <div className='lg:basis-[60%] h-full rounded-[24px] overflow-hidden relative'>
                            <img className='w-full h-full' src={img01} alt="" />
                            <button
                                type="button"
                                className=" absolute top-4 right-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[#254E58] "
                            >
                                Selling Fast
                            </button>
                        </div>
                        <div className='flex justify-center lg:basis-[20%]  '>
                            <div>
                                <p className='text-[37.76px] font-[700] text-[#36536B] text-start lg:pb-8 py-4'>
                                    Luxury Office
                                </p>
                                <ul className='lg:space-y-8 space-y-3 grid grid-cols-2 lg:grid-cols-1 gap-5 lg:gap-1  '>
                                    {
                                        plotDetails.map((item, index) => (
                                            <li key={index}>
                                                <div className='flex justify-start items-center gap-3'>
                                                    <div className=' h-[18px] '>
                                                        <img className='w-full h-full object-cover' src={item.icon} alt="" />
                                                    </div>
                                                    <p className='sm:text-[18px] text-[15px] font-[700] text-[#36536B]'>{item.title} </p>
                                                </div>
                                                <p className='sm:text-[18px] text-[15px] font-[400] text-[#464646]'>
                                                    {item.desc}
                                                </p>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className='rounded-[10px] overflow-hidden flex bg-[#193C44] text-white text-[18px] font-[700] lg:mt-8 my-3 group'>
                                    <button className='flex justify-center items-center gap-4  bg-[#254E58] group-hover:bg-[#193C44] sm:py-3 px-8'>
                                        <FontAwesomeIcon className='rounded-full  text-[#254E58] bg-white p-2' icon={faPhone} />
                                        <p>
                                            <Link to="tel:000000000">
                                                call
                                            </Link>
                                        </p>
                                    </button>
                                    <button className='flex justify-center items-center gap-4 py-2 sm:py-3 px-4 group-hover:bg-[#254E58]'>
                                        <FontAwesomeIcon className='text-[30px]' icon={faWhatsapp} />
                                        <p>
                                            <Link to="https://www.whatsapp.com/">
                                                WhatsApp
                                            </Link>
                                        </p>
                                    </button>
                                </div>
                            </div>
                            <div className='bg-[#254E58] text-[30px] font-[700] origin-bottom-right rotate-[-90deg]  text-nowrap absolute top-[-120px] right-0 px-8 py-2 hidden lg:block '>
                                <p className='lease text-[#254E58]'>
                                    12% Assured Return + Lease Guarante
                                </p>
                                <p className='text-white '>
                                    12% Assured Return + Lease Guarante
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 lg:gap-5 gap-2  overflow-hidden lg:pt-12 py-4 '>
                    {
                        imgData.slice(1, 3).map((item, index) => (
                            <div key={index} className='w-full sm:h-[260px] h-[150px] overflow-hidden rounded-[25px] relative' onClick={() => handleImageTab(item)}>
                                <img className='w-full h-full object-cover' src={item.img} alt="" />
                                <div className='absolute bottom-0 left-0 right-0 sm:ps-8 ps-2 pb-2 sm:pb-9 pt-20' style={{ backgroundImage: 'linear-gradient(5.9deg, rgba(0, 0, 0, 0.64) 40.52%, rgba(102, 102, 102, 0) 78.85%)' }}>
                                    <p className='text-white lg:text-[37.76px] text-[25px] font-[700] '>
                                        {item.title}
                                    </p>
                                    <p className='text-white lg:text-[15.35px] text-[12px] font-[400] '>
                                        Within the premises of the Sushma Township are reputed Schools.
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
// background: ;

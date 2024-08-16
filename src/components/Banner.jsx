import React from 'react'
import colorLine from "../images/Rectangle 2435.png";
import plainLine from "../images/Rectangle 2436.png";
import buildingImg from "../images/image-removebg-preview - 2024-06-17T132124.961 1.png";

export default function Banner() {
    return (
        <div className='bg-white rounded-[17px] lg:h-[209px] w-full lg:container mx-auto md:my-16 my-5 flex justify-between items-center overflow-hidden '>
            <div className='transform lg:translate-x-[90px] h-full'>
                <img className='w-full h-full' src={colorLine} alt="" />
            </div>
            <div className='transform lg:translate-x-[-180px]'>
                <img src={buildingImg} alt="" />
            </div>
            <div>
                <p className='lg:text-[41px] text-[14px] sm:text-[25px] md:text-[35px] text-[#254E58] leading-tight capitalize font-[700] '>
                    Schedule Your<br />
                    Site Visit
                </p>
                <button className='bg-[#254E58] lg:text-[19.53px] text-[8px] sm:text-[12px] md:text-[14px] text-white sm:px-10 px-4 rounded-[23.3px]'>
                    Connect us
                </button>
            </div>
            <div className='transform lg:translate-x-[-20px] h-full'>
                <img className='w-full h-full' src={plainLine} alt="" />
            </div>
        </div>
    )
}

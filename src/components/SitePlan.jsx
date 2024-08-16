import React from 'react'
import bgImg from "../images/Rectangle 2324.png";
import siteImage from "../images/image 24.png";

export default function SitePlan() {

    let planList = [
        'ENTRANCE PLAZA',
        '7.5M WIDE ROAD',
        'BASEMENT ENTRY',
        'BASEMENT EXIT',
        'SECURITY ROOM',
        'INTERNAL PATHWAY',
        'BUILDING ENTRY',
        'RESIDENTIAL BLOCK',
        'COMMERCIAL BLOCK',
        'CLUB',
        'PARKING SPACE',
        'SWIMMING POOL',
        'AMPHITHEATER',
        "CHILDREN'S PLAY AREA",
        'WATER BODY',
        'LAWN',
        ' PALM COURT',
        ' TENNIS COURT',
        'BADMINTON COURT',
        'JOGGING TRACK',
        'COMMERCIAL PLAZA',
        'SERVICE BLOCK'
    ]

    return (
        <div className='lg:container mx-auto bg-[#254E58] lg:rounded-l-[22px] lg:flex justify-between items-center lg:h-[556px] my-12'>
            <div className='lg:basis-[45%] h-full md:ps-8 ps-2 py-5 '>
                <p className='md:text-[40px] text-[28px] font-[700] text-white lg:text-start text-center uppercase'>
                    site Plan
                </p>
                <p className='md:text-[18px] text-[14px] font-[400] text-white py-4 lg:text-start text-center'>
                    Within the premises of the Sushma Township
                    are reputed Schools.
                </p>
                <ul className='grid lg:grid-rows-12 lg:grid-cols-2 lg:grid-flow-col sm:grid-cols-3 grid-cols-2   gap-1  sm:ps-0'>
                    {
                        planList.map((item, index) => (
                            <li key={index} className='md:text-[17px] text-[11px]  text-nowrap sm:text-[14px] font-[400] text-white '>
                             {index + 1 + "."}   {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='bg-center bg-no-repeat xl:basis-[62%] my-1 lg:h-full h-[300px]  flex justify-center items-center ' style={{ backgroundImage: `url(${bgImg})` }}>
                <div className='xl:w-[518px] lg:w-[400px] w-[300px] lg:h-[402px] h-[300px] xl:translate-x-[124px] lg:p-4'>
                    <img className='w-full h-full ' src={siteImage} alt="" />
                </div>
            </div>
        </div>
    )
}

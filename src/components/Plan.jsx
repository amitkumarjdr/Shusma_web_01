import React, { useState } from 'react';
import mapImg01 from "../images/3671754a9267415e32e31b125bd56954.png";
import mapImg02 from "../images/4d35db0bcd979091b2ffed4a20d5e9fb.png";
import bgImg from "../images/Rectangle 2477.png";

export default function Plan() {
    const [activeNearest, setActiveNearest] = useState(0);

    const planData = [
        "LOWER GROUND",
        "GROUND & FIRST",
        "2ND & 3RD",
        "4TH & 5TH",
        "6TH & 7TH"
    ];

    let nearestList = [
        {
            title: "Gym-Space  05 ",
            des: "Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's",
            list: [
                "12300 Sq. Ft.",
                "12% Assured Return",
                "Lease Guarante"
            ],
        },
        {
            title: "Salon space  05 ",
            des: "Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's",
            list: [
                "12300 Sq. Ft.",
                "12% Assured Return",
                "Lease Guarante"
            ],
        },
        {
            title: "Entertainment 05",
            des: "Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's",
            list: [
                "12300 Sq. Ft.",
                "12% Assured Return",
                "Lease Guarante"
            ],
        },
        {
            title: "Mix Use Retail 05",
            des: "Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's",
            list: [
                "12300 Sq. Ft.",
                "12% Assured Return",
                "Lease Guarante"
            ],
        },
        {
            title: "Mini Mall Shops  05",
            des: "Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's",
            list: [
                "12300 Sq. Ft.",
                "12% Assured Return",
                "Lease Guarante"
            ],
        }
    ];
    const [nearestData, setNearestData] = useState(nearestList[0]);
    const [activePlan, setActivePlan] = useState(0)
    const [nearestLocation, setNearestLocation] = useState(2)


    const handleNearestData = (index) => {
        setActiveNearest(index);
        setNearestData(nearestList[index]);
    }

    return (
        <div className='lg:container mx-auto lg:my-16 my-5' id='FLOOR PLANS'>
            <div className='grid grid-cols-2 uppercase'>
                {
                    ["Floor Plan", "Unit Plan"].map((item, index) => (
                        <div key={index} className={`lg:text-[35px] text-[20px] sm:text-[25px] md:py-4 py-1 sm:py-2  font-[700]  flex justify-center items-center cursor-pointer ${activePlan == index ? "bg-[#254E58] text-white duration-700" : "text-[#254E58] bg-white"}`} onClick={() => setActivePlan(index)}>
                            {item}
                        </div>
                    ))
                }
            </div>
            <p className='text-[18px] font-[400] text-[#5A5454] text-center md:py-7 py-3'>
                Within the premises of the Sushma Township are reputed Schools.
            </p>
            <div className='grid lg:grid-cols-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:my-7 my-1 px-4 lg:px-0'>
                {planData.map((item, index) => (
                    <div key={index} className={`flex justify-start items-center gap-6 bg-white rounded-[13px] px-3 py-2  ${nearestLocation == index ? "border border-[#254E58]" : "border-0"}`} onClick={() => setNearestLocation(index)}>
                        <div className='md:w-[79px] md:h-[71px] w-[50px] h-[41px] sm:w-[60px] sm:h-[51px] p-1'>
                            <img className='w-full h-full' src={mapImg01} alt="" />
                        </div>
                        <p className='text-[13.76px] text-[#254E58] font-[700]'>
                            {item}
                        </p>
                    </div>
                ))}
            </div>
            <div className='md:flex justify-between items-center md:h-[445px]  md:my-16 my-4'>
                <div className='md:basis-[49%] h-full'>
                    <img className='w-full h-full' src={mapImg02} alt="" />
                </div>
                <div className='md:basis-[50%] h-full md:flex justify-between items-center mt-3 lg:mt-0 '>
                    <div className='basis-[49%] h-full bg-cover bg-center bg-no-repeat flex flex-col justify-center' style={{ backgroundImage: `url(${bgImg})` }}>
                        <ul className='md:space-y-7 space-y-2 '>
                            {nearestList.map((item, index) => (
                                <li key={index} className={`md:text-[23.64px] text-[16px] cursor-pointer py-2 flex justify-center items-center ${activeNearest === index ? "bg-white text-[#254E58]" : "text-white"} font-[700]`} onClick={() => handleNearestData(index)}>
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='basis-[50%] h-full bg-[#254E58] text-white md:px-8 px-4 md:py-10 py-2'>
                        <p className='text-[23.64px] font-[700] pt-3'>
                            {nearestData.title}
                        </p>
                        <p className='text-[15px] py-3'>
                            {nearestData.des}
                        </p>
                        <ul className='text-[18px] sm:py-6 py-2 sm:space-y-5 space-y-2 list-disc ps-5 '>
                            {nearestData.list.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        <button className='text-[13.48px] my-3 text-[#254E58] font-[700] rounded-[12.5px] capitalize px-5 py-1 bg-white'>
                            Selling Fast
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
// box-shadow: ;
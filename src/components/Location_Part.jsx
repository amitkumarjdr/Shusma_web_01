import React, { useRef } from 'react'
import Heading from './Heading';
import carImg from "../images/white-sedan-top-view-om8boot31dli4loy-om8boot31dli4loy 1.png";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger,useGSAP);

export default function Location_Part() {

    const car = useRef(null);

    let partData = [
        {
            dis: '07',
            title: "education center",
        },
        {
            dis: '10',
            title: "Salon",
        },
        {
            dis: '12',
            title: "Market ",
        },
        {
            dis: '20',
            title: "Hospital ",
        },
        {
            dis: '25',
            title: "Airport ",
        }
    ];

    useGSAP(() => {
        gsap.to(car.current, {
            x:"80vw",
            scrollTrigger: {
                trigger: car.current,
                start: "top 98%",
                scrub: 1
            }
        });
    }, []);

    return (
        <div className='py-5 lg:pb-24'>
            <Heading heading="Best Part of location" para="Within the premises of the Sushma Township are reputed Schools." />

            <div className='lg:pt-40 pt-24 pb-10 sm:pt-24 md:pt-36  relative'>
                <div className='border-b border-b-[#36536B] w-full'></div>
                <div className='absolute lg:translate-x-72 translate-x-20 md:translate-x-40 z-[22] lg:translate-y-[-22px] translate-y-[-12px] md:translate-y-[-14px] w-[30px] h-[20px] md:w-[50px] md:h-[30px] lg:w-[70px] lg:h-[40px]' ref={car}>
                    <img className='w-full h-full' src={carImg} alt="" />
                </div>

                <div className={`flex justify-around items-start sm:gap-3  lg:translate-y-[-100px] translate-y-[-50px] sm:translate-y-[-70px] md:translate-y-[-90px] lg:container mx-auto absolute left-1/2 -translate-x-1/2 `}>
                    {
                        partData.map((item, index) => (
                            <div key={index} className='inline-block'>
                                <div className='flex justify-evenly items-center gap-2'>
                                    <p className='lg:text-[58.86px] text-[28px] sm:text-[40px] md:text-[50px] text-[#36536B] font-[700]'>
                                        {item.dis}
                                    </p>
                                    <p className='md:text-[15.85px] sm:text-[10px] text-[8px] font-[700] text-[#254E58] leading-tight'>
                                        <span>min <br /> Drive</span>
                                    </p>
                                </div>
                                <div className='md:size-[24px] sm:size-[20px] size-[15px] bg-[#36536B] rounded-full mx-auto'></div>
                                <p className='sm:text-[15.85px] text-[10px] font-[700] text-[#254E58] text-center capitalize py-3'>
                                    {item.title}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

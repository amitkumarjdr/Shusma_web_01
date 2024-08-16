import React, { useRef } from 'react'
import img01 from "../images/6d3994e0ac53bc2f38eacd46bc8333e7.png";
import img02 from "../images/9a9ea609545dbc25fec0c2cbc193fa70.png";
import img03 from "../images/792ab6b6b7b389d04be0de31d40f484f.png";
import img04 from "../images/77b28a8277f906c6afbb011dad5ebe9e.png";
import img05 from "../images/69269826b022707a8cb9e90cdd711075.png";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export default function BusinessCenter() {

    const headingTextRef = useRef(null)
    const textRef = useRef(null)
    let allImg = [img02, img03, img04, img05]


    useGSAP(
        () => {
            gsap.from("h1", {
                duration: 1,
                stagger: 0.2,
                y: 100,
                opacity: 0,
                ease: "power2.out",
            })
            gsap.to(textRef.current, {
                xPercent: -100,
                repeat: -1,
                duration: 10,
                ease: 'linear',
            })
        },
    )

    return (
        <div className='bg-[#ecf1f4] lg:pt-[250px] pt-20 lg:pb-20 '>
            <div className='grid lg:grid-cols-2 grid-cols-1  lg:container mx-auto'>
                <div className='lg:w-[591px] lg:h-[635px] h-[235px] sm:h-[335px] md:h-[435px] rounded-[30px] overflow-hidden'>
                    <img className='w-full h-full ' src={img01} alt="" />
                </div>

                <div>
                    <div className='xl:text-[67.46px] text-[25px] sm:text-[30px] md:text-[40px]  font-[500] text-[#254E58] leading-tight px-4 lg:px-0' ref={headingTextRef}>
                        THE LARGEST
                        BUSINESS CENTRE
                        IN ZIRAKPUR
                    </div>
                    <p className='md:text-[23.15px] lg:leading-[39.36px] text-[12px] sm:text-[16px] font-[500] text-[#6A6A6A] lg:text-justify my-2 px-4 lg:px-0'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                    <div className='flex lg:justify-between justify-around flex-wrap lg:flex-nowrap  transform lg:translate-x-[-130px]  gap-2  lg:p-3 lg:pe-0 rounded-[20px] bg-[#ecf1f4] px-0'>
                        {
                            allImg.map((img, index) => (
                                <div key={index} className='rounded-[21px]  overflow-hidden lg:h-[174px] h-[120px] sm:h-[150px] xl:min-w-[172px] lg:min-w-[135px] w-[150px] bg-[#ecf1f4] '>
                                    <img className='w-full h-full' src={img} alt="" />
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
            <div className='bg-[#254E58] lg:mt-36 lg:mb-20 my-6 overflow-hidden slide_text'>
                <p className='md:text-[53.22px] text-[30px] font-[700] text-nowrap text-white space-x-28' ref={textRef}>

                   <span> 12% ASSURED RETURNS , 9 YEARS LEASE GUARANTEE</span>
                   <span> 12% ASSURED RETURNS , 9 YEARS LEASE GUARANTEE</span>


                </p>
            </div>
        </div>
    )
}

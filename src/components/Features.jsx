import React, { useRef } from 'react'
import Heading from './Heading';
import lineImage from "../images/Vector 134.png";
import buildingImg from "../images/Group 1722.png";
import roadImg from "../images/Vector (1).png";
import locationImg from "../images/Group 3101.png";
import threelineImg from "../images/Group 3102.png";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Features() {


    const card = useRef(null)

    let featuresCard = [
        {
            img: buildingImg,
            y: "translate-y-[-70px] md:translate-y-[-116px] lg:translate-y-[-184px]"
        },
        {
            img: roadImg,
            y: "translate-y-[-42px] md:translate-y-[-62px] lg:translate-y-[-105px]"
        },
        {
            img: locationImg,
            y: "translate-y-[-68px] md:translate-y-[-91px] lg:translate-y-[-138px]"
        },
        {
            img: threelineImg,
            y: "translate-y-[-64px] md:translate-y-[-81px] lg:translate-y-[-139px]"
        },
    ]
    

    return (
        <div className='lg:py-28 py-5'>
            <Heading heading="KEY FEATURES" para="Within the premises of the Sushma Township are reputed Schools." />
            <div className='py-24 lg:pb-44  overflow-hidden '>
                <div className='w-full h-[170px] relative'>
                    <img src={lineImage} alt="" />
                    <div className=' flex justify-evenly items-center ' ref={card}>
                        {
                            featuresCard.map((item, index) => (
                                <div key={index} className={`sm:max-w-[240px] max-w-[80px] transform  ${item.y}  text-center  card`} >
                                    <div className={`lg:size-[151px] size-[70px] sm:size-[90px] rounded-full border border-[#254E58] p-2 mx-auto flex justify-center items-center `}>
                                        <div className='lg:size-[133px] size-[50px] sm:size-[75px] bg-[#254E58] rounded-full lg:p-8 md:p-4 p-3 sm:p-5 flex justify-center items-center'>
                                            <img className='w-ful h-full' src={item.img} alt="" />
                                        </div>
                                    </div>
                                    <p className='lg:text-[60.75px] text-[25px] font-[700] number_style' style={{
                                        background: 'linear-gradient(180deg, #36536C 0%, #ECF1F4 72.14%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    }}>
                                        {"0" + (index + 1)}
                                    </p>
                                    <p className='md:text-[13.86px] text-[10px]  fon-[400]  whitespace-break-spaces text-center'>
                                        Located on 200-ft Wide  Highway |
                                        Basement  Surface Parking ,<br />
                                        visitor Parking
                                    </p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
// background: ;

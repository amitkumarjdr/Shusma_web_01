import React, { useState } from 'react'
import Heading from './Heading';
import faqImg from "../images/Subtract.png";
import faqSmallImg from "../images/Rectangle 2465.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Faq() {

    const [active, setActive] = useState()

    return (
        <div className='lg:container mx-auto lg:my-20 my-10' id='FAQ'>
            <Heading heading="Faq’s" para="Within the premises of the Sushma Township are reputed Schools." />
            <div className='md:flex jsutify-between items-center gap-12 lg:my-24 my-5'>

                <div className=' basis-[48%] md:space-y-7 space-y-2'>
                    {
                        [1, 2, 3, 4, 5].map((item, index) => (
                            <div key={index} className='bg-[#254E58] cursor-pointer shadow-[0px_10px_29.6px_-2px_#00000040] rounded-[20px] md:py-6 py-4 px-6   text-white ' onClick={() => (setActive(index))}>
                                <div className='flex justify-between items-center'>
                                    <p className='lg:text-[18px] text-[15px] font-[700] '>
                                        What is Lorem Ipsum?
                                    </p>
                                    <p className='lg:size-[40px] size-[20px] rounded-full border border-white p-3 flex justify-center items-center lg:text-[25px] text-[14px] '>
                                        <FontAwesomeIcon icon={(index == active) ? faArrowDown : faArrowRight} />
                                    </p>
                                </div>

                                <p className={`sm:text-[14px] text-[12px] text-white pt-4 ${(index == active) ? "block duration-1000" : 'hidden'} `}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley
                                </p>
                            </div>
                        ))
                    }

                </div>
                <div className='lg:basis-[50%]  lg:h-[564px] h-[270px] sm:h-[370px] md:h-[470px] w-[100%] mx-auto rounded-[20px]  my-2  
                '>
                    <div className='w-full h-full relative'>
                        <img className='w-full h-full ' src={faqImg} alt="" />
                        <div className='lg:h-[379px] lg:w-[111px] xl:w-[131px] h-[170px] w-[70px] sm:h-[250px] sm:w-[130px] md:w-[100px] md:h-[300px] absolute right-0 top-1/2 -translate-y-[53%] '>
                            <img className='w-full h-full' src={faqSmallImg} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


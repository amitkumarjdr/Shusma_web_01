import React from 'react'
import videoImg from "../images/Rectangle 2458.png";

export default function WalkThrough() {
    return (
        <div className='lg:my-20 my-5 lg:container mx-auto rounded-[23px] md:h-[467px] py-10 px-5 md:flex justify-center items-center relative bg-white'>
            <div className='md:basis-[40%] '>
                <p className='lg:text-[44.35px] text-[25px] text-[#254E58] uppercase font-[700] '>
                    The Project  <br />
                    Walk-through
                </p>
                <button className='bg-[#254E58] sm:text-[19.53px] text-[15px] text-white md:px-16 px-4 py-[5px] lg:mt-8 my-3 rounded-[23.3px]'>
                    Enquire Now
                </button>
            </div>
            <div className='md:basis-[60%] relative overflow-hidden rounded-[23.3px]'>
                <img className='w-full h-full ' src={videoImg} alt="" />
                <div className='absolute top-0 left-0 bottom-0  right-0 bg-[rgba(0,0,0,0.4)] flex justify-center items-center'>
                    <div className='size-[96px] flex justify-center items-center text-white border border-white rounded-full text-[18px] font-[700] uppercase '>
                        play
                    </div>
                </div>
            </div>
            <div className='size-[38.52px] rounded-full bg-[#ECF1F4] absolute translate-x-[-350px]   translate-y-[-234px]'></div>
            <div className='size-[38.52px] rounded-full bg-[#ECF1F4] absolute translate-x-[-350px]   translate-y-[234px]'></div>
        </div>
    )
}

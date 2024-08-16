import React from 'react'
import Img from "../images/Group 3080.png";

export default function ShusmaPristineCard({ index, index_2 }) {

    return (
        <div className='flex justify-center items-center bg-white rounded-[19.36px] gap-5 lg:py-5 py-3 lg:px-5 px-3 relative lg:mb-3 lg:mx-2 group  ' >
            <p className='lg:text-[48px] text-[25px] text-[#EEEEEE] font-[700] absolute top-[-2px] right-3 group-hover:rotate-[360deg] group-hover:duration-1000 '>
                {(index_2 == 0) ? "0" + (index + 1) :
                    (index_2 == 1) ? "1" + index :
                        (index_2 == 2) ? ("2" + index) -1 : ''}
            </p>
            <div className='rounded-[7.57px] bg-[#E1E8EE] min-w-[94.26px] h-[94.26px] flex justify-center items-center '>
                <div className='md:w-[52.27px] md:h-[49.66px] w-[42px] h-[38px] '>
                    <img className='w-full h-full ' src={Img} alt="" />
                </div>

            </div>
            <div className='text-start'>
                <p className='text-[13.47px] text-[#254E58] font-[700]  '>
                    Storm water Drain
                </p>
                <p className='lg:text-[14.31px] text-[11px] text-[#6A6A6A] font-[400]'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
        </div>
    )
}

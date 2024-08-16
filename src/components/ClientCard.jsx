import React from 'react'
import clientImg from "../images/Ellipse 49.png";
// import Img from "../images/” (1).png";

export default function ClientCard() {
    return (
        <div className='shadow-[0px_4.68px_5.24px_0px_#0000001A] bg-white pt-12 pb-24 mb-16   px-8 text-center relative rounded-[19px]  '>
            <div className='md:text-[19px] text-[15px] sm:text-[15px] text-[#3A4E5F] font-[600] '>
                It was the first time
                I ever sold a property
            </div>
            <p className='sm:text-[14.72px] text-[10px] text-[#797C82] md:my-4 my-2'>
                Donec nibh nibh, tempus sit amet dignissim finibus ultricies vitae uma Pellentesque at urna non laoreet Aenean euismod, et laoreet luctus, justo ligula libero felis.
            </p>
            <div className='flex justify-center md:gap-2 gap-1 text-[#FFC267] md:text-[29px] text-[16px] '>
                {
                    [1, 2, 3, 4, 5].map((item) => (
                        <p key={item}> &#9733; </p>
                    ))
                }
            </div>
            <div >
                <p className='md:text-[20px] text-[14px] text-[#3A4E5F] font-[800] '>
                    John Sharma
                </p>
                <p className='md:text-[12px] text-[9px] text-[#797C82] font-[500] '>
                    Business Owner
                </p>
            </div>
            <div className=' flex justify-center items-center transform translate-y-[10px] -translate-x-1/2 left-1/2  bg-[#ECF1F4] mx-auto  rounded-full absolute'>
                <div className='sm:size-[128px] size-[100px] m-2 pt-2 rounded-full flex justify-center items-center'>
                    <img className="" src={clientImg} alt="" />
                </div>  
            </div>
        </div>
    )
}
// box-shadow:;

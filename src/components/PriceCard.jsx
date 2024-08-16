import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';
import icon1 from "../images/Vector (5).png";
import icon2 from "../images/Vector (6).png";

export default function PriceCard({ img ,title}) {
    const [unlock, setUnlock] = useState(false)

    return (
        <div className='lg:max-w-[408px]  lg:h-[602px] h-[300px] sm:h-[500px] rounded-[17.36px] shadow-[0px_0px_4.29px_1.02px_#00000040] bg-cover bg-center bg-no-repeat overflow-hidden text-center flex flex-col justify-end relative' style={{ backgroundImage: `url(${img})` }}>
            <div className=' flex flex-col justify-center items-center   '>
                <button className={`text-[16.21px] text-[#254E58] bg-white text-nowrap px-6 lg:px-20 py-2  rounded-t-[29.61px] font-[600] ${unlock ? "hidden" : "block"} `} onClick={() => { setUnlock(true) }}>
                    <FontAwesomeIcon className='pe-2' icon={faUnlock} />
                    Unlock Price
                </button>
                <button className={`${unlock ? "inline-block" : "hidden"} text-[#254E58] bg-white lg:px-10 px-3 py-2 rounded-t-[29.61px]`}>
                    <span className='sm:text-[11.18px] text-[9px] font-[400] '>Price start From </span>
                    <span className='sm:text-[22.3px] text-[14px] font-bold'>₹22.15 Lakh</span>
                </button>
                <div className='group bg-[#254E58] w-full relative'>
                    <div className=' w-full text-center text-white ps-10 py-4 block group-hover:hidden'>
                        <p className='lg:text-[24px] text-[15px] sm:text-[20px] font-[700] text-start uppercase '>
                            {title}
                        </p>
                    </div>
                    <div className='text-white lg:p-6  px-3 py-5 hidden group-hover:block '>
                        <p className='lg:text-[24px] text-[15px] sm:text-[20px] font-[700] text-start uppercase '>
                            {title}
                        </p>
                        <p className='text-[9.35px] leading-[12px] font-[400] text-start py-2'>
                            Lorem Ipsum is simply dummy text  of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's  standard dummy text ever since.
                        </p>
                        <div className='text-white flex justify-start flex-wrap lg:gap-5'>
                            <div>
                                <div className='flex justify-center items-center gap-2 bg-[#184049] rounded-[3.14px] p-1 px-2  '>
                                    <div className='w-[10.23px] h-[12px] '>
                                        <img className='w-full h-full' src={icon1} alt="" />
                                    </div>
                                    <p className='capitalize text-[12.28px] font-[700]'>
                                        floor
                                    </p>
                                </div>
                                <p className='text-[11.6px] font-[400] py-1 '>
                                    04th & 5th
                                </p>
                            </div>
                            <div>
                                <div className='flex justify-start items-center gap-2 bg-[#184049] rounded-[3.14px] p-1 px-2  '>
                                    <div className='w-[10.23px] h-[12px] '>
                                        <img className='w-full h-full' src={icon1} alt="" />
                                    </div>
                                    <p className='capitalize text-[12.28px] font-[700]'>
                                        Area
                                    </p>
                                </div>
                                <p className='text-[11.6px] font-[400] py-1 '>
                                    625-937 Sq. Ft.
                                </p>
                            </div>
                            <div>
                                <div className='flex justify-start items-center gap-2 bg-[#184049] rounded-[3.14px] p-1 px-2 '>
                                    <div className='w-[10.23px] h-[12px] '>
                                        <img className='w-full h-full' src={icon1} alt="" />
                                    </div>
                                    <p className='capitalize text-[12.28px] font-[700]'>
                                        Assured Return
                                    </p>
                                </div>
                                <p className='text-[11.6px] font-[400] py-1 text-start'>
                                    12% Assured Return + <br />
                                    Lease Guarante
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


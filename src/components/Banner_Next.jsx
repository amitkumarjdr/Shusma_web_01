import React from 'react'
import bannerImg from "../images/b2337a239a9447079ec9e5f91b4c81ed.png";
import colorBgImg from "../images/Rectangle 2461.png";
import whiteBgImg from "../images/Rectangle 2462.png";

export default function Banner_Next() {
    return (
        <div className=' h-[422px] md:flex md:relative my-6 sm:mb-20'>

            <div className=' bg-left bg-no-repeat  md:w-[70%] md:h-[422px] h-[250px] md:absolute top-0 left-0 z-[2] ' style={{ backgroundImage: `url(${whiteBgImg})` }}>
                <div className='   bg-no-repeat  w-full md:h-[422px] h-[250px] md:absolute top-0 left-0 z-[2] flex justify-center items-center' style={{ backgroundImage: `url(${colorBgImg})` }}>
                    <div className='inline-block ps-7 md:ps-0'>
                        <div className='text-white font-[700]'>
                            <p className='text-[17px] pt-5 '>UP TO</p>
                            <div className=' flex xl:justify-between justify-start items-center py-0 '>
                                <div className='leading-tight pe-8'>
                                    <p className='xl:text-[122px] lg:text-[100px] text-[60px] leading-none'>
                                        12%
                                    </p>
                                    <p className='lg:text-[21.57px] text-[10px] '>
                                        ASSURED RETURNS
                                    </p>
                                </div>
                                <div className='  leading-tight border-l border-l-white  ps-8 text-center'>
                                    <p className='xl:text-[122px] lg:text-[100px] text-[60px] leading-none '>
                                        09
                                    </p>
                                    <p className='lg:text-[21.57px] text-[10px] '>
                                        YEARS LEASE GUARANTEE
                                    </p>
                                </div>

                            </div>
                            <div className='text-center block pt-4 text-[10.67px] pe-9'>
                                T&C Apply*
                            </div>
                        </div>
                        <button className='text-[#254E58] text-[19.53px] bg-white px-16 py-[5px] mt-8 rounded-[23.3px]'>
                            Enquire Now
                        </button>

                    </div>
                </div>
            </div>
            <div className=' bg-center bg-no-repeat bg-cover md:h-[422px] h-[200px]  sm:h-[240px] md:w-[70%] md:absolute top-0 right-0 ' style={{ backgroundImage: `url(${bannerImg})` }}>

            </div>
        </div>
    )
}

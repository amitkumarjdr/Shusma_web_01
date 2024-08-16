import React from 'react'
import img01 from "../images/Rectangle 2428.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Booking() {
    return (
        <div className='md:flex jsutify-start items-center lg:my-28 my-5' id='Contact us'>
            <div className='md:w-[80%] w-full md:h-[670px] h-[270px] sm:h-[370px]  rounded-r-[13px] overflow-hidden bg-cover bg-center  ' style={{ backgroundImage: `url(${img01})` }}>
                <div className='grid grid-cols-1 h-full xl:translate-x-[365px] lg:translate-x-[120px] translate-x-[105px] sm:translate-x-[355px] md:translate-x-[100px] '>
                    <div className='lg:w-[322px] w-[180px] bg-[rgba(37,78,88,0.7)] text-white flex justify-center items-center '>
                        <div className='flex flex-col items-center'>
                            <div className='rounded-full border border-white lg:size-[76px] size-[46px] text-[28px] flex justify-center items-center'>
                                <FontAwesomeIcon icon={faPhoneVolume} />
                            </div>
                            <p className='lg:text-[26.38px] text-[15px] '>
                                <Link to="tel: +91 1234567890">
                                    +91 1234567890
                                </Link>
                            </p>
                            <p className='lg:text-[26.38px] text-[15px] '>
                                <Link to="tel: +91 1234567890">
                                    +91 1234567890
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className='lg:w-[322px] w-[180px] bg-[rgba(255,255,255,0.69)] text-[#254E58] flex justify-center items-center'>
                        <div className='flex flex-col items-center'>
                            <div className='rounded-full border border-[#254E58] lg:size-[76px] size-[46px] flex justify-center items-center text-[28px] '>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <p className='lg:text-[26.38px] text-[15px] '>
                                <Link to="mailto:Needhelp@gmail.com">
                                    Needhelp@gmail.com
                                </Link>
                            </p>
                            <p className='lg:text-[26.38px] text-[15px] '>
                                <Link to="mailto:  sushma@gmail.com">
                                    sushma@gmail.com
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" transform lg:translate-x-[-130px]  flex justify-start items-center ">
                <div className="  rounded-[17px]  lg:px-12 px-8 md:py-9 py-2 bg-white mx-auto">
                    <p className="lg:text-[29px] text-[#254E58] text-[20px] font-[700] leading-tight lg:text-nowrap">
                        Book a Free Consultation
                    </p>
                    <p className="lg:text-[18px] text-[#000000] text-[13px] font-[500] pe-10 pt-2 pb-4">
                        You have any question? feel free to contact us.
                    </p>
                    <form className=" sm:space-y-6 space-y-3 mb-8" action="">
                        <div className="w-full ">
                            <input
                                className="flex h-10 w-full rounded-md border border-black/30 bg-white px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="Your Name"
                            ></input>
                        </div>
                        <div className="w-full ">
                            <input
                                className="flex h-10 w-full rounded-md border border-black/30 bg-white px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="email"
                                placeholder="Email"
                            ></input>
                        </div>
                        <div className="w-full ">
                            <input
                                className="flex h-10 w-full rounded-md border border-black/30 bg-white px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="Contact"
                            ></input>
                        </div>
                        <div className="w-full ">
                            <input
                                className="flex h-28 w-full rounded-md border border-black/30 bg-white px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="textarea"
                                placeholder="Message"
                            ></input>
                        </div>
                        <button
                            type="button"
                            className="rounded-[2.9px]  bg-[#254E58] text-white px-9 py-2 text-[17px] font-semibold "
                        >
                            Enquire Now
                        </button>
                    </form>
                </div>
                <div className=' w-[12px] h-[300px] bg-[#254E58] hidden md:block '></div>
            </div>
        </div>
    )
}

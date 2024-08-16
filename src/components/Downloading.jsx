import React, { useState } from 'react'
import downloadPageImg from "../images/Subtract (1).png";
import downloadIcon from "../images/Vector (8).png";
import downloadIcon01 from "../images/Vector (9).png";
import { Link } from 'react-router-dom';

export default function Downloading() {

    const [activeDownloadBtn, setActiveDownloadBtn] = useState(1)

    let downloadItem = ["Brochure", "Price List ", "Site Plan  "]
    return (
        <div className='lg:container mx-auto  md:flex justify-between '>
            <div className='md:basis-[50%] md:h-[451px] h-[250px] sm:h-[300px] '>
                <img className='w-full h-full ' src={downloadPageImg} alt="" />
            </div>
            <div className='md:basis-[43%] '>
                <p className='lg:text-[47.69px] text-[28px] sm:text-[35px] text-center md:text-start font-[700] lg:leading-[57.23px]  text-[#254E58] uppercase pb-5 '>
                    Presentation of the
                    sushma Pristine
                </p>
                <div className='flex flex-wrap justify-center md:justify-start items-center md:grid grid-rows-3 gap-4'>
                    {
                        downloadItem.map((item, index) => (
                            <Link key={index} to='/files/Get_Started_With_Smallpdf' target="_blank" download>
                                <div  className={`flex justify-start items-center gap-5 lg:w-[372px] py-3 md:py-5 rounded-[35px] border-[2.46px] border-[#254E58] px-6  md:pe-36 my-1 cursor-pointer ${activeDownloadBtn == index ? "text-white bg-[#254E58]" : "bg-[#D9D9D9] text-[#254E58]"}`} onClick={() => setActiveDownloadBtn(index)}>
                                    <div className='size-[31px]'>
                                        <img
                                            className='w-full h-full'
                                            src={activeDownloadBtn == index ? downloadIcon01 : downloadIcon}
                                            alt=""
                                        />
                                    </div>
                                    <p className='text-[20px]  font-[600] '>
                                        {item}
                                    </p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

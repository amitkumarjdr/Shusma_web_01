
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/Group 2543 (1).png";

import footerLogo from "../images/Untitled__1_-removebg-preview 1.png";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faPinterestP, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";



export default function Footer() {

    let projectDetail = ['Home',
        'About Us  ',
        'Product ',
        'AMENITIES',
        'FAQs'
    ];
    
    let otherDetails = [
        'Privacy Policy',
        'Help & Supports ',
        'Terms of Service',
        'Contact Us'
    ]

    let icon = [
        {
            icon: <FontAwesomeIcon icon={faCameraRetro} />,
            link: "https://www.youtube.com/"
        },
        {
            icon: <FontAwesomeIcon icon={faFacebookF} />,
            link: "https://www.youtube.com/"
        },
        {
            icon: <FontAwesomeIcon icon={faTwitter} />,

            link: "https://www.youtube.com/"
        },
        {
            icon: <FontAwesomeIcon icon={faPinterestP} />,
            link: "https://www.youtube.com/"
        },
        {
            icon: <FontAwesomeIcon icon={faYoutube} />,
            link: "https://www.youtube.com/"
        },
    ]

    return (
        <div className="bg-[#ECF1F4] pt-12">
            <div className="bg-[#191B1C]  py-5 " >
                <div className="container mx-auto grid md:grid-cols-4 grid-cols-2 md:px-8 px-8 gap-3 lg:py-8 ">
                    <div className="flex flex-col justify-between">
                        <div className="inline-flex  items-center space-x-2">
                            <div className='w-[182px] h-[38px] '>
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <p className="lg:text-[14px] sm:text-[12px] text-[10px] text-[#FCFCFC] font-[600] pe-10 py-6">
                            Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry.
                            Lorem Ipsum has been the industry's
                            standard dummy text ever since the
                            1500s, when an unknown
                        </p>
                    </div>
                    <div>
                        <ul className="list-disc xl:ps-24 ps-4 sm:pt-9 pt-16 xl:space-y-2">
                            {
                                projectDetail.map((item, index) => (
                                    <li key={index} className="capitalize lg:text-[22px] md:text-[18px] text-[15px]  font-[400] text-[#FCFCFC] hover:ps-4 hover:border-b hover:duration-700 cursor-pointer">
                                        {item}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <ul className="list-disc xl:ps-24 pt-9 xl:space-y-2 sm:pt-9 ">
                            {
                                otherDetails.map((item, index) => (
                                    <li key={index} className="capitalize lg:text-[22px] md:text-[18px] text-[15px]  font-[400] text-[#FCFCFC] hover:ps-4 hover:border-b hover:duration-700 cursor-pointer">
                                        {item}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="sm:space-y-4  xl:ps-24 py-4">
                        <p className="text-[16px] text-white font-[500] text-center ">Sushma Service Partner</p>
                        <div className="lg:w-[200px] lg:h-[112px] md:w-[150px] w-[150px] md:h-[50px] h-[60px] ">
                            <img className="w-full h-full " src={footerLogo} alt="" />
                        </div>
                        <div className="space-x-3 flex justify-center items-center flex-wrap">
                            {
                                icon.map((item, index) => (

                                    <div key={index} className="bg-white rounded-full text-[#191B1C] text-[12px]  size-[25px] lg:size-[30px] lg:text-[16px] flex justify-center items-center cursor-pointer">
                                        <Link to ="https://www.youtube.com/" >
                                            {item.icon}
                                        </Link>

                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
            <div className="text-center pb-3">
                <span className="">© Copyright 2024 sushma. All Rights Reserved </span>      |        <span className="">Designed & developed by Adiyogi Technosoft Pvt. Ltd.</span>
            </div>
        </div>
    )
}

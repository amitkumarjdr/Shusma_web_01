import logo from "../images/Group 2543.png";
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { Link , Events} from 'react-scroll';


export default function Navbar() {

    const [navSticky, setNavSticky] = useState("");
    const [onScrollLogo, setOnScrollLogo] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('')

    const menuItems = [
        "About Us",
        "Products",
        "LOCATION MAP",
        "FLOOR PLANS",
        "Price",
        "amenities",
        "GALLERY",
        "FAQ",
        "Contact us"
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isSticky = () => {
        const scrollTop = window.scrollY;
        if (scrollTop >= 4) {
            setOnScrollLogo(true);
            setNavSticky("bg-[#254E58]  py-2");
        } else {
            setOnScrollLogo(false);
            setNavSticky("");
        }
    };

   

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        // Events.scrollEvent.register("begin",function(){})
        // Events.scrollEvent.register("end",function(){})
        return () => {
            window.removeEventListener("scroll", isSticky);
            // Events.scrollEvent.remove("begin");
            // Events.scrollEvent.remove("end")

        };
    }, []);

    const handleSetActive = (to)=>{
        setActiveSection(to)
    }

    useGSAP(
        () => {

            gsap.from(".logo", {
                opacity: 0,
                scale: 0,
                delay: 0.1,
                duration: 0.8
            })

            let tl = gsap.timeline();
            tl.from(".nav_text li", {
                y: 40,
                x: -30,
                delay: 0.1,
                opacity: 0,
                duration: 0.1,
                stagger: 0.2,
            })

        }
    )

    

    return (
        <>
            <div className={`flex justify-between items-center z-[9999] xl:py-6 py-3 fixed top-0 start-0 right-0 ${navSticky}`} style={{ backgroundImage: 'linear-gradient(179.82deg, rgba(0, 0, 0, 0.7) 0.15%, rgba(0, 0, 0, 0) 99.85%)' }}>
                <Link to='topview' spy={true} smooth={true} offset={-100} duration={500}>
                    <div className="w-[140px] h-[50px] sm:w-[160px] md:h-[63px] md:mt-1 lg:w-[182px] lg:h-[60px] ms-3 lg:ms-16 logo" onClick={() => setActiveSection()}>
                        <img className='w-full h-full' src={logo} alt="logo" />
                    </div>
                </Link>
                <div className="hidden grow justify-end xl:flex">
                    <ul className="inline-flex xl:space-x-6 space-x-4 nav_text">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item}
                                    className={`font-[500] text-nowrap lg:text-[15px] cursor-pointer text-[#FFFFFF] uppercase relative pb-1 ${activeSection == item ? "border-b-[2px]  border-b-white " : ""} `}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    exact = "true"
                                    onSetActive={handleSetActive}
                                >

                                    {item}

                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-end justify-end pe-10">
                    <div className="xl:hidden flex justify-center items-center py-2 px-3 rounded-[10px]">
                        <FontAwesomeIcon icon={faBars} onClick={toggleMenu} className="h-6 w-6 text-white cursor-pointer" />
                    </div>
                    {isMenuOpen && (
                        <div className="inset-x-0 w-full absolute z-50 top-0 origin-top-right transform p-2 transition xl:hidden">
                            <div className="divide-y-2 divide-gray-50 rounded-lg bg-[#F3F3F0] shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="px-5 pb-6 pt-5">
                                    <div className="flex items-center justify-between">
                                        <div className="inline-flex items-center space-x-2">
                                            <div className='w-[170px] h-[60px] pe-4'>
                                                <img src={logo} alt="menu logo" />
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                type="button"
                                                onClick={toggleMenu}
                                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                            >
                                                <span className="sr-only">Close menu</span>
                                                <FontAwesomeIcon icon={faX} className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid list-none">
                                            <ul className='space-y-3'>
                                                {menuItems.map((item, index) => (
                                                    <li key={index}>
                                                        <Link
                                                            to={item}
                                                            className='text-[#076280] uppercase font-[600] cursor-pointer hover:px-3 py-3 rounded-sm'
                                                            spy={true}
                                                            smooth={true}
                                                            offset={-100}
                                                            duration={500}
                                                            onClick={toggleMenu}
                                                        >
                                                            <span className='text-[17px] font-[600]'>
                                                                {item}
                                                            </span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}


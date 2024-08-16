import Navbar from "./Navbar";
import headerBg from "../images/Rectangle 2419.png";
import circletext from "../images/Untitled-1 1.png";
import flagImg from "../images/Group.png";
import buildingImg from "../images/Vector.png";
import peopleImg from "../images/Group 3063.png";
import carImg from "../images/Group 3062.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function Header() {

    let textLine = useRef();
    let circleImg = useRef();

    const { contextSafe } = useGSAP(
        () => {
            gsap.from(textLine.current, {
                opacity: 0,
                duration: 1,
                delay: 0.5,
                ease: "power2.out",
                y: 70,
            });

            gsap.to(circleImg.current, {
                rotate: 360,
                scrollTrigger: {
                    trigger: circleImg.current,
                    start: "top 80%",
                    scrub: 1,
                },
            })
        }
    )



    return (
        <div id="About Us" className="w-full lg:h-[811px] h-[511px] sm:h-[611px]" style={{ backgroundImage: `url(${headerBg})` }}>
            <div className="w-full h-full bg-[rgba(2,2,2,0.4)] ">
                <div className=" lg:container mx-auto h-full ">
                    <div className="text-white text-center w-full lg:h-[90%] h-[70%] flex flex-col justify-center  items-center pt-20 sm:pt-0">
                        <p className="sm:text-[21.38px] text-[12px] font-[700]">12% ASSURED RETURNS</p>
                        <p className="lg:text-[83.7px]  text-[35px] leading-tight font-[400] uppercase lg:leading-[88.72px] lg:px-40 " ref={textLine}>
                            the largest<br/>
                            business center
                        </p>
                        <button
                            type="button"
                            className="rounded-[3.79px] bg-[rgba(255,255,255,0.5)] px-3 py-2 my-3 text-[13.32px] text-black font-[700]"
                        >
                            Download brochure
                        </button>
                    </div>
                    <div className="flex lg:justify-between justify-evenly items-center transform transform-y-[20px] px-2">
                        <div className="lg:flex gap-5 space-y-3 jsu ">
                            <div className="flex gap-2 pt-1">
                                <div className="bg-[rgba(37,78,88,0.5)] rounded-[6.13px] lg:px-3 px-1 flex justify-center items-center  ">
                                    <div className="sm:size-[32px] size-[25px]">
                                        <img className="w-full h-full" src={flagImg} alt="" />
                                    </div>
                                </div>
                                <div className="text-white pt-1">
                                    <p className="sm:text-[18.48px] text-[12px] font-[700]">
                                        304,920
                                    </p>
                                    <p className="sm:text-[17.17px] text-[10px] font-[500]">
                                        Total Sq. Ft. Area
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2 ">
                                <div className="bg-[rgba(37,78,88,0.5)] rounded-[6.13px] lg:px-3 px-2 flex justify-center items-center  ">
                                    <div className="sm:w-[22px] sm:h-[29px] w-[16px] h-[22px]">
                                        <img className="w-full h-full" src={buildingImg} alt="" />
                                    </div>
                                </div>
                                <div className="text-white">
                                    <p className="sm:text-[18.48px] text-[12px] font-[700]">
                                        7acre
                                    </p>
                                    <p className="sm:text-[17.17px] text-[10px] font-[500]">
                                        Land Area
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex gap-5 items-end  ">
                            <div className="flex gap-2 ">
                                <div className="bg-[rgba(37,78,88,0.5)] rounded-[6.13px] md:px-3 px-1 flex justify-center items-center  ">
                                    <div className="sm:w-[32px] sm:h-[31px] w-[22px] h-[21px]">
                                        <img className="w-full h-full" src={peopleImg} alt="" />
                                    </div>
                                </div>
                                <div className="text-white">
                                    <p className="sm:text-[18.48px] text-[12px] font-[700]">
                                        3,200+
                                    </p>
                                    <p className="sm:text-[17.17px] text-[10px] font-[500]">
                                        Families Surrounded
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2 ">
                                <div className="bg-[rgba(37,78,88,0.5)] rounded-[6.13px] md:px-3 px-1 flex justify-center items-center  ">
                                    <div className="sm:w-[36px] sm:h-[27px] w-[26px] h-[17px]">
                                        <img className="w-full h-full" src={carImg} alt="" />
                                    </div>
                                </div>
                                <div className="text-white">
                                    <p className="sm:text-[18.48px] text-[12px] font-[700]">
                                        3,000+
                                    </p>
                                    <p className="sm:text-[17.17px] text-[10px] font-[500]">
                                        Car Parkings
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div>
                    <p className="text-[14.85px] font-[400] text-white transform lg:translate-y-[-590%] translate-y-[-250%] text-center">
                        Rera No - PBRERA-SAS81-PR0693
                    </p>
                    <div className="lg:size-[224px] size-[100px] rounded-full md:p-3 p-1 bg-[#ECF1F4] mx-auto transform -translate-y-1/2">
                        <div className="rounded-full bg-white " >
                            <img className="w-full h-full" src={circletext} alt="" ref={circleImg} />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}


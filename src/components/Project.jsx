

import statusImg from "../images/Group 2923.png";
import Heading from "./Heading";

export default function Status() {
    return (
        <div className="lg:container mx-auto lg:my-24 my-5 ">
            <Heading heading="project Status" para="Within the premises of the Sushma Township are reputed Schools." />
            <div className="lg:my-12 my-5 w-full lg:h-[539px] md:h-[439px] sm:h-[339px] h-[200px]">
                <img className="w-full h-full " src={statusImg} alt="" />
            </div>
            <div className='text-center absolute transform left-1/2 -translate-x-[39%] sm:translate-y-[-80px] translate-y-[-50px] '>
                
                <p className='text-[#E98F0A] sm:text-[25.66px] text-[10px] font-[700] uppercase pt-9'>
                    Completed
                </p>
            </div>
        </div>
    )
}


import pizza from "../images/04e8f9321ac6dac67c1c3ca0ef9413a8.png"
import ril from "../images/f471de3ffd6bd90fc92427aa7bfa8afe.png"
import sagar from "../images/673985c21860c5c608d269a0096ee78c.png"
import skechers from "../images/faf0fb3091aa231f63bd91bd58f49a65.png"
import peter from "../images/3279f864e73df6bef7912d4bbbca5ccc.png"
import pita from "../images/5e26fca6ff7e8f5c7af9320951565ed0.png"
import Heading from './Heading'

export default function Brands() {

    let brand = [pizza, ril, sagar, skechers, peter, pita]

    return (
        <div className="lg:container mx-auto lg:my-32 my-5">
            <Heading heading="SUSHMA PROJECTS BRANDS ON BOARD" para="Within the premises of the Sushma Township are reputed Schools." />
            <div className="lg:my-8 my-1 flex justify-center items-center lg:gap-8 gap-1">
                {
                    brand.map((item, index) => (
                        <div key={index} className="sm:size-[150px] size-[50px] ">
                            <img className="w-full h-full " src={item} alt="" />
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

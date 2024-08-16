import kotak from "../images/image 6.png";
import icici from "../images/image 7.png";
import sbi from "../images/SBI-Logo 1.png";
import bob from "../images/image 8.png";
import Heading from "./Heading";
import Slider from "react-slick";

export default function Loan() {


    let bank = [kotak, icici, sbi, bob, kotak, icici, sbi, bob,]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5.5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container mx-auto my-10">
            <Heading heading="HOME LOAN FACILITY" para="Within the premises of the Sushma Township are reputed Schools." />
            <div className="slider-container lg:my-9 my-5 py-2  ">

                <Slider className=""  {...settings}>
                    {
                        bank.map((item, index) => (
                            <div key={index} className="py-2  ">
                                <div className="lg:w-[192px] lg:h-[85px] bg-white w-[140px] h-[60px] lg:p-4  rounded-[11px] shadow-[0px_0px_2.5px_0.63px_#00000040] ">
                                    <img className="w-full h-full object-contain" src={item} alt="" />
                                </div>
                            </div>
                        ))
                    }

                </Slider>

            </div >

        </div >
    )
}



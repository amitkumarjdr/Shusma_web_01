import React from 'react'
import Heading from './Heading'

export default function Location() {
    return (
        <div className='lg:container mx-auto lg:my-16' id='LOCATION MAP'>
            <Heading heading="LOCATION MAP" para="Within the premises of the Sushma Township are reputed Schools." />
            <div className='md:flex justify-between items-center md:h-[577px] lg:pt-20 lg:pb-10 pt-3'>
                <div className='md:basis-[70%] md:h-[100%] h-[300px]  w-full'>
                    <iframe className='w-full h-full border-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.8878862150973!2d73.03713267448175!3d26.29773428625009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418ded26b9504f%3A0x91462e9405988121!2sAdiyogi%20Technosoft%20Pvt.%20Ltd.%20-%20IT%20Company%20in%20Jodhpur!5e0!3m2!1sen!2sin!4v1719481426491!5m2!1sen!2sin" ></iframe>
                </div>
                <div className='md:basis-[30%] bg-[#254E58] md:py-10 md:px-9 p-2 h-[100%] font-[400] text-white text-[13px] sm:text-[18px] lg:leading-[36px] overflow-y-auto '>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>

            </div>
        </div>
    )
}

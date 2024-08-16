import React from 'react'

export default function Map() {
    return (
        <div className='w-full h-[342px] relative lg:my-20 my-5'>
            <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60620.86256926792!2d72.96770279636806!3d26.32149093600799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418ddd09084433%3A0xcd8004988d2fcc9a!2sSukhram%20Nagar%2C%20Kabir%20Nagar%2C%20Jodhpur%2C%20Rajasthan%20342001!5e0!3m2!1sen!2sin!4v1718783217661!5m2!1sen!2sin" style={{ border: 0 }}   ></iframe>
            <div className='rounded-b-[20px] border border-[#C7C1C1] overflow-hidden absolute z-[1] top-0 left-1/2 trnasform -translate-x-[50%]  '>
                <button className='px-4 sm:py-2 py-1 bg-white text-black sm:text-[18px] text-[11px]'>
                    Near By
                </button>
                <button className='px-3 sm:py-2 py-1 text-white bg-[#254E58] sm:text-[18px] text-[11px]'>
                    Google Map
                </button>
            </div>
        </div>
    )
}

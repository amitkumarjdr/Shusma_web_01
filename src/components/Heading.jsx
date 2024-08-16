import React from 'react'

export default function Heading({ heading, para }) {
    return (
        <div className='text-center'>
            <h1 className='text-[#254E58] sm:text-[35.43px] text-[30px] font-[700] uppercase pb-3'>
                {heading}
            </h1>
            <p className='text-[#5A5454] sm:text-[18px] text-[14px] font-[500] '>
                {para}
            </p>
        </div>
    )
}

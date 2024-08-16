import React from 'react'
import building from "../images/Vector (7).png";


export default function AmenetiesCard() {
    return (
        <div className=''>
            {
                [1, 2, 3].map((item) => (
                    <div key={item} className='flex jsutify-between items-center md:gap-10 gap-1 md:my-8 my-3 '>
                        {
                            [1, 2, 3, 4].map((item) => (
                                <div key={item} className='mx-auto'>
                                    <div className='rounded-full md:size-[81px] size-[40px] sm:size-[60px] md:p-4 p-2 bg-[#1A414A] mx-auto flex justify-center items-center' >
                                        <div>
                                            <img className='w-full h-full ' src={building} alt="" />
                                        </div>
                                    </div>
                                    <p className='md:text-[21px] text-[10px] text-white font-[400] text-center'>
                                        24x7 Security
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

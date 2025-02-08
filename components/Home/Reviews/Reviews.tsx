import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewSlider from './ReviewSlider'

const Reviews = () => {
    return (
        <div className='pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]'>
            <div className='w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {/*Text Content*/}
                <div>
                    <h1 className='text-2xl font-semibold text-white'>What our customers are saying us?</h1>
                    <p className='mt-6 text-gray-200'>Our customers are at the heart of everything we do, and their feedback speaks for itself! From seamless booking experiences to unbeatable prices and round-the-clock support, we take pride in delivering top-notch service. Thousands of happy customers have shared their experiences, highlighting our commitment to quality, reliability, and convenience.</p>
                    {/*Rating*/}
                    <div className='mt-6 flex items-center space-x-6'>
                        <div>
                            <p className='text-2xl font-bold text-white'>4.88</p>
                            <p className='text-white mb-2'>Overall Rating</p>
                            <div className='flex items-center'>
                                <FaStar className='text-white' />
                                <FaStar className='text-white' />
                                <FaStar className='text-white' />
                                <FaStar className='text-white' />
                                <FaStar className='text-white' />
                            </div>
                        </div>
                    </div>
                </div>
                {/*Slider*/}
                <div className='overflow-hidden'>
                    <ReviewSlider />
                </div>
            </div>
        </div>

    )
}

export default Reviews
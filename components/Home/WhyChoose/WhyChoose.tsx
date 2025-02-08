import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import WhyChooseCard from './WhyChooseCard'

const WhyChoose = () => {
    return (
        <div className='pt-16 pb-24'>
            {/*Section Heading*/}
            <SectionHeading heading='Why Choose Us?' />
            <div className='grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20'>
                {/*Why Choose Card*/}
                <div>
                    <WhyChooseCard image='/images/c1.svg' title='Best Price Guarantee' desc="We believe in offering the best value for your money. With our Best Price Guarantee, you’ll always get the lowest prices without compromising on quality." />
                </div>
                <div>
                    <WhyChooseCard image='/images/c2.svg' title='Easy & Quick Booking' desc="Booking has never been this simple! With our hassle-free and lightning-fast process, you can secure your reservations in just a few click" />
                </div>
                <div>
                    <WhyChooseCard image='/images/c3.svg' title='24/7 Customer Support' desc="We’re always here for you, no matter the time or place. Our dedicated customer support team is available 24/7 to assist you with any questions, concerns, or last-minute change" />
                </div>
            </div>
        </div>
    )
}

export default WhyChoose
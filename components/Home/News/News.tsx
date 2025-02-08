import React from 'react'
import SectionHeading from '@/components/Helper/SectionHeading'
import NewCard from './NewCard'

const News = () => {
    return (
        <div className='pt-16 pb-16'>
            {/*Section Heading*/}
            <SectionHeading heading='Exciting Travel News for You' />
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20 '>
                <div>
                    <NewCard image="/images/n1.jpg" title="Top 10 place to visit in Switzerland " date="15 November 2025" />
                </div>
                <div>
                    <NewCard image="/images/n2.jpg" title="Top 10 place to visit in Australia" date="15 January 2025" />
                </div>
                <div>
                    <NewCard image="/images/n3.jpg" title="Top 10 place to visit in Portugal" date="4 December 2025" />
                </div>
                <div>
                    <NewCard image="/images/n4.jpg" title="Top 10 place to visit in Maldives" date="25 October 2025" />
                </div>
            </div>
        </div>
    )
}


export default News
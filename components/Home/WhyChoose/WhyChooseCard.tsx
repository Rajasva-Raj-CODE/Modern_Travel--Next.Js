import React from 'react'
import Image from 'next/image'

type Props = {
  image: string
  title: string
  desc: string
}

const WhyChooseCard = ({ image, title , desc }: Props) => {
  return (
    <div>
        <Image src={image} alt="image" width={70} height={70} className='mx-auto object-cover' />
        <h1 className='mt-6 text-center text-gray-900 font-medium text-lg '>{title}</h1>
        <p className='mt-2 text-center text-xs font-medium text-gray-700'>{desc}</p>
    </div>
  )
}

export default WhyChooseCard
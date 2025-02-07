import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { TbAirBalloon } from 'react-icons/tb'

type Props = {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {
    return (
        <div className='bg-blue-950 trasnsition-all duration-200 h-[12vh] z-[1000] fixed w-full'>
            <div className='flex justify-between items-center w-[90%] xl:w-[80%] mx-auto h-full'>
                {/*LOGO*/}
                <div className='flex items-center space-x-2'>
                    <div className='w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col'>
                        <TbAirBalloon className='text-white w-6 h-6' />
                    </div>
                    <h1 className='text-xl md:text-2xl text-white uppercase font-bold'>Tripi</h1>
                </div>
                {/*NavLinks*/}
                <div className='hidden lg:flex items-center space-x-10'>
                    {navLinks.map((link) => {
                        return <Link href={link.url} key={link.id}>
                            <p className="relative text-white text-base font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right">
                                {link.label}
                            </p>

                        </Link>
                    })}
                </div>
                {/*Buttons*/}
                <div className='flex items-center space-x-4'>
                    <button className='md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg'>Book Now</button>
                    {/*Burger Menu*/}
                    <HiBars3BottomRight onClick={openNav} className='lg:hidden text-white cursor-pointer w-8 h-8' />
                </div>
            </div>
        </div>
    )
}

export default Nav
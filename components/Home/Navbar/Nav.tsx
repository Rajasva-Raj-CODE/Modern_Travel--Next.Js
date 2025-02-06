import React from 'react'
import { TbAirBalloon } from 'react-icons/tb'

const Nav = () => {
    return (
        <div className='bg-blue-950 trasnsition-all duration-200 h-[12vh] z-[1000]'>
            <div className='flex justify-between items-center w-[90%] xl:w-[80%] mx-auto h-full'>
                {/*LOGO*/}
                <div className='flex items-center space-x-2'>
                    <div className='w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col'>
                        <TbAirBalloon className='text-white w-6 h-6' />
                    </div>
                    <h1 className='text-xl md:text-2xl text-white uppercase font-bold'>Tripi</h1>
                </div>
                {/*NavLinks*/}
            </div>
        </div>
    )
}

export default Nav
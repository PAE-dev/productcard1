import React from 'react'
import Image from 'next/image';
import { FiStar } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";

const ProductCart = () => {
  return (
    <div className='bg-blue-100 h-[700] w-[700px] flex justify-center item-center'>
        <div className='bg-white rounded-2xl w-[250px] transform transition-all
        hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl mt-4 mb-4 lg:mt-0'>
            {/*cabecera*/}
            <div className='flex justify-end'>
                <h1 className='flex p-3 text-gray-400 font-light text-xs'>id:123456789</h1>
            </div>
            {/*parte central*/}
            <div>
                <div className='flex justify-center items-center mx-3'>
                    <Image
                        src="/phone.jpg"
                        alt="foto"
                        width={240}
                        height={180}
                        className='rounded-xl h-[200px] object-cover'
                    />
                </div>
                <div className='flex flex-col p-3'>
                    <h1 className='text-base font-medium'>Apple iphone 15 pro</h1>
                    <div className='flex gap-2'>
                        <div className='flex gap-1 items-center'>
                            <FiStar />
                            <FiStar />
                            <FiStar />
                            <FiStar />
                            <FiStar />
                        </div>
                        <div className='flex mx-3 items-center gap-1'>
                            <FiMessageSquare className='text-gray-400'/>
                            <h1 className='text-gray-400'>100</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/*parte inferior*/}
            <div className='flex justify-between m-3'>
                <div>
                    <div className='text-gray-400 text-sm'>
                        <h1>$999.00</h1>
                    </div>
                    <div className='font-medium'>
                        <h1>$899.00</h1>
                    </div>
                </div>
                <div>
                    <div className='bg-blue-500 rounded-xl h-10 w-10 flex items-center justify-center'>
                        <FiShoppingCart className='text-white w-5 h-5'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCart
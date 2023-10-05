import React from 'react'
import { FaImage } from 'react-icons/fa'

export const ProductSkeletonItem = () => {
  return (
          <div role="status" className="py-4 p-2 space-y-4  rounded-lg rounded-tr-none shadow animate-pulse  md:p-6 bg-neutral-800 opacity-50">
            <div className="flex items-center justify-between">
               <div className="w-20 h-20 flex items-center justify-center  rounded p-2">
                 <FaImage className='w-full h-full text-gray-500 p-0 ' />
              </div>
              <div className='flex-1'>
               <div className='px-1 '>
                     <div className="h-3.5 bg-gray-300 rounded dark:bg-gray-600 w-1/2 mb-2.5"></div>
                     <div className="flex items-center  ">
                        <div style={{width:'32%'}} className="h-1.5 bg-gray-400 rounded-full dark:bg-gray-700 "></div>
                        <div style={{width:'38%'}} className="mx-2 h-1.5 bg-gray-500 rounded-full dark:bg-gray-600 "></div>
                        <div style={{width:'24%'}} className="h-1.5 bg-gray-500 rounded-full dark:bg-gray-600 "></div>
                    </div>
                    <div className='my-1'></div>
                    <div className="flex items-center w-full ">
                        <div  style={{width:'35%'}} className="h-1.5 bg-gray-400 rounded-full dark:bg-gray-700 "></div>
                        <div  style={{width:'20%'}} className="mx-2 h-1.5 bg-gray-500 rounded-full dark:bg-gray-600  "></div>
                        <div  style={{width:'35%'}} className="h-1.5 bg-gray-500 rounded-full dark:bg-gray-500  "></div>
                    </div>
               </div>
               <div className='flex justify-end'>
                  <div className="h-2.5 bg-gray-500 rounded dark:bg-gray-600 w-20 mt-2.5"></div>
               </div>
              </div>
              </div>
            </div>
  )
}

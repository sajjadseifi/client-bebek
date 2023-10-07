import React from 'react'
import './apploading.css'
import { bodyColor } from '../../constants/colors'
import ApplodingGif from '../../assets/gif/apploading-crop.gif'


export const AppLoadingWrapper = ({children}) => {
  return (
    <div  
    style={{background:bodyColor}} 
    className='fixed top-0 left-0 w-full h-full py-10 flex flex-col justify-center items-center text-center text-white '>
           <div>
              <img src={ApplodingGif} className='w-[80px]  h-auto mx-auto pr-3' />
              {children}
           </div>
    </div>
  )
}

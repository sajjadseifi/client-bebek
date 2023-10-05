import React from 'react'
import './apploading.css'
import { bodyColor } from '../../constants/colors'
import ApplodingGif from '../../assets/gif/apploading-crop.gif'


export const AppLoading = () => {
  return (
    <div  style={{background:bodyColor}}  className='fixed top-0 left-0 w-full h-full py-10 flex flex-col justify-center items-center text-center text-white '>
            <img src={ApplodingGif} className='max-w-[120px] h-auto pr-4' />
    </div>
  )
}

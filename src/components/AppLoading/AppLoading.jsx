import React from 'react'
import './apploading.css'
import ApplodingGif from '../../assets/gif/apploading-crop.gif'
export const AppLoading = () => {
  return (
    <div    className='fixed top-0 left-0 w-full h-full py-10 flex flex-col justify-center items-center text-center text-white '>
            <img src={ApplodingGif} className='max-w-[120px] h-auto pr-4' />
            <h1 className='text-4xl py-2'>کافه ببک</h1>
            <h2 >لطفا صبور باشید (: </h2>
    </div>
  )
}

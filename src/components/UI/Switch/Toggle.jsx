import { useEffect, useState } from "react"

export const Switcher = ({toggle}) => {


   return (
     <div className='autoSaverSwitch relative inline-flex cursor-pointer select-none items-center ' dir="ltr">
         <input
           type='checkbox'
           name='autoSaver'
           className='sr-only'
           checked={!toggle}
         />
         <span
           className={`slider mr-3 flex h-[22px] w-[44px] items-center rounded-full p-1 duration-200 ${
            !toggle ? 'bg-red-400' : 'bg-sky-400'
           }`}
         >
           <span
             className={`dot h-[16px] w-[16px] rounded-full bg-white duration-200 ${
               !toggle ? 'translate-x-5' : ''
             }`}
           ></span>
         </span>
     </div>
   )
 }
 
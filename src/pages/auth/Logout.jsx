import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { useAuthentication } from '../../core/context/auth.context';

export const Logout = () => {
   
   const [timer,setTimer] = useState(11);
   const [timerHistory,setTimerHistory] = useState(11);
   const {clearToken} = useAuthentication()
   const navigate = useNavigate()

   const onCancel = () => {
      clearTimeout(timerHistory)
   }

   const onExit = () => {
      clearToken()
      navigate('/')
   }

   const reduceTime = () => {
      setTimer(t=> {
         if(t < 1) return 0
      
         const interval = setTimeout(reduceTime, 1000);
         setTimerHistory(interval )

         return t - 1
      })
      
   }
   useEffect(()=> {
      reduceTime();
   },[])

   return (
    <div className=' text-xl space-y-4 text-center'>
      <div className='text-lime-200'>
         {!!timer && <h2 className=''>{timer}</h2>}
         {!!timer 
         ? 
         <h1>ایا مایل به خروج از حساب خود هستید؟</h1>
         :
         <h1>درحال خروج از کافه</h1>
         }
      </div>
      {!!timer  && (
         <div className='text-lg'>
            <button onClick={onCancel} className='bg-sky-700 text-sky-200 px-5 py-2 rounded mx-2 w-36'>انصراف</button>
            <button  onClick={onExit}  className='bg-red-200 text-red-700 rounded px-5 py-2 w-36'>خروج</button>
      </div>
      )}
      
    </div>
  )
}

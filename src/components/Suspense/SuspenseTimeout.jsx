import React, { Suspense, useEffect, useState } from 'react'


export const SuspenseTimeout = ({
   minDuration = 1000,
   fallback,
   children
}) => {
   const [load,setLoad] = useState(false)

   useEffect(()=>{
      setTimeout(() => {
         setLoad(true)
      }, minDuration);

      return () => {
         setLoad(false)
      }
   },[])


  return (
   <Suspense  fallback={fallback}>
      {load ?  children : fallback}
   </Suspense>
  )
}

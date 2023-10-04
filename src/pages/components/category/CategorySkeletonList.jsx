import React from 'react'
import { CategorySkeleton } from './CategorySkeleton'

export const ProductSkeletonList = ({counts = 1}) => {
   const skeletons = []
   for(let i =0;i<counts;i++) {
      skeletons.push(<li className='my-1'><CategorySkeleton/></li>)
   }
   return<>{skeletons}</>
  
}

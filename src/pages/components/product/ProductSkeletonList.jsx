import React from 'react'
import { ProductSkeletonItem } from './ProductSkeletonItem'

export const ProductSkeletonList = ({counts = 1}) => {
   const skeletons = []
   for(let i =0;i<counts;i++) {
      skeletons.push(<li key={i} className='my-1'><ProductSkeletonItem/></li>)
   }
   return<>{skeletons}</>
  
}

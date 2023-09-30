import React from 'react'
import { ProductSkeletonItem } from './ProductSkeletonItem'

export const ProductSkeletonList = ({counts = 1}) => {
   console.log('dsfds')
   const skeletons = []
   for(let i =0;i<counts;i++) {
      skeletons.push(<li className='my-1'><ProductSkeletonItem/></li>)
   }
   console.log(skeletons)
   return<>{skeletons}</>
  
}

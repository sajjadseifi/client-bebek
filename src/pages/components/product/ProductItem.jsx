import React from 'react'
import { ProductCard } from '../../../components/Card/ProductCard'

export const ProductItem = ({id,slug,title,description,thumbnail,price}) => {
  return (
    <ProductCard key={id}>
      <div className='flex '>
         <div className='px-2 flex items-center'>
            <img width={80} height={80} className='rounded' src={thumbnail} alt="" />
         </div>
         <div className='flex flex-col px-2 flex-1 text-right'>
            <h3 className='text-2xl text-lime-400'>{title}</h3>
            <p className='flex-1 text-xs text-gray-400 py-1'>{description}</p>
            <div className='text-left'>
               {price && <span>{price} تومان</span>}
            </div>
         </div>
      </div>
    </ProductCard>
  )
}

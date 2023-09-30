import React, { useEffect } from 'react'
import { productAPI } from '../../../core/api'
import { useQuery } from 'react-query'
import { ProductSkeletonList } from './ProductSkeletonList'
import { ProductList } from './ProductList'
import { useParams } from 'react-router'

export const ProductSection = () => {
  const params = useParams()
  const categoryId = params.categoryId
  
  const getProducts = () => productAPI.getProductByCategory(categoryId)
  
  const {  data,isLoading,refetch } = useQuery({
    queryKey: ['products'],
    queryFn:    getProducts,
  })
  
  useEffect(()=> {
    refetch()
  },[params,categoryId])
  
  const products = data?.products ?? []
  
  console.log({categoryId,isLoading})
  return (
    <div className='py-2 px-4'>
      <ul className='scrolle'>
        {isLoading 
          ?  <ProductSkeletonList counts={4}/> 
          :  <ProductList products={products}/>
        }
        {!isLoading && !products.length &&(
          <h4 className='text-red-500 text-center py-10 text-3xl'>محصولی ثبت نشده!</h4>
        )}
      </ul>
    </div>
  )
}

import React, { useEffect } from 'react'
import { productAPI } from '../../../core/api'
import { useQuery, useQueryClient } from 'react-query'
import { ProductSkeletonList } from './ProductSkeletonList'
import { ProductList } from './ProductList'
import { useParams } from 'react-router'
import { IconButton } from '../../../components/UI/Button/IconButton'
import { FaPlus } from 'react-icons/fa'
import { queryClient } from '../../../App'

export const ProductSection = ({category}) => {
  const params = useParams()
  const categoryId = params.categoryId
  const client = useQueryClient()
  const getProducts = () => productAPI.getProductByCategory(categoryId)
  
  const {  data,isLoading,isFetched,isRefetching,status,refetch } = useQuery({
    queryKey: ['products'],
    queryFn:    getProducts,
    keepPreviousData:false
  })
  
  useEffect(()=> {
    refetch()
  },[categoryId])
  
  const products = data?.products ?? []
  
  const isFetching = isLoading ||  isRefetching || !isFetched

  return (
    <div className='py-2 px-4'>
      <ul className='scrolle'>
        {isFetching 
          ?  <ProductSkeletonList counts={2}/> 
          :  <ProductList products={products}/>
        }
        {!isFetching && !products.length &&(
          <div className='py-5  text-center flex flex-col justify-center items-center space-y-2'>
            <h4 className='text-red-500   text-3xl'>محصولی ثبت نشده!</h4>
            <IconButton   bgColor='bg-purple-200' textColor='text-purple-800' title='محصول جدید' icon={<FaPlus />} />
          </div>
        )}
      </ul>
    </div>
  )
}

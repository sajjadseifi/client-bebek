import React, { useEffect } from 'react'
import { productAPI } from '../../../core/api'
import { useQuery } from 'react-query'
import { ProductSkeletonList } from './ProductSkeletonList'
import { ProductList } from './ProductList'
import { useParams } from 'react-router'
import { AccessAdmin } from '../../../components/Auth/AccessAdmin'
import { TiPlus } from 'react-icons/ti'
import { IconButton } from '../../../components/UI/Button/IconButton'
import { useModalPage } from '../../../components/ModalPage/ModalPage'
import { AddProductPage } from '../../product/AddProductPage'
import { FaPlus } from 'react-icons/fa'

export const ProductSection = ({category}) => {
  const {addPage} = useModalPage()
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

  return (
    <div className='py-2 px-4'>
      <ul className='scrolle'>
        {isLoading 
          ?  <ProductSkeletonList counts={4}/> 
          :  <ProductList products={products}/>
        }
        {!isLoading && !products.length &&(
          <div className='py-5  text-center flex flex-col justify-center items-center space-y-2'>
            <h4 className='text-red-500   text-3xl'>محصولی ثبت نشده!</h4>
            <IconButton   bgColor='bg-purple-200' textColor='text-purple-800' title='محصول جدید' icon={<FaPlus />} />
          </div>
        )}
      </ul>
    </div>
  )
}

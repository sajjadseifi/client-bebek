import React, { useEffect } from 'react'
import { productAPI } from '../../../core/api'
import { useQuery } from 'react-query'
import { ProductSkeletonList } from './ProductSkeletonList'
import { ProductList } from './ProductList'
import { useParams } from 'react-router'
import { IconButton } from '../../../components/UI/Button/IconButton'
import { FaPlus } from 'react-icons/fa'
import { AccessAdmin } from '../../../components/Auth/AccessAdmin'
import { Link } from 'react-router-dom'

export const ProductSection = (props) => {
  const params = useParams()
  const categoryId = params.categoryId
  const getProducts = () => productAPI.getProductByCategory(categoryId)
  
  const {  data,isLoading,isFetched,isRefetching,refetch } = useQuery({
    queryKey: ['products'],
    queryFn:    getProducts,
    keepPreviousData:false
  })
  
  useEffect(()=> {
    refetch()
  },[categoryId,refetch])
  
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
            <AccessAdmin>
              <Link to='/product/add'>
                <IconButton   bgColor='bg-purple-200' textColor='text-purple-800' title='محصول جدید' icon={<FaPlus />} />
              </Link>
            </AccessAdmin>
          </div>
        )}
      </ul>
    </div>
  )
}

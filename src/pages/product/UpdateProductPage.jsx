import React, { useEffect, useState } from 'react'
import {   useParams } from 'react-router'
import { ProductForm } from '../components/product/ProductForm'
import { productAPI } from '../../core/api'
import {  useQuery } from 'react-query'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { imageNullableYup, imageYup } from '../../core/helper/validation/imageValidation'

const schema = yup.object({
  categoryId: yup.string()
  .required('لطفا یک دسته بندی را انتخاب کنید'),
  title: yup.string()
        .min(3,'حداقل 3 حرف وارد کنید')
        .max(12,'حداکثر 12 حرف وارد کنید')
        .required('فیلد عنوان اجباری است.'),
  description: yup.string()
  .max(100,'حداکثر 100 حرف وارد کنید')
  .required('فیلد توضیحات اجباری است.'),
  thumbnail: imageNullableYup
}).required();


export const UpdateProductPage = () => {
  const params = useParams()
  const [defaultValues,setDefaultValues] = useState({})
  const productId = params.productId
    

  const onFetchProduct =()=> productAPI.getProductById(productId)

  const {data} = useQuery({
    queryKey:['product-update'],
    queryFn:onFetchProduct,
    retry:0
  }) 

  const onFormatData = (data) => {
      const productData = {
         ...data,
         productId,
      }

      return productData
   }
   
   useEffect(()=>{
   const product = data?.product
    setDefaultValues({
      'categoryId': product?.category_id,
      'description': product?.description,
      'price': +product?.price,
      'thumbnail': product?.thumbnail,
      'title': product?.title,
      'discounted_price': +product?.discounted_price,
    })
   },[data])

   return (
    <div className='text-right'>
      <h1 className='text-center text-4xl text-orange-500'>ویرایش محصول</h1>
      <ProductForm 
          api={productAPI.update} 
          onFormatData={onFormatData}
          btnText='ویرایش'
          defaultValues={defaultValues}
          onSuccess={(data)=>toast.info("محصول با موفقیت ویرایش شد")}
          onError={(err)=>toast.error("درخواست ویرایش محصول با خطا مواجه شد")}
          validationShema={schema}
      />
    </div>
  )
}

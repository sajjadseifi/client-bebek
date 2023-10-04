import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { categoryAPi } from '../../core/api'
import { CategoryForm } from '../components/category/CategoryForm'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import * as yup from "yup";
import { imageYup } from '../../core/helper/validation/imageValidation'

const schema = yup.object({
  title: yup.string()
        .min(3,'حداقل 3 حرف وارد کنید')
        .max(12,'حداکثر 12 حرف وارد کنید')
        .required('فیلد عنوان اجباری است.'),
  description: yup.string()
  .max(100,'حداکثر 100 حرف وارد کنید')
  .required('فیلد توضیحات اجباری است.'),
  icon:imageYup,

}).required();

export const UpdateCategoryPage = () => {
  const params = useParams()
  const [defaultValues,setDefaultValues] = useState({})
  const categoryId = params.categoryId
    

  const onFetchProduct =()=> categoryAPi.getCategoryById(categoryId)

  const {data} = useQuery({
    queryKey:['category-update'],
    queryFn:onFetchProduct,
    retry:0
  }) 


  const onFormatData = (data) => {
      const categoryData = {
         ...data,
         categoryId,
      }
      return categoryData
   }


   useEffect(()=>{
    const product = data?.categoris
     setDefaultValues({
       'title': product?.title,
       'description': product?.description,
       'color': +product?.color,
       'icon': product?.icon,
     })
    },[data,categoryId])
   return (
    <div className='text-right'>
      <h1 className='text-center text-4xl text-orange-500'>ویرایش منو</h1>
      <CategoryForm 
          api={categoryAPi.update} 
          onFormatData={onFormatData} 
          defaultValues={defaultValues}
          validationShema={schema}
          btnText='ویرایش'
          onSuccess={(data)=>toast.info('منو با موفقیت ویرایش شد')}
          onError={(err)=>toast.error('ویرایش منو با خطا مواجه شد!')}
      />
    </div>
  )
}

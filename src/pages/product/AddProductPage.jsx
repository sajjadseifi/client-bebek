import React, { useEffect, useState } from 'react'
import { productAPI } from '../../core/api'
import { ProductForm } from '../components/product/ProductForm'
import { toast } from 'react-toastify'
import * as yup from 'yup';
import { imageNullableYup } from '../../core/helper/validation/imageValidation';
import { useLocation, useParams } from 'react-router';

const schema = yup.object({
  categoryId: yup.string()
  .required('لطفا یک دسته بندی را انتخاب کنید'),
  title: yup.string()
        .min(3,'حداقل 3 حرف وارد کنید')
        .max(30,'حداکثر 30 حرف وارد کنید')
        .required('فیلد عنوان اجباری است.'),
  description: yup.string()
  .max(100,'حداکثر 100 حرف وارد کنید')
  .required('فیلد توضیحات اجباری است.'),
  thumbnail: imageNullableYup
}).required();

export const AddProductPage = () => {
  const location = useLocation()
  const search = new URLSearchParams(location.search)
  const categoryId = search.get('categoryId')
  const [defaultValues,setDefaultValues] = useState({})
  
   const onFormatData = (data) => {
      const productData = { ...data }
      return productData
    }

    const onSuccess = (data) => {
          toast.success("محصول با موفقیت اضافه  شد")
    }

    useEffect(()=> {
      setDefaultValues(categoryId ? { categoryId } : {})
    },[categoryId])

  return (
    <div className='text-right flex-1'>
      <h1 className='text-center text-4xl text-purple-500'>افزودن محصول</h1>
      <ProductForm 
          api={productAPI.create} 
          onFormatData={onFormatData}
          btnText='افزودن'
          validationShema={schema}
          onSuccess={onSuccess}
          defaultValues={defaultValues}
          onError={(err)=>toast.error("درخواست افزودن محصول با خطا مواجه شد")}
      />
    </div>
  )
}

export default AddProductPage
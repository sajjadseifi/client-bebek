import React from 'react'
import { categoryAPi } from '../../core/api'
import { CategoryForm } from '../components/category/CategoryForm'
import { toast } from 'react-toastify'
import * as yup from "yup";
import { imageYup } from '../../core/helper/validation/imageValidation';


const schema = yup.object({
  title: yup.string()
        .min(3,'حداقل 3 حرف وارد کنید')
        .max(12,'حداکثر 12 حرف وارد کنید')
        .required('فیلد عنوان اجباری است.'),
  description: yup.string()
  .max(12,'حداکثر 100 حرف وارد کنید')
  .required('فیلد توضیحات اجباری است.'),
  icon:imageYup,
}).required();

export const AddCategoryPage = () => {
  const onFormatData = (data) => {
      const categoryData = { ...data }
      return categoryData
   }
   return (
    <div className='text-right'>
      <h1 className='text-center text-4xl text-orange-500'>افزودن منو</h1>
      <CategoryForm 
          api={categoryAPi.create} 
          onFormatData={onFormatData}
          btnText='افزودن'
          onSuccess={(data)=>toast.info('منو با موفقیت افزوده شد')}
          onError={(err)=>toast.error('افزودن منو با خطا مواجه شد!')}
          validationShema={schema}
      />
    </div>
  )
}

export default AddCategoryPage

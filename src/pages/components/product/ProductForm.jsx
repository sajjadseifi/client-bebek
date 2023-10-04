import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query';
import { ImageFieldSqure } from '../../../components/UI/Field/ImageFieldSqure';
import { FormProvider, useForm } from 'react-hook-form';
import { TextField } from '../../../components/UI/Field/Text';
import { TextArea } from '../../../components/UI/Field/TextArea';
import { ButtonLoader } from '../../../components/UI/Button/ButtonLoader';
import { BiImageAdd, BiText } from 'react-icons/bi';
import { CategorySection } from '../category/CategorySection';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '../../../components/UI/Error/ErrorMessage';
import { useNavigate } from 'react-router';

export const ProductForm = ({
  validationShema = {},
   defaultValues = {},
   onFormatData= (data)=> data,
   api,
   btnText,
   onSuccess= () => {},
   onError= () =>{},
}) => {
  const [category,setCategory] = useState()
  const methods = useForm( {defaultValues : {} , resolver: yupResolver(validationShema)}  )
  const { handleSubmit, setValue } = methods
  const navigate = useNavigate()


   const { mutate, isLoading } = useMutation(api, {
     onSuccess:()=>{
        onSuccess()
        const url =  `/menu` + category?.id ? `/${category.id}`:''
        navigate(url)
      }, 
   onError
   });

   const request = (d) => {
      const data = onFormatData(d)
      mutate(data)
   }
   
   useEffect(()=>{
    setValue('categoryId',category?.id)
   },[category,setValue])

   useEffect(()=>{
       const keys = Object.keys(defaultValues)
       keys.map((key)=>defaultValues[key] && setValue(key,defaultValues[key]))
   },[defaultValues])
   return (
   <FormProvider {...methods}>
   <form onSubmit={handleSubmit(request)} className='space-y-2 p-5'>
       <TextField  
           type="text" 
           lable='منو را انتخاب کنید'  
           icon={<BiText/>}   
           name='categoryId'
           placeHolder='لطفا نام محصول را وارد نمایید'
           style={{display:'none'}}
       />
     <CategorySection  isLink={false} categoryId={category?.id} onChange={setCategory} />
     <ErrorMessage  name='categoryId'/>
        <ImageFieldSqure 
           lable='عکس محصول'  
           icon={<BiImageAdd/>}   
           name='thumbnail'
           placeHolder='لطفا عکس مورد نظر را انتخاب نمایید'
       />
     <TextField  
           type="text" 
           lable='نام محصول'  
           icon={<BiText/>}   
           name='title'
           placeHolder='لطفا نام محصول را وارد نمایید'
       />
     <TextArea 
         type="text" 
         lable='توضیحات محصول'  
         icon={<BiText/>}   
         name='description'
         placeHolder='لطفا توضیحات محصول را وارد نمایید.'
     />
      <TextField 
         type='number'
         lable='قیمت محصول (تومان)'  
         icon={<BiText/>}   
         name='price'
         placeHolder='لطفا قیمت محصول را به تومان وارد نمایید.'
     />
     <ButtonLoader disabled={isLoading}  title={btnText} loading={isLoading}/>
   </form>
 </FormProvider>
  )
}

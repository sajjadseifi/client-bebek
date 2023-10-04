import React, { useEffect } from 'react'
import { useMutation } from 'react-query';
import { ImageFieldSqure } from '../../../components/UI/Field/ImageFieldSqure';
import { FormProvider, useForm } from 'react-hook-form';
import { TextField } from '../../../components/UI/Field/Text';
import { TextArea } from '../../../components/UI/Field/TextArea';
import { ButtonLoader } from '../../../components/UI/Button/ButtonLoader';
import { BiImageAdd, BiText } from 'react-icons/bi';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ErrorMessage } from '../../../components/UI/Error/ErrorMessage';



export const CategoryForm = ({
   defaultValues = {},
   onFormatData= (data)=> data,
   api,
   btnText,
   onSuccess = (data) => alert("success requert"),
   onError = (error) => alert("faild requert"),
   onSettled= () => alert("settled requert"),
   validationShema = {},
}) => {
   const methods = useForm( {defaultValues, resolver: yupResolver(validationShema)} )
   const { handleSubmit,setValue,formState:{errors} } = methods

   const { mutate, isLoading } = useMutation(api, { 
     onSuccess,
     onError: (data)=>onError(data),
    });

   const request = (d) => {
      const data = onFormatData(d)
      mutate(data)
   }

   useEffect(()=>{
      const keys = Object.keys(defaultValues)
      keys.map((key)=>defaultValues[key] && setValue(key,defaultValues[key]))
  },[defaultValues])


  return (
   <FormProvider   {...methods}>
   <form onSubmit={handleSubmit(request)} className='space-y-2 p-5'>
       <ImageFieldSqure 
           lable='عکس منو'  
           icon={<BiImageAdd/>}   
           name='icon'
           placeHolder='لطفا عکس مورد نظر را انتخاب نمایید'
       />
     <TextField  
           type="text" 
           lable='عنوان منو'  
           icon={<BiText/>}   
           name='title'
         placeHolder='لطفا عنوان منو را وارد نمایید.'
       />
     <TextArea 
         type="text" 
         lable='توضیحات منو'  
         icon={<BiText/>}   
         name='description'
         placeHolder='لطفا توضیحات منو را وارد نمایید.'
     />
   
     <ButtonLoader disabled={isLoading}  title={btnText} loading={isLoading}/>
   </form>
 </FormProvider>
  )
}

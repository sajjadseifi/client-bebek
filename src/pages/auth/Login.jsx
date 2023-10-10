import React from 'react'
import { TextField } from '../../components/UI/Field/Text'
import {FaKey} from 'react-icons/fa'
import {BiSolidUser} from 'react-icons/bi'
import { ButtonLoader } from '../../components/UI/Button/ButtonLoader'
import { authAPI } from '../../core/api'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router'
import { useAuthentication } from '../../core/context/auth.context'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
    username:yup
    .string()
    .min(3,'حداقل 3 حرف وارد کنید')
    .max(20,'حد اکثر 20 حرف وارد کنید')
    .matches(/[_a-zA-Z][_a-zA-Z0-9]*/,'فرمت نام کاربری وارد شده اشتباه است')
    .required('فیلد نام کاربری اجباری است.'),
    password:yup
    .string()
    .min(6,'حداقل 6 حرف وارد کنید')
    .max(32,'حد اکثر 32 حرف وارد کنید')
    .required('فیلد گذرواژه اجباری است.'),
}).required();


export const Login = () => {
  const navigate = useNavigate()
  const methods = useForm({resolver:yupResolver(schema)});
  const { handleSubmit } = methods
  const {setToken} = useAuthentication()

  const onLoginSuccess = (data) => {
    setToken(data.token)
    navigate('/')
    toast.info('ورود کاربر با موفقیت انجام شد')
  }

  const { mutate, isLoading } = useMutation(authAPI.loginAccount, {
        onSuccess: onLoginSuccess,
        onError: () =>     toast.error('ورود کاربر با خطا مواجه شد'),
  });

  const onSubmit = handleSubmit((data) => {
    const userLogin = { ...data };
    mutate(userLogin);
  });
  return (
    <div className='w-full   mx-4'>
      <div className='text-center space-y-1 '>
         <h1 className='text-black text-4xl'> ورود به کافه</h1>
      </div>
      <div className='my-2'></div>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit} className='space-y-3 w-full' >
          <TextField  
                type="text" 
                lable='نام کاربری'  
                icon={<BiSolidUser/>}   
                name='username'
                placeHolder='لطفا نام کاربری خود را وارد کنید.'
            />
          <TextField 
              type="password" 
              lable='گذرواژه'  
              icon={<FaKey/>}   
              name='password'
              placeHolder='لطفا گذرواژه  خود را وارد کنید.'

          />
          <ButtonLoader  disabled={isLoading}  title='ورود' loading={isLoading}/>
        </form>
      </FormProvider >
    </div>
  )
}


export default Login
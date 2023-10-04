import React, { useEffect } from 'react'
import CoffeeLogo from '../../assets/logo/black.jpg'
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

export const Login = () => {
  const navigate = useNavigate()
  const methods = useForm();
  const { handleSubmit } = methods
  const {setToken,token,isLogined} = useAuthentication()

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
    <div className='h-full w-full flex flex-col items-center justify-center px-4'>
      <div className='text-center space-y-1 '>
         {/* <img className='w-1/6 mx-auto rounded-full' src={CoffeeLogo}/> */}
         <h1 className='text-white text-4xl'>ورود</h1>
      </div>
      <div className='my-2'></div>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit} className='space-y-2 w-full' >
          <TextField  
                type="text" 
                lable='نام کاربری'  
                icon={<BiSolidUser/>}   
                name='username'
            />
          <TextField 
              type="password" 
              lable='رمز عبور'  
              icon={<FaKey/>}   
              name='password'
          />
          <ButtonLoader disabled={isLoading}  title='ورود' loading={isLoading}/>
        </form>
      </FormProvider >
    </div>
  )
}

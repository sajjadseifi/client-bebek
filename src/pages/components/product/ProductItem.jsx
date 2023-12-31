import React from 'react'
import { ProductCard } from '../../../components/Card/ProductCard'
import { SettingIcons } from '../../../components/Setting/SettingIcons'
import { useNavigate } from 'react-router'
import { AccessAdmin } from '../../../components/Auth/AccessAdmin'
import { productAPI } from '../../../core/api'
import { toast } from 'react-toastify'
import { queryClient } from '../../../App'
import { FaImage } from 'react-icons/fa'

export const ProductItem = ({id,slug,title,description,thumbnail,price}) => {
   const _price = +price 
   const navigate = useNavigate()

  const onEdit = ()=>{
   navigate(`/product/update/${id}`)
  }

  const onDelete = (status)=> {
      if(status) 
      toast.success(`محصول  ${title} با موفقیت حذف شد`)
   else 
   toast.error(`حذف محصول ${title} با خطا مواجه شد`)
   queryClient.refetchQueries({ queryKey: ['products'] })
  }

   return (
    <ProductCard key={id}>
      <AccessAdmin>
         <div className='absolute top-0 left-0 py-2'>
            <SettingIcons 
               editing 
               deleting
               className='space-x-2'
               onEdit={onEdit}
               deleteApi={()=>productAPI.deleteProductById(id)}
               onDelete={onDelete}
               modal = {{
                 title:(   <>
                   <span>حذف محصول</span>
                   <span className='bg-red-200 text-red-600 rounded-sm mx-1 p-3 py-0 '>{title}</span>
                 </>),
                 description: `آیا برای حذف محصول اطمینان دارید؟`,
                }}
               />
         </div>
      </AccessAdmin>
      <div className='xs:flex '>
         <div className='p-2 flex items-center justify-center'>
            <div className='w-2/3  xs:w-20 xs:h-20 rounded overflow-hidden '>
               {thumbnail ?(
                  <img className='w-full h-full' src={thumbnail} alt={title} />
               ):(
                  <FaImage className='w-full h-full text-gray-300 p-0 ' />
               )}
            </div>
         </div>
         <div className='flex flex-col px-2 flex-1 text-right'>
            <h3 className='text-xl text-green-500 text-center xs:text-right'>{title}</h3>
            <p className='flex-1 text-xs text-gray-200 py-1'>{description}</p>
            <div className='text-left'>
               {!!_price && <span>{price} تومان</span>}
            </div>
         </div>
      </div>
    </ProductCard>
  )
}

import React from 'react'
import { ProductCard } from '../../../components/Card/ProductCard'
import { SettingIcons } from '../../../components/Setting/SettingIcons'
import { useNavigate } from 'react-router'
import { AccessAdmin } from '../../../components/Auth/AccessAdmin'
import { productAPI } from '../../../core/api'
import { toast } from 'react-toastify'
import { queryClient } from '../../../App'

const defaultIco = <svg className="w-20 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
   <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
   <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
</svg>
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
         <div className='absolute top-0 left-0 py-3 p-2'>
            <SettingIcons 
               editing 
               deleting
               className='space-x-2'
               onEdit={onEdit}
               deleteApi={()=>productAPI.deleteProductById(id)}
               onDelete={onDelete}
               modal = {{
                 title:(   <>
                   <span>حذف منو</span>
                   <span className='bg-red-200 text-red-600 rounded-sm mx-1 p-3 py-0 '>{title}</span>
                 </>),
                 description: `با حذف منو تمامی محصولات منو حذف خواهند شد.`,
                }}
               />
         </div>
      </AccessAdmin>
      <div className='xs:flex '>
         <div className='p-2 flex items-center justify-center'>
            <img className='rounded w-2/3 h-auto xs:w-20 xs:h-20 ' src={thumbnail ?? defaultIco} alt="" />
         </div>
         <div className='flex flex-col px-2 flex-1 text-right'>
            <h3 className='text-xl text-lime-400 text-center xs:text-right'>{title}</h3>
            <p className='flex-1 text-xs text-gray-400 py-1'>{description}</p>
            <div className='text-left'>
               {!!_price && <span>{price} تومان</span>}
            </div>
         </div>
      </div>
    </ProductCard>
  )
}

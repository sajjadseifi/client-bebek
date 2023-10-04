import React from 'react'
import { ProductCard } from '../../../components/Card/ProductCard'
import { SettingIcons } from '../../../components/Setting/SettingIcons'
import { useNavigate } from 'react-router'
import { AccessAdmin } from '../../../components/Auth/AccessAdmin'

export const ProductItem = ({id,slug,title,description,thumbnail,price}) => {
   const _price = +price 
   const navigate = useNavigate()

  const onEdit = ()=>{
   navigate(`/product/update/${id}`)
  }

  const onDelete = ()=> {

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
               />
         </div>
      </AccessAdmin>
      <div className='xs:flex '>
         <div className='p-2 flex items-center justify-center'>
            <img className='rounded w-2/3 h-auto xs:w-20 xs:h-20 ' src={thumbnail} alt="" />
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

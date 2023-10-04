import React, { useEffect, useState } from 'react'
import { CategorySection } from './components/category/CategorySection'
import { ProductSection } from './components/product/ProductSection'
import { useNavigate, useParams } from 'react-router'
import { ModalProvider } from '../components/ModalPage/ModalPage'

export const Menu = () => {
  const [category,setCategory] = useState(null)
  const params = useParams()
  const navigate = useNavigate()
  const categoryId = params.categoryId

  let productSection = null

  useEffect(()=>{
    if(category && `${category.id}` !== `${categoryId}`){
      navigate(`/menu/${category.id}`)
    }
  
  },[category])

  if(categoryId) {
    productSection = (
      <div className='flex-1 overflow-scroll'>
          <ProductSection category={category}  />
      </div>
    )
  }
  return (
    <div className='flex flex-col h-full'>
        <div>
          <CategorySection  categoryId={categoryId} onChange={setCategory} />
        </div>
        {productSection}
      </div>
  )
}

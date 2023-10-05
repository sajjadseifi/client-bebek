import React, { useEffect, useState } from 'react'
import { CategorySection } from './components/category/CategorySection'
import { ProductSection } from './components/product/ProductSection'
import { useNavigate, useParams } from 'react-router'

export const Menu = () => {
  const [category,setCategory] = useState(null)
  const params = useParams()
  const navigate = useNavigate()
  const categoryId = params.categoryId

  let productSection = null

  const onNavigateCategory= () => {
    if(category && `${category.id}` !== `${categoryId}`)
      navigate(`/menu/${category.id}`)
    }
  useEffect(()=>{
    if(category && `${category.id}` !== `${categoryId}`)
      navigate(`/menu/${category.id}`)
  },[category])

  if(categoryId) {
    productSection = <ProductSection category={category}  />
  }
  return (
    <div className='flex flex-col'>
        <div>
          <CategorySection  categoryId={categoryId} onChange={setCategory} />
        </div>
        {productSection}
      </div>
  )
}


export default Menu
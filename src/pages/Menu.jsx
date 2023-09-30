import React, { useEffect, useState } from 'react'
import { CategorySection } from './components/category/CategorySection'
import { ProductSection } from './components/product/ProductSection'
import { SelectedCategory } from './components/SelectedCategory'
import { useQueryClient } from 'react-query'
import { useParams } from 'react-router'

export const Menu = () => {
  const [category,setCategory] = useState(null)
  const params = useParams()
  const categoryId = params.categoryId
  return (
    <div className='flex flex-col h-full'>
      <div>
        <CategorySection  onChange={setCategory} />
      </div>
      {categoryId && (
        <>
        <SelectedCategory category={category}/>
        <div className='flex-1 overflow-scroll'>
            <ProductSection category={category}  />
        </div>
        </>
      )}
    </div>
  )
}

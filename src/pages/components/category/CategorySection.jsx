import React, { useEffect, useState } from 'react'
import { CategoryItem } from './CategoryItem'
import HorizontalSwiper from '../../../components/Swiper/HorizontalSwiper'
import { useNavigate, useParams } from 'react-router'
import { categoryAPi } from '../../../core/api'
import { useQuery } from 'react-query'
import { CategorySkeleton } from './CategorySkeleton'
import {TiPlus} from 'react-icons/ti'
import { SelectedCategory } from '../SelectedCategory'
import { AccessAdmin } from '../../../components/Auth/AccessAdmin'
import { IconButton } from '../../../components/UI/Button/IconButton'
import { useModalPage } from '../../../components/ModalPage/ModalPage'
import { AddCategoryPage } from '../../category/AddCategoryPage'
import { CategoryRoute } from './CategoryRoute'


const breakpoints = {
   100: {
      slidesPerView: 1,
      spaceBetween: 2
   },
   250: {
      slidesPerView: 2,
      spaceBetween: 4
     },
   320: {
    slidesPerView: 3,
    spaceBetween: 6
   },
   500: {
    slidesPerView: 4,
    spaceBetween: 8
   },
   800: {
      slidesPerView: 6,
      spaceBetween: 8
     }
  }

export const CategorySection = ({isLink=true,categoryId=null,onChange=(category)=>{}}) => {
   const [selectedCategory,setSelectedCategory] = useState(null)

   const {  data,isLoading } = useQuery({
      queryKey: ['categories'],
      queryFn:     categoryAPi.categoriesAllIndexApi,
    })
   const categories = data?.categoris ?? []
   const skeletonSlides = [...Array(10)].map((c)=><CategorySkeleton/>)
   const categoriesSlides = categories.map((c)=>(
      <CategoryItem 
         isLink={isLink} 
         isActive={categoryId + '' == c.id + ''} 
         onClick = {()=>!isLink && onChange(c)}
         {...c} 
      />
   ))
   const slides = isLoading ? skeletonSlides: categoriesSlides

   useEffect(()=> {

      return () => {
         setSelectedCategory(null)
         onChange(null)
      }
   },[])

   useEffect(()=>{
      let  selectedCategory =  categories.find((c)=> `${c.id}` === `${categoryId}`)  
      selectedCategory = selectedCategory ?? categories[0]
            
      setSelectedCategory(selectedCategory)
      onChange(selectedCategory)

   },[categories,categoryId])


   const onNextCategory = (position) => () => {
      let idx = categories.findIndex((c)=> `${c.id}` === `${categoryId}`) 
      
      if(idx >= 0) {
         idx += position
         if(idx < 0)  idx = categories.length - 1
         else if(idx >= categories.length) idx = 0
      }
      else  idx = 0
      
      onChange(categories[idx])
   }  

   return (
   <div className='py-4 px-4'>
      <HorizontalSwiper  breakpoints={ breakpoints} slides={slides}   />
      <div className='my-4'></div>
      <SelectedCategory category={selectedCategory}  />
   </div>
  )
}

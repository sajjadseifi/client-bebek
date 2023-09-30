import React, { useEffect } from 'react'
import { CategoryItem } from './CategoryItem'
import HorizontalSwiper from '../../../components/Swiper/HorizontalSwiper'
import { useNavigate, useParams } from 'react-router'
import { categoryAPi } from '../../../core/api'
import { useQuery } from 'react-query'
import { CategorySkeleton } from './CategorySkeleton'

export const CategorySection = ({onChange=(category)=>{}}) => {
   const params = useParams()
   const navigate = useNavigate()

   const {  data,isLoading } = useQuery({
      queryKey: ['categories'],
      queryFn:     categoryAPi.categoriesAllIndexApi,
    })

    const categoryId = params.categoryId
   const categories = data?.categoris ?? []
   const skeletonSlides = [...Array(10)].map((c)=><CategorySkeleton/>)
   const categoriesSlides = categories.map((c)=><CategoryItem {...c} isActive={categoryId + '' == c.id + ''} />)
   const slides = isLoading ? skeletonSlides: categoriesSlides


      
   useEffect(()=>{
      let  selectedCategory =  categories.find((c)=> `${c.id}` === `${categoryId}`)  
      selectedCategory = selectedCategory ?? categories[0]
            
      if(!categoryId &&  selectedCategory){
        navigate(`/menu/${selectedCategory.id}`)
      }

      onChange(selectedCategory)

   },[categories,categoryId])

   return (
    <div className='p-5'>
         <HorizontalSwiper 
           breakpoints={ {
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
           }}
            slides={slides}   
         />
    </div>
  )
}

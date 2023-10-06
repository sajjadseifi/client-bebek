import React, { useEffect, useState } from 'react'
import { CategoryItem } from './CategoryItem'
import HorizontalSwiper from '../../../components/Swiper/HorizontalSwiper'
import { categoryAPi } from '../../../core/api'
import { useQuery } from 'react-query'
import { CategorySkeleton } from './CategorySkeleton'
import { SelectedCategory } from '../SelectedCategory'
import { AccessAdmin } from '../../../components/Auth/AccessAdmin'
import { IconButton } from '../../../components/UI/Button/IconButton'
import { Link } from 'react-router-dom'
import { TbCategoryFilled } from 'react-icons/tb'


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

   const {  data,isLoading,isError } = useQuery({
      queryKey: ['categories'],
      queryFn:     categoryAPi.categoriesAllIndexApi,
    })
   const categories = (data?.categoris) ?? []
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
      <>
      <div className='px-4'>
         <HorizontalSwiper  breakpoints={ breakpoints} slides={slides}   />
         <AccessAdmin show={!isLoading &&  isError && categories.length === 0}>
               <div>
                     <h1 className='text-white'>منویی ساخته نشده</h1>
                     <Link to='/category/add' className='flex justify-center' >
                        <IconButton  icon={<TbCategoryFilled/>}  bgColor='bg-orange-200' textColor='text-orange-600' title='ساخت منو'/>
                     </Link>
               </div>
         </AccessAdmin>
      </div>
      <SelectedCategory category={selectedCategory}  />
      </>
  )
}

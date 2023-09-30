import React from 'react'
import { Link } from 'react-router-dom'
import { CagtegoryCard } from '../../../components/Card/CagtegoryCard'

export const CategoryItem = ({id,title,description,icon,color,isActive}) => {
  
  return (
    <li color={`rounded-sm flex-1 h-full`}>
      <Link to={`/menu/${id}`} >
        <CagtegoryCard active={isActive}>
           <div>
              <img  style={{width:60,height:60}} className='rounded-full' src={icon}/>
           </div>
           <div className='flex flex-col flex-1 '>
              <span className={`text-sm pt-2 ${isActive ? 'text-lime-950':''}`}>{title}</span>
           </div>
        </CagtegoryCard>
      </Link>
    </li>
  )
}

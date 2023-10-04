import React, { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CagtegoryCard } from '../../../components/Card/CagtegoryCard'
import { SettingIcons } from '../../../components/Setting/SettingIcons'
import { AccessAdmin } from '../../../components/Auth/AccessAdmin'
import { categoryAPi } from '../../../core/api'
import { toast } from 'react-toastify'

export const CategoryItem = ({id,title,description,icon,color,isLink,isActive,...props}) => {
  const navigate = useNavigate()

  const onEdit = ()=>{
   navigate(`/category/update/${id}`)
  }
  const onDelete = (status) => {
    if(status) 
       toast.success(`منو  ${title} با موفقیت حذف شد`)
    else 
      toast.error(`حذف منو ${title} با خطا مواجه شد`)
   
  }
  const Component = isLink ? Link : Fragment
  return (
    <li color={`rounded-sm flex-1 h-full cursor-pointer relative`} {...props}>
      <Component to={`/menu/${id}`} >
        <CagtegoryCard active={isActive}>
           <div>
              <img  style={{width:60,height:60}} className='rounded-full' src={icon}/>
           </div>
           <div className='flex flex-col flex-1 '>
              <span className={`text-sm pt-2 ${isActive ? 'text-lime-950':''}`}>{title}</span>
           </div>
        </CagtegoryCard>
      </Component>
      <AccessAdmin>
          {isLink && (
            <div className=' w-full flex items-center justify-center my-3'>
                  <SettingIcons 
                      editing 
                      deleting
                      onEdit={onEdit}
                      deleteApi={()=>categoryAPi.deleteCategoryById(id)}
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
          )}
      </AccessAdmin>
    </li>
  )
}
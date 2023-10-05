import React, { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CagtegoryCard } from '../../../components/Card/CagtegoryCard'
import { SettingIcons } from '../../../components/Setting/SettingIcons'
import { AccessAdmin } from '../../../components/Auth/AccessAdmin'
import { categoryAPi } from '../../../core/api'
import { toast } from 'react-toastify'
import { queryClient } from '../../../App'

export const CategoryItem = ({id,title,description,icon,color,isLink,isActive,...props}) => {
  const navigate = useNavigate()
  
  const onEdit = ()=>{
   navigate(`/category/update/${id}`)
  }
  const onDelete = (status) => {
    if(status)  toast.success(`منو  ${title} با موفقیت حذف شد`)
    else  toast.error(`حذف منو ${title} با خطا مواجه شد`)
  
    queryClient.refetchQueries({queryKey:['categories']})
  }
  return (
    <li className={`rounded-sm flex flex-col cursor-pointer relative`} style={{height:'100%'}} {...props}>
      <div onClick={()=>isLink &&  navigate(`/menu/${id}`)}  className='flex-1 outline-0 '>
        <CagtegoryCard active={isActive} className='h-full flex flex-col'>
           <div>
              <img    className='w-10 h-10 sm:w-14 sm:h-14 rounded-full' src={icon}/>
           </div>
           <div className='flex flex-col flex-1 justify-center'>
              <span className={`text-xs sm:text-sm  pt-2 ${isActive ? 'text-lime-950':''}`}>{title}</span>
           </div>
        </CagtegoryCard>
      </div>
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

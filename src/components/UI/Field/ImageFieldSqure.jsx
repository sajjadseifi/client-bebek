import React, { useEffect, useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { BiEdit, BiTrash } from 'react-icons/bi'
import { CgMathPlus } from 'react-icons/cg'
import { ErrorMessage } from '../Error/ErrorMessage'

const imageStyle = `
bg-green-400 
bg-opacity-10 
border border-green-400
border-dashed 
mt-2 relative 
w-[180px] 
h-[180px] 
cursor-pointer  
rounded-md
mx-auto
overflow-hidden
`
export const ImageFieldSqure = ({name ,lable='',...props}) => {
      const { register,watch,setValue } = useFormContext() 
      const ref =useRef()
      let src = watch(name)

      if(src instanceof FileList) {
        setValue(name,null)
      }
      else if(src instanceof File) {
          src =  URL.createObjectURL(src)
      }

      return (
        <div>
             <label htmlFor={name} className='text-green-400 my-1'>
               <h1>{lable}</h1>
             <div 
               class={imageStyle + `${src ? 'border-transparent':''} `} 
             >
                  {src && <img src={src } className='w-full h-full' />}
                  <div className='absolute left-0 top-0 w-full h-full flex items-center justify-center'>
                     <div className='p-2 bg-green-100 bg-opacity-40 rounded-full'>
                     {src ? <BiTrash color='red'  onClick={()=>setValue(name,null)} size={40}/>:<CgMathPlus size={40}/>}
                        
                     </div>
                  </div>
                   <input 
                         ref={ref}
                         type='file'
                         id={name}
                         style={{display:'none'}}
                         className='flex-1 bg-transparent px-3 outline-none outline-0 text-green-500 ' 
                        multiple={false}
                         {...register(name,{
                            onChange:(e)=>setValue(name,e.target.files[0])
                         })}
                          {...props} 
                         />
                </div>
          </label>
        <ErrorMessage name={name}/>
        </div>
      )
    }
    
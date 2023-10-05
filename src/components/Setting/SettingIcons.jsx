import React, { useState } from 'react'
import {MdModeEditOutline} from 'react-icons/md'
import {IoMdTrash} from 'react-icons/io'
import { IconCircleButton } from '../UI/Button/IconCircleButton'
import { CgEye } from 'react-icons/cg'
import { useMutation } from 'react-query'
import { useModalPage } from '../ModalPage/ModalPage'
import { BaseModal } from '../../pages/components/BaseModal'


export const SettingIcons = ({
   seeing,
   editing,
   deleting,
   onSee = ()=>{},
   onEdit = ()=>{},
  onDelete=(status)=>{},
   className,
   deleteApi=()=>{},
   modal = {
    title:'',
    description:'',
   },
   ...props
}) => {
  const {addPage,removeLastPage}= useModalPage()

 const onResult= (status)=> {
   onClose()
  onDelete(status)
 }

 const {mutate,isLoading,isIdle} = useMutation(deleteApi,{
  onSuccess:(d)=>onResult(true),
  onError:(e)=>onResult(false),
  retry:0,
 });

 const onHandler = () => { 
  mutate()
}
const onClose = () => removeLastPage()

const onLoadHandler = () => isLoading || !isIdle
 const onOpenModal = () => {
  const { description,title}  = modal
  addPage(<BaseModal  
      {...{
        description,
        onClose,
        isLoading,
        title
      }} 
      onLoadHandler={onLoadHandler}
      handler={onHandler}
    />)
}


  return (
      <div className={` flex items-center justify-between   ${className}`} {...props}>
        {seeing && <span onClick={onSee} ><IconCircleButton  color='lime' Icon={CgEye}  /></span>}
        {editing && <span onClick={onEdit} ><IconCircleButton color='teal' Icon={MdModeEditOutline}  /></span>}
        {deleting && <span onClick={onOpenModal} ><IconCircleButton color='red' Icon={IoMdTrash} /></span>}
      </div>
  )
}

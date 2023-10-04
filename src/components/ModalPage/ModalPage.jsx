import React, { createContext, useContext, useReducer } from 'react'
import { ModalPages } from './ModalPages'

const initialStates = { 
  pages : [],
  canBack:true,
  title:null,
 }
const ModalPageContext =  createContext()

const MODAL_CEATE_PAGE = 'MODAL_CEATE_PAGE'
const MODAL_REMOVE_PAGE = 'MODAL_REMOVE_PAGE'


const modalPageReducer = (state,action) => {
  switch(action.type) {
    case MODAL_CEATE_PAGE:
      let updatedCreatePages = [...state.pages,action.payload.page] 
      return {
        title : action.payload.title,
        canBack : action.payload.canBack,
        ...state,pages:updatedCreatePages
      }
    case MODAL_REMOVE_PAGE:
      const idxPage = action.payload.currentPage ?? state.pages.length - 1

      let updatedRemovePages = [...state.pages].filter((_,idx)=>idx !== idxPage)
      return {...state, pages : updatedRemovePages}
    default:
      return {...state}
  }
}


export const useModalPage = () => {
  const context = useContext(ModalPageContext)


  if (context === undefined)
    throw new Error(`useModalPage must be used within a ModalPageContext`)

  const { state, dispatch } = context

  
  const addPage = (element,title=null,canBack=true)=> dispatch({type:MODAL_CEATE_PAGE,payload : {page : element,title,canBack}})
  const removeLastPage = ()=> dispatch({type:MODAL_REMOVE_PAGE,payload:{}})
  const removePageByIndex = (index)=> dispatch({type:MODAL_REMOVE_PAGE,payload:{currentPage : index}})

  const { pages,canBack,title } = state
  const selectedPage = pages[pages.length - 1] ?? null
  
  return {
      addPage,
      removeLastPage,
      removePageByIndex,
      selectedPage,
      pages,
      canBack,
      title
    }
  
} 


export const ModalProvider = ({children}) => {
  const [state, dispatch] = useReducer(modalPageReducer, initialStates)

  const value = { state, dispatch }
  return (
    <ModalPageContext.Provider value={value}>
      {children}
      <ModalPages/>
    </ModalPageContext.Provider>
  ) 
}



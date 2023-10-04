import React, { useReducer } from 'react';

const initialValue = { token:null, access_mode : true}
export const AuthContext = React.createContext(initialValue);

const AUTH_SET_TOKEN = 'AUTH_SET_TOKEN'
const AUTH_CLEAR_TOKEN = 'AUTH_CLEAR_TOKEN'
const AUTH_TOGGLE_ACCESS_MODE = 'AUTH_TOGGLE_ACCESS_MODE'
const AUTH_ACCESS_TOKEN = 'access_token'
const authReducer = (state,action) => {
   
   switch(action.type) {
      case AUTH_SET_TOKEN:
         
         const  {payload:{ token }} = action

         localStorage.setItem(AUTH_ACCESS_TOKEN, token)

         return {
            ...state,
            token
         }
         case AUTH_CLEAR_TOKEN:
         localStorage.removeItem(AUTH_ACCESS_TOKEN)
         return {
            ...state,
            token:null
         }
         case AUTH_TOGGLE_ACCESS_MODE:
            return {
               ...state,
               access_mode : !state.access_mode 
            }
            
         default : 
            return {
               ...state,
               token : localStorage.getItem(AUTH_ACCESS_TOKEN),
            }
   }

}

export const Authentication = ({children}) => {
   const token = localStorage.getItem(AUTH_ACCESS_TOKEN)

  const [state, dispatch] = useReducer(authReducer, {...initialValue,token})

  const value = { state, dispatch }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthentication = () => {
   
   const context = React.useContext(AuthContext)


   if (context === undefined)
     throw new Error(`useAuthentication must be used within a AuthContext`)

   const { state, dispatch } = context
   
   const setToken = (token)=> dispatch({type : AUTH_SET_TOKEN, payload:{token}})
   
   const clearToken = ()=> dispatch({type : AUTH_CLEAR_TOKEN, payload:{}})
   
   const toggleAccess = () => dispatch({type : AUTH_TOGGLE_ACCESS_MODE, payload:{}})

   const isLogined = !!state.token
   const token = state.token
   const access_mode = state.access_mode
   
   return { 
      token, 
      isLogined, 
      access_mode,
      setToken, 
      clearToken,
      toggleAccess,
   }
 }

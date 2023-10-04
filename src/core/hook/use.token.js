import { useEffect } from "react";
import { useLocalStorage } from "./use.localstorage";

const ACCESS_TOKEN = 'ACCESS_TOKEN'

export const useToken = () => {
 
   const  { getItem, removeItem, setItem, value } = useLocalStorage()

  const clearToken = () => removeItem(ACCESS_TOKEN);

  const setToken = (token)=>setItem(ACCESS_TOKEN,token)

  useEffect(()=>{
    getItem(ACCESS_TOKEN);
  })

  return { 
    isLogged : !!value,
    token: value,
    setToken ,
    clearToken
 };
};

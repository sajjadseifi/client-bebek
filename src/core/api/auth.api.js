import axiosClient from "./axios";
var FormData = require('form-data');

export const loginAccount = (data) => 
{  
   const {username,password}  = data

   var loginFormData = new FormData();
   loginFormData.append('username',`${username}`)
   loginFormData.append('password',`${password}`)
   
   var config = {
     headers: { 
       'Accept': 'application/json', 
     },
   };

   return axiosClient
   .post('login',loginFormData,config).
   then((res) => res?.data?.data)
   
}
import axiosClient from "./axios";

export const getProductByCategory = (categoryId) => axiosClient
.get(`product/category/${categoryId}`)
.then((res) => res.data.data)

export const create = async (data={})=> {
   const { title, description, price, thumbnail,discounted_price,categoryId } = data
   
   const  formData = new FormData();
   formData.append('category_id',`${categoryId}`)
   formData.append('title',`${title}`)
   formData.append('description',`${description}`)
   formData.append('price',Number(price))
   formData.append('thumbnail',thumbnail)
   formData.append('discounted_price',0)
   
   var config = {
     headers: { 
       'Accept': 'application/json', 
       "Content-Type": "multipart/form-data"
     },
   };
   
  return axiosClient
.post('admin/product/create',formData,config)
.then((res) => res.data.data)

} 

export const update = async (data={})=> {
   const { productId,title, description, price, thumbnail,discounted_price,categoryId } = data
   
   const  formData = new FormData();
   formData.append('category_id',`${categoryId}`)
   formData.append('title',`${title}`)
   formData.append('description',`${description}`)
   formData.append('price',Number(price))
   if(typeof(thumbnail) !== 'string')
   formData.append('thumbnail',thumbnail)
   formData.append('discounted_price',0)
   
   const config = {
     headers: { 
       'Accept': 'application/json', 
       "Content-Type": "multipart/form-data"
     },
   };
   
   const url = `admin/product/update/${productId}`

  return axiosClient.post(url,formData,config).then((res) => res.data.data)

} 


export const getProductById = (productId) => axiosClient
.get(`product/${productId}`)
.then((res) => res.data.data)


export const deleteProductById = (productId) => axiosClient
.post(`admin/product/remove/${productId}`)
.then((res) => res.data.data)

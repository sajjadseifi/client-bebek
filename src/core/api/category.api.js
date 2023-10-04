import axiosClient from "./axios";
export const categoriesAllIndexApi = () => axiosClient.get('categoris').then((res) => res.data.data)

export const create = async ({title ='',description='',color='',icon}) => {

   var formData = new FormData();
   formData.append('title',`${title}`)
   formData.append('description',`${description}`)
   formData.append('color',`#000000`)
   formData.append('icon',icon)
   
   var config = {
     headers: { 
       'Accept': 'application/json', 
       "Content-Type": "multipart/form-data"
     },
   };

   return axiosClient.post('admin/category/create',formData,config).then((res) => res.data.data)
}

export const update = async ({title ='',description='',color='',icon,categoryId}) => {

  var formData = new FormData();
  formData.append('title',`${title}`)
  formData.append('description',`${description}`)
  formData.append('color',`#000000`)
  
  if(typeof(icon) == 'object') formData.append('icon',icon)
  
  var config = {
    headers: { 
      'Accept': 'application/json', 
      "Content-Type": "multipart/form-data"
    },
  };

  const url = `admin/category/update/${categoryId}`
  return axiosClient.post(url ,formData,config).then((res) => res.data.data)
}


export const getCategoryById = (categoryId) => axiosClient
.get(`category/${categoryId}`)
.then((res) => res.data.data)


export const deleteCategoryById = (categoryId) => axiosClient
.post(`admin/category/remove/${categoryId}`)
.then((res) => res.data.data)

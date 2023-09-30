import axiosClient from "./axios";

export const getProductByCategory = (categoryId) => axiosClient
.get(`product/category/${categoryId}`)
.then((res) => res.data.data)

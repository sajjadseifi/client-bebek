import axiosClient from "./axios";

export const categoriesAllIndexApi = () => axiosClient.get('categoris/').then((res) => res.data.data)
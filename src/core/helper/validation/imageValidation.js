import * as yup from 'yup'
const FILE_SIZE = 2024
const SUPPORTED_FORMATS = ['jpg', 'gif', 'png', 'jpeg', 'svg', 'gif']

const strFormated = SUPPORTED_FORMATS.join(' , ')
const isString = (s) =>  typeof(s) === 'string'
const isStringOrNull = (s) => s== null || typeof(s) === 'string'
export const imageYup = yup
  .mixed()
  .test('fileSize', "حجم فایل بیشتر از حجم مجاز",  value => isString(value) || value.size >= FILE_SIZE) 
  .test('fileType', `فرمت تصویر وارد شده نادرست است فایل های مجاز (${strFormated})`, value => isString(value) || SUPPORTED_FORMATS.map((type)=>`image/${type}`).includes(value.type))
  .required('فیلد عکس محصول اجباری است.')

  export const imageNullableYup = yup
  .mixed()
  .nullable(true)
    .test('fileSize', "حجم فایل بیشتر از حجم مجاز",  value => isStringOrNull(value) || value?.size >= FILE_SIZE) 
    .test('fileType', `فرمت تصویر وارد شده نادرست است فایل های مجاز (${strFormated})`, value => isStringOrNull(value) || SUPPORTED_FORMATS.map((type)=>`image/${type}`).includes(value.type))

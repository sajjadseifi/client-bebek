import {BiQrScan,BiCartAdd} from 'react-icons/bi'
import {LuMenuSquare} from 'react-icons/lu'
import {TbCategoryFilled, TbLogin2, TbLogout2} from 'react-icons/tb'


export const iconButtons = [
   {
      title:'QR کد',
      Icon:BiQrScan,
      route:'/qr-code',
   },
   {
      title:'ثبت منو',
      Icon:TbCategoryFilled,
      route:'/category/add',
      authenticated:true
   },
   {
      title:'منو',
      Icon:LuMenuSquare,
      route:'/menu'
   },

   {
      title:'ثبت محصول',
      Icon:BiCartAdd,
      route:'/product/add',
      authenticated:true
   },
   {
      title:'ورود',
      Icon:TbLogin2,
      route:'/auth/login',
      authenticated:false
   },
   {
      title:'خروج',
      Icon:TbLogout2,
      route:'/auth/logout',
      authenticated:true
   },
] 
import React from 'react'
import { ProductItem } from './ProductItem'

export const ProductList = ({products}) =>   products
.map((p,idx)=>(
  <li className='py-1' key={idx}><ProductItem {...p} /></li>
))
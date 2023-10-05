import React from 'react'
import { Card } from './Card'

export const ProductCard = ({children}) => {
  return (
    <Card className='relative bg-neutral-800  p-1 py-2 rounded-lg rounded-tr-none flex-row '>
      {children}
    </Card>
  )
}

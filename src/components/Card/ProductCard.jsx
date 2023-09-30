import React from 'react'
import { Card } from './Card'

export const ProductCard = ({children}) => {
  return (
    <Card className='bg-neutral-800 py-3 p-2 rounded-lg rounded-tr-none flex-row '>
      {children}
    </Card>
  )
}

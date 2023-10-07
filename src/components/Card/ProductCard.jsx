import React from 'react'
import { Card } from './Card'

export const ProductCard = ({children}) => {
  return (
    <Card className='relative   p-1 py-2 rounded-lg flex-row '>
      {children}
    </Card>
  )
}

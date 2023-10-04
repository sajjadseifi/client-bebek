import React from 'react'
import { Card } from './Card'

const cagtegoryCardStyle = `
transition 
ease-in-out 
delay-150 
flex 
flex-col 
items-center  
justify-center 
h-full
relative
`
export const CagtegoryCard = ({children,active}) => {
  const activeStyle = active ? 'bg-lime-300':'bg-neutral-700'
  return (
    <Card className={`${cagtegoryCardStyle}  ${activeStyle} `}>
      {children}
    </Card>
  )
}

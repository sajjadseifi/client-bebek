import React from 'react'
import { Card } from './Card'

export const CagtegoryCard = ({children,active}) => {
  return (
    <Card className={`transition ease-in-out delay-150 flex flex-col items-center  justify-center h-30  ${active ? 'bg-lime-300':'bg-neutral-700'}`}>
{children}
 </Card>
  )
}

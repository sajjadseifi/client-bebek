import React from 'react'
import { Card } from './Card'
import styles from './CategoryCard.module.css'
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
duration-300
`
export const CagtegoryCard = ({children,active}) => {
  const activeStyle = active ? 'bg-lime-300':'bg-neutral-700'
  return (
    <Card className={`${cagtegoryCardStyle}  ${activeStyle}  ${styles.CategoryCard}`}>
      {children}
    </Card>
  )
}

import React from 'react'
import { useLocation } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './routers.styles.css'

export const AnimatedRouting = ({children}) => {
   let location = useLocation();
   let key = location.pathname
   const isMenu = key.split('/')[1] == 'menu'
   key = isMenu ? '/menu' : key

   return (
      <TransitionGroup  className='h-full'>
         <CSSTransition  key={key} classNames="fade" timeout={300}>
            <div className='h-full'>{children}</div>
         </CSSTransition>
      </TransitionGroup>
  )
}

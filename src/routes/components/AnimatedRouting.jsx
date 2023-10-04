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
      <TransitionGroup >
         <CSSTransition  key={key} classNames="fade" timeout={300}>
            {children}
         </CSSTransition>
      </TransitionGroup>
  )
}

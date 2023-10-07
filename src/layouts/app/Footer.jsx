import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='py-3' > 
        <div className="text-center text-white bg-gray-700 rounded-lg  text-sm mx-5 p-2">
            <span>Powered By </span>
            <Link className="text-green-500 " href="/">Sajjad Seifi </Link>
            <span> & </span>
            <Link className="text-green-500 " href="/">Hossein Zare</Link>
      </div>
    </footer>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-between  bg-blue-300'>
        <div className='text-4xl font-bold text-black ml-4 m-1 flex align-center'>PalsFeed</div>
        <div className='m-1 flex align-middle'>
          <NavLink to="/home" className="m-2">Home</NavLink>
          <NavLink to="/message" className="m-2">Message</NavLink>
          <NavLink to="/profile" className="m-2">Profile</NavLink>
        </div>
    </div>
  )
}

export default Nav
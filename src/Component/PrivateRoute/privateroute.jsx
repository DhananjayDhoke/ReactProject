

import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'


export const Privateroute = () => {
    
    const {isLoggedIn} = useSelector(store=>store);

  return (
   isLoggedIn ?<Outlet/>:<Navigate to={"/login"}></Navigate>
  )
}

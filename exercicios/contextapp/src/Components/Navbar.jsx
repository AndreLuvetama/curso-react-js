import React from 'react'
import "./Navbar.css"
import {  NavLink } from 'react-router-dom'


export const Navbar = () => {
  return (
    <nav><NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>    
        
    </nav>
  )
}

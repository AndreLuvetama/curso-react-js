import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'
import { Home } from '../pages/Home'

export const Navbar = () => {
  return (
    <nav><NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>    
        
    </nav>
  )
}

import React from 'react'
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { useAuthentication } from '../hooks/useAthentication'
import { useAuthValue } from '../context/AuthContext'


export const Navbar = () => {
  const {user}= useAuthValue();
  const {logout} = useAuthentication()

  return (
    <nav className={style.navbar}><NavLink className={style.brand} to='/'>Mini <span> Blog</span></NavLink>
    
       <ul className={style.links_list}>
        <li><NavLink className={({isActive}) => (isActive ? style.active: "")} to='/'>Home</NavLink></li>
        <li><NavLink className={({isActive}) => (isActive ? style.active: "")} to='/about'>Sobre</NavLink></li>
        {/**So será visualizado se o usuário não estiver autenticado */}
        {!user &&(
          <>
            <li><NavLink className={({isActive}) => (isActive ? style.active: "")} to='/register'>Cadastrar</NavLink></li>
            <li><NavLink className={({isActive}) => (isActive ? style.active: "")} to='/login'>Login</NavLink></li>
          </>
        )}
           {user &&(
          <>
            <li><NavLink className={({isActive}) => (isActive ? style.active: "")} to='/posts/create'>Novo post</NavLink></li>
            <li><NavLink className={({isActive}) => (isActive ? style.active: "")} to='/dashboard'>Dashboard</NavLink></li>
          </>
        )}
        {
          user && (
            <li><button onClick={logout}>Sair</button></li>
          )
        }
       </ul>
    </nav>
  )
}

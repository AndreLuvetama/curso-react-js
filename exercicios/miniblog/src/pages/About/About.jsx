import React from 'react'
import style from './About.module.css'

import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div className={style.about}><h2>Sobre o mini</h2><span>Blog</span>
    
    <p>Projeto desenvolvido com React js e Firebase no back</p>
    <Link to='/post/create' className='btn'>Criar Post</Link>
    </div>
  )
}

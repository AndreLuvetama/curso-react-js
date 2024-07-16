
import React, { useEffect, useState } from 'react'
import styles from './Login.module.css'
import { useAuthentication } from '../../hooks/useAthentication'

export const Login = () => {
  const[email, setEmail] = useState("")
  const[displayName, setDisplayName] = useState("")
  const[password, setPassword] = useState("")
  const[error, setError] = useState("")
  const{login, error: authError, loading} = useAuthentication();

  const handleSubmit= async (e) =>{
      e.preventDefault()
      setError("")
      const user={
          displayName,
          email,
          password

      }


      const res = await login(user)
      console.log(res)
  }


  //Vai mapeando se o set Error mudou
  useEffect(() =>{
      if(authError){
          setError(authError)
      }
  }, [authError])


  return (
    <div className={styles.login}><h2>Entrar</h2>
    <p>Faça o seu login para poder utilizar o sistema</p>
        <form  onSubmit={handleSubmit}>
            <label htmlFor=""><span>Email:</span>
                <input type="email" name='email' required 
                placeholder='Email do usuário'
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <label htmlFor=""><span>Password:</span>
                <input type="password" name='password' required 
                placeholder='Informe o password'
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}/>
            </label>
          
                {!loading && <button className='btn'>Entrar</button>}
                {loading && <button className='btn'>Aguarde...</button>}
            {error && <p className='error'>{error}</p>}
        </form>
    
    </div>
  )
}

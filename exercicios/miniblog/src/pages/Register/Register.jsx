import React, { useEffect, useState } from 'react'
import styles from './Register.module.css'
import { useAuthentication } from '../../hooks/useAthentication'

export const Register = () => {
    const[email, setEmail] = useState("")
    const[displayName, setDisplayName] = useState("")
    const[password, setPassword] = useState("")
    const[confirmePassword, setConfirmePassword] = useState("")
    const[error, setError] = useState("")
    const{createUser, error: authError, loading} = useAuthentication();

    const handleSubmit= async (e) =>{
        e.preventDefault()
        setError("")
        const user={
            displayName,
            email,
            password

        }

        if(password !== confirmePassword){
            setError("As senhas devem ser iguais");
            return;
        }
        const res = await createUser(user)
        console.log(res)
    }


    //Vai mapeando se o set Error mudou
    useEffect(() =>{
        if(authError){
            setError(authError)
        }
    }, [authError])




  return (
    <div className={styles.register}><h2>Cadastre-se para postar</h2>
    <p>Crie seu usuário e compartilhe as suas histórias</p>
        <form  onSubmit={handleSubmit}>
            <label htmlFor="" ><span>Nome:</span>
                <input type="text" name='displayName' required
                placeholder='Nome do usuário' 
                value={displayName} 
                onChange={(e)=>setDisplayName(e.target.value)}/>
            </label>
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
            <label htmlFor=""><span>Confirma a sua senha:</span>
                <input type="password" name='confirmePassword' required 
                placeholder='Confirme a sua senha'
                value={confirmePassword} 
                onChange={(e)=>setConfirmePassword(e.target.value)}/>
            </label>
                {!loading && <button className='btn'>Cadastrar</button>}
                {loading && <button className='btn'>Aguarde...</button>}
            {error && <p className='error'>{error}</p>}
        </form>
    
    </div>
  )
}

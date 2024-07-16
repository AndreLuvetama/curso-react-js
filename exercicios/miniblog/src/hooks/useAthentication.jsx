import {db} from '../firebase/config';

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'
import { useState, useEffect } from 'react'
export const useAuthentication = () =>{
    
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)    
    //cleanup
    //deal with memory leaks
    const [cancelled, setCancelled] = useState(false)
    const auth = getAuth()

    function checkIsCancelled(){
        if(cancelled){
            return;
        }
    }
     //Register
    const createUser = async (data) =>{
        checkIsCancelled()
        setLoading(true)
        setError(null)

        try{
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user, {
                displayName: data.displayName
            })
            setLoading(false)
            return user
        }catch(error){
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage;
            if(error.message.includes('Password')){
                systemErrorMessage = "A senhas precisam conter pelo menos 6 caracteres"
            } else if(error.message.includes('Email-already')){
                systemErrorMessage= "Email já cadastrado";
            }else{
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde";
            }
            setLoading(false)
            setError(systemErrorMessage)
        }
       
    };
    //log out
    const logout = () => {
        checkIsCancelled();
        signOut(auth)
    }

      //log in
    const login = async(data) => {
        checkIsCancelled();
        setLoading(true)
        setError(false)
    
        try{
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)
       
        }catch(error){
            let systemErrorMessage;
            if(error.message.includes("user-not-found")){
                    systemErrorMessage = "Usuário não encontrado";
                }else if(error.message.includes('wrong-password')){
                    systemErrorMessage = "Senha incorreta";
                }else{
                    systemErrorMessage = "Ocorreu algum erro, tente mais tarde"
                }
                setError(systemErrorMessage)
                setLoading(false)                
        }

    }
        useEffect(()=> {
            return () => setCancelled(true);
        }, []);

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }

}
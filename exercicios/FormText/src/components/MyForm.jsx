import React, { useState } from 'react'

export const MyForm = ({user}) => {
    const [name, setName] = useState(user? user.name: '');
    const [email, setEmail] = useState(user? user.email: '');
    const [bio, setBio] = useState("");

    const handleName = (e) =>{
       setName(e.target.value);

    }
    function enviar(e){
        console.log("Dados enviados");
    }
    console.log(email)

    const handleSubit = (event) => {
        event.preventDefault();
        console.log(name, email, bio)
        console.log("Enviando formulario");

        //Linpa o form
        setBio("")
        setEmail("")
        setName("")
    }

    //Limpar form
   
  return (
    <>
        <div>MyForm</div>
        <form onSubmit={handleSubit}>
            <div>
                <label htmlFor="name">Nome </label>
                <input type="text" name='name' value={name} placeholder='Informe o nome' onChange={handleName} />
            </div>
            <div>
                <label htmlFor='email'>Email </label>
                <input type="email" name='email' value={email} placeholder='Informe o email' onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <br />
            <div>
                <label htmlFor="bio"></label>
            <textarea name="bio"   onChange={(e) => setBio(e.target,value)} ></textarea>
            </div>

            <div>
                <input type='submit' value="Salvar" />
            </div>
        </form>

    </>
  )
}

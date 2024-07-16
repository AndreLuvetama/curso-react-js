import React, { useDeferredValue, useState } from 'react'
import style from './CreatePost.module.css'
import { useInsertDocments } from "../../hooks/useInsertDocments"
import { useAuthValue } from "../../context/AuthContext"
import { useNavigate } from 'react-router-dom'

export const CreatePost = () => {
  const[title, setTitle] = useState("")
  const[image, setImage] = useState("")
  const[body, setBody] = useState("")
  const[tags, setTags] = useState([])
  const[formError, setFormError] = useState("")
  const navigate = useNavigate()

  const { user } = useAuthValue();
  const {insertDocments, response} = useInsertDocments("post")


  const handleSubmit = (e)=>{
    e.preventDefault()
    setFormError("")

    //validar url
    try {
        new URL(image)
    } catch (error) {
      setFormError("A imagem precisa ser uma url")
    }

    //criar array de tags
    //tira as visrgulas, tira os espaços em branco e coloca todos em ninusculo
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());
    //checar se tem valores
      if(!title || !image || !tags || !body){
        setFormError("Por favor preencha todos os campos!")
      }
      if(formError) return;

    insertDocments({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    });
    //redirect to home page
    navigate("/")
  };

  return (
    <div className={style.create_post}><h2>Criar post</h2>
      <p>Escreve assunto do seu interesse e compartilhe com o mundo</p>
      <form onSubmit={handleSubmit}>
        <label><span>Título</span>
          <input type="text" name='title' required placeholder='Pense é um bom título'
          onChange={(e)=> setTitle(e.target.value)}
          value={title} />
        </label>
       <label><span>URL da imagem</span>
          <input type="text" name='image' required placeholder='Insere uma imagem aqui'
          onChange={(e)=> setImage(e.target.value)}
          value={image} />
        </label>
        <label>
          <span>Conteudo</span>
          <textarea name='body' required placeholder='Insira o conteúdo do post'
          onChange={(e)=> setBody(e.target.value)}
          value={body}></textarea>
        </label>

        <label><span>Tags</span>
        <input type="text" name='tags' required placeholder='Insira as tags separadas por virgula'
        onChange={(e)=> setTags(e.target.value)}
        value={tags} /></label>
       
             {
              !response.loading && <button className='btn'>Cadastrar</button>}
                {response.loading && <button className='btn'>Aguarde...</button>}
            {response.error && <p className='error'>{response.error}</p>}
            {formError && <p className='error'>{formError}</p>}

            

      </form>
    
    </div>
  )
}

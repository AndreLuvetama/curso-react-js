import React, { useState } from 'react'
import styles from './Home.module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import PostDetail from '../../components/PostDetail'
export const Home = () => {
  const [query, setQuery] = useState()
  //const[posts] = useState([])
  const { documents: posts, loading } = useFetchDocuments("posts"); //traz posts, loading do useFetchDocuments
  //renomeamos documents para posts
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    if(query){
      return navigate(`/search?q=${query}`)
    }

  };

  return (
    <div className={styles.home}><h1>Veja os nossos posts mais recentes </h1>
      <form  onSubmit={handleSubmit} className={styles.search_form}>
        <input type="text" name='' placeholder='ou busque por tags...' onChange={(e)=>setQuery(e.target.value)} />
        <button className='btn btn-dark'>Pesquisar</button>
      </form>
      <div className="post-list">
        {loading && <p>Carregando...</p>}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  )
}

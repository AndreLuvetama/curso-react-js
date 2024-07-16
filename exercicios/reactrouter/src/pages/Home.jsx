import React from 'react'
import { useFetch } from '../hooks/useFetch'
import './Home.css'
import { Link } from 'react-router-dom';
const url = "http://localhost:3000/products";

export const Home = () => {
   
    const{data: itens, loading, error} = useFetch(url);
  return (
    <div><h1>Produtos</h1>
        {
            error && <p>{error}</p>           
        }

        <ul className='products'>
           { itens && itens.map((item)=>(
                 <li key={item.id}>
                 <h2>{item.name}</h2>
                 <p>R$: {item.price}</p>
                 {/**Rota dinamica */}
                 <Link to={`/products/${item.id}`}>Detalhes</Link>
 
             </li>

           ))}
        </ul>   
    </div>
  )
}

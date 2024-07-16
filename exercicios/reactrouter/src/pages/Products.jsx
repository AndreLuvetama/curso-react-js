import React from 'react'
import { useFetch } from '../hooks/useFetch'
import './Home.css'
import { Link, useParams } from 'react-router-dom'

export const Products = () => {
    //rota dinamica// trazendo o id do product
  const {id} = useParams()
  const url = "http://localhost:3000/products/" + id;
  const{data: product, loading, error} = useFetch(url);
  console.log(product)

  return (
    <>  
        <div>
            <h3>Detalhe dos Produtos</h3>
            <p>Produto número: {id}</p>
            {error && <p>Ocorreu um erro ao carregar o produto</p>}
            {loading && <p>Carregando...</p>}
            {product && ( <div>
                <h3>{product.name}</h3>
                <p>R$ {product.price}</p>
                {/**nested routes */}
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>

            </div> )}
       
       </div>
    
    
    </>
  )
}

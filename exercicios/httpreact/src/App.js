import './App.css';
import { useState } from "react";
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";
function App() {
  const[products, setProducts] = useState([]);
  const[name, setName] = useState("")
  const[price, setPrice] = useState("")

  //custon hook
  const{data: itens, httpConfig, loading, error} = useFetch(url) // import hooks 
  

  //Resgatado os dados
  /*useEffect( () => {
    async function fetchData(){
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data);
    }
    fetchData();
  }, []);*/


  //Envio de dados
  const handleSubmit = async (e)=>{
    e.preventDefault();
        const product ={
          name,  // O name o price é i ifual as variaveis por isso não repeticmos(name: name/ price=price)
          price,
        };

       /*const res= await fetch(url, {
          method: 'POST',
          headers:{
            "content-type": "application/json",
          },
          body: JSON.stringify(product)
        });
        //carregamento dinamico
        const addedProduct = await res.json()
        setProducts((prevProduct) =>[...prevProduct, addedProduct])*/
        httpConfig(product, "POST",)

        setName("")
        setPrice("")
  }

  
  

  return (
    <div className="App">
     <h1>Lista de produtos</h1>
     {/**Loading// se o loading for true, carrega os dados */}
      
     {loading && <p>Carregando dados...</p>}
     {error && <p style={{color:"red"}}>{error}</p>}
     {!loading && 
        <ul>
            { itens &&
              itens.map((product) => (
                <li key={product.id}> {product.name} - R$: {product.price}

                </li>
              ))
            }
        </ul>
       }
     <hr/>
     <div id='add-product'>
          <form onSubmit={handleSubmit}>
              <label> Name: 
                <input type='text' name='name' value={name} onChange={(e)=> setName(e.target.value)}></input>
              </label>
              <label> Price: 
                <input type='number' name='price' value={price} onChange={(e)=> setPrice(e.target.value)}></input>
              </label>
             {!loading &&  <input type='submit' name='Enviar' />}
          </form>
     </div>
    </div>
  );
}

export default App;

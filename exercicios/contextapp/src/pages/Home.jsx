//import React, { useContext } from 'react'
//import { CounterContext } from '../context/CounterContext';
import { ChangeContext } from '../Components/ChangeContext';
import { useTitleColorContext } from '../hooks/useTitleColorContext'; 
import { useCounterContext } from '../hooks/useCounterContext'; 





export const Home = () => {
//const {counter} = useContext(CounterContext)
const {counter} = useCounterContext()



{/** conexto mais complexo */}
const { color, dispatch } = useTitleColorContext();
const setTitleColor = (color) => {
  dispatch({type: color})
}
  return (
    <div><h1 style={{color: color}}>Home</h1>
    <span>O valor informado é {counter}</span>
    {/**Alterando o valor conetxt */}
        <ChangeContext />
           {/**Alterando o contexto */}
    <div>
      <button onClick={()=> setTitleColor("RED")}>Vermelho</button>
      <button onClick={()=> setTitleColor("BLUE")}>Azul</button>

    </div>
    </div>
  )
}

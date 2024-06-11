import React, { useState } from 'react'

export const StateUse = () => {
    const[valor, setValor] = useState(1)

  return (
    <>
     <br />
        <span>################################################################</span>
        <br />
      <button onClick={()=>setValor(valor + 2)}> Clique aqui</button> {valor}
      <br />
    </>
  )
}

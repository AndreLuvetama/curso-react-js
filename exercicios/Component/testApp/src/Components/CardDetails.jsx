import React, { useState } from 'react'

export const CardDetails = ({brand, km, color, newCar}) => {
  const name = "Maria";
  const[username] = useState("Mariana")
 
  return (
    <div>   <h3>CardDetails</h3>
    <ul>
        <li>Marca: {brand}</li>       
        <li>Cor: {color}</li>
        <li>newCar: {newCar}</li>
        <li>km: {km}</li>
    </ul>



    </div>
  )
}

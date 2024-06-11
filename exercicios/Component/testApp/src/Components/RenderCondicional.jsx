import React, { useState } from 'react'

export const RenderCondicional = () => {
const[x] = useState(false)

  return (
    <>
        <h1>Isso será exibido</h1>
        {/**x só será exibido se fro true */}
        {x && <p>x é true. sim</p> } 
    </>
  )
}

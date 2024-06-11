import React from 'react'

export const Container = ({children, myValue}) => {
  return (
        <div>
             <h4>Conteudo do container</h4>
            {children}
            <p>O valor é: {myValue}</p>
        </div>

  )
}

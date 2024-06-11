import { useState } from 'react'

import './App.css'
import { MyForm } from './components/MyForm'

function App() {
 

  return (
    <>
        <MyForm user={{name:"Josias", email:"josias@gmail.com"}}/>
    </>
  )
}

export default App

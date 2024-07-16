import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext';
import { ChangeContext } from '../Components/ChangeContext';

export const About = () => {
  const {counter} = useContext(CounterContext)
  return (
    <div><h1>About</h1>
      <span>O valor informado é {counter}</span>  
    </div>
  )
}

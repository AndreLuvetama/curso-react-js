import React from 'react'
import { Link, useParams } from 'react-router-dom'
export const Info = () => {
    const {id} = useParams()
  return (
    <div>Mais informações sobre o produto {id}</div>
  )
}

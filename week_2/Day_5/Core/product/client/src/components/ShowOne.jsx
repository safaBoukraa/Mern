import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function ShowOne() {
  const {id} = useParams();
  const [Product , setProduct] = useState({})
  useEffect(()=>{
    axios.get("http://localhost:8000/api/products/"+id)
    .then((oneProduct)=>setProduct(oneProduct.data))
    .catch((err)=>console.log(err))
  },[id])
  return (
    <div>
      <h2>{Product.title}</h2>
      <p>{Product.price}</p>
      <p>{Product.description}</p>
    </div>
  )
}
export default ShowOne
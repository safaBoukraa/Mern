import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
const ShowAll = () => {
    const [products,setProducts]= useState(null)
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(res=>setProducts(res.data))
        .catch(err=>console.log(err))
    },[])
    const deleteProduct = id =>{
        axios.delete("http://localhost:8000/api/products/"+id)
        .then(res=>{
            axios.get("http://localhost:8000/api/products")
            .then(res=>setProducts(res.data))
            .catch(err=>console.log(err))
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <table className='table table-stripped'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>price</th>
                    <th>description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                    {products && (products.map((product)=>{
                        return(
                            <tr key={product._id}>
                                <td><Link to={`/product/${product._id}`}>
                            <h2>{product.title}</h2>
                        </Link></td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td><button className='btn btn-danger' onClick={()=>deleteProduct(product._id)}> delete</button></td>
                                <Link to={`/product/${product._id}/update`}>Update</Link>
                            </tr>
                        )
                    }))}
            </tbody>
        </table>
    </div>
  )
}

export default ShowAll
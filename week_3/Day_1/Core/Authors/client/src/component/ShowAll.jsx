import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
const ShowAll = () => {
    const [Authors,setAuthors]= useState(null)
    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
        .then(res=>setAuthors(res.data))
        .catch(err=>console.log(err))
    },[])
    const deleteProduct = id =>{
        axios.delete("http://localhost:8000/api/authors/"+id)
        .then(res=>{
            axios.get("http://localhost:8000/api/authors")
            .then(res=>setAuthors(res.data))
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
                    {Authors && (Authors.map((Authors)=>{
                        return(
                            <tr key={Authors._id}>
                                <td><Link to={`/product/${Authors._id}`}>
                            <h2>{Authors.title}</h2>
                        </Link></td>
                                <td>{Authors.price}</td>
                                <td>{Authors.description}</td>
                                <td><button className='btn btn-danger' onClick={()=>deleteProduct(Authors._id)}> delete</button></td>
                                <Link to={`/Authors/${Authors._id}/update`}>Update</Link>
                            </tr>
                        )
                    }))}
            </tbody>
        </table>
    </div>
  )
}

export default ShowAll
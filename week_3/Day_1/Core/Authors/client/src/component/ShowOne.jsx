
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function ShowOne() {
    const {id} = useParams();
    const [Author, setAuthor] = useState({})
    useEffect(()=>{
      axios.get("http://localhost:8000/api/authors/"+id)
      .then((oneAuthor)=>setAuthor(oneAuthor.data))
      .catch((err)=>console.log(err))
    },[id])
    return (
      <div>
        <h2>{Author.title}</h2>
        <p>{Author.price}</p>
        <p>{Author.description}</p>
      </div>
    )
  }
  export default ShowOne
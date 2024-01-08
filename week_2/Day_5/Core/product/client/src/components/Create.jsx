import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
const Create = () => {
    const nav=useNavigate()
    const [title,setTitle] =useState('')
    const [price,setPrice]=useState(0)
    const [description,setDescription]=useState('')
    const [errors,setErrors]=useState([])
    const data = {title,price,description}
    const formHandler=e=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/products",data)
        .then(res=> nav('/'))
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
    }
  return (
    <div>
        {errors && (errors.map((error,idx)=><li key={idx}  style={{color:'red'}}>{error}</li>))}
        <form onSubmit={formHandler}  >
            <div className="mb-3">
                
                <label >title</label>
                <input type="text" onChange={e=>setTitle(e.target.value)} />
            </div>
            <div className="mb-3">
                <label >price</label>
                <input type="number" onChange={e=>setPrice(e.target.value)} />
            </div>
            <div className="mb-3">
                <label >description</label>
                <input type="text" onChange={e=>setDescription(e.target.value)} />
            </div><button className="btn btn-primary">Create</button>
        </form>
    </div>
  )
}

export default Create
import React from 'react'
import { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
// store the form input: state variable
// after hitting submit, send the form data to API: axios
// After posting the data, redirect to dashboard page: useNavigate


const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [isAvailable, setIsAvailable] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    const newProduct = {title, description, imgUrl, price, isAvailable}
    // send the form data to the API
    axios.post(`http://localhost:8000/api/products`, newProduct)
      .then(res=>{ // successful create, redirect users to other pages
        console.log(res.data)
        navigate("");
      })
      .catch(err=>{
        console.log(err)
      })
  }

  return (
    <div>
      <h1>Add a new product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type='text' name="title" value={title} className='form-control'
              onChange={e=>setTitle(e.target.value)} />
        </div>
        <div>
          <label>Image URL</label>
          <input type='text' name="imgUrl" value={imgUrl} className='form-control'
              onChange={e=>setImgUrl(e.target.value)} />
        </div>
        <div>
          <label>Price</label>
          <input type='number' name="price" value={price} className='form-control'
              onChange={e=>setPrice(e.target.value)} />
        </div>
        <div>
          <label>Description</label>
          <textarea name='description' 
            value={description} 
            onChange={e=>setDescription(e.target.value)}
            className='form-control'></textarea>
        </div>
        <div>
          <label>Available?</label>
          <input type="checkbox" name="isAvailable" checked={isAvailable}
            onChange={e=>setIsAvailable(e.target.checked)} />
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default CreatePage
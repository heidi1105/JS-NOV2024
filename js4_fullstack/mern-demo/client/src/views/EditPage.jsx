import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios"

// Like DetailsPage: grab the product details from API: 
// 1. Get id from params: useParams
// 2. use the ID to get data from API when the component is loaded: axios & useEffect

// Like CreatePage, make use of the the product details to be the state variables for input
// store the form input: state variable
// after hitting submit, send the form data to API: axios
// After posting the data, redirect to dashboard page: useNavigate

const EditPage = () => {
  const {id} = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [isAvailable, setIsAvailable] = useState(true);

  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(res=>{
        console.log(res.data); // need to update later
        const foundProduct = res.data;
        setTitle(foundProduct.title);
        setDescription(foundProduct.description);
        setImgUrl(foundProduct.imgUrl);
        setPrice(foundProduct.price);
        setIsAvailable(foundProduct.isAvailable);
      })
      .catch(err=>console.log(err))
  }, [])

  const handleSubmit = (e)=>{
    e.preventDefault();
    const updatedData = {title, description, imgUrl, price, isAvailable};
    axios.put(`http://localhost:8000/api/products/${id}`, updatedData)
      .then(res=>{
        navigate("/");
      })
      .catch(err=>console.log(err))
  }

  const handleDelete = ()=>{
    axios.delete(`http://localhost:8000/api/products/${id}`)
      .then(res=>{
        navigate("/");
      })
      .catch(err=>console.log(err))
  }

  return (
    <div>
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
        <button type='button' onClick={e=>handleDelete()} className='btn btn-danger'>Delete</button>
      </form>
        
    </div>
  )
}

export default EditPage
import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useEffect, useState } from "react"
// Get id from params: useParams
// use the ID to get data from API: axios
// Display the info on load: useEffect
// variable to store that data from API: useState

const DetailsPage = () => {
  const {id} = useParams();
  const [product, setProduct] = useState();

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then(res=>{
        console.log(res.data);
        setProduct(res.data);
      })
      .catch(err=>console.log(err))
  }, [])
  return (
    <div>
      {
        product?
        <div class="card">
        <div class="row g-0">
          <div class="col-5 col-sm-4">
            <img src={product.imgUrl} class="img-fluid w-100" alt="card-horizontal-image"/>
          </div>
          <div class="col-7 col-sm-8">
            <div class="card-body">
              <h5 class="card-title">{product.title}</h5>
              <p class="card-text">{product.description}.</p>
              <p class="card-text">{product.price}</p>
              <p class="card-text">Available: {product.isAvailable? "Yes": "No"}</p>
            </div>
          </div>
        </div>
      </div>:
      <h3>Product is not available to show</h3>
      }
      
    </div>
  )
}

export default DetailsPage
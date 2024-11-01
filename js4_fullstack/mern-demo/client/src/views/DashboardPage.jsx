import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
// get data from API: axios
// get data on load: useEffect
// variable change when loading API: useState

const DashboardPage = () => {
  const [productList, setProductList] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/products`)
      .then(res=>{
        console.log(res.data);
        setProductList(res.data);
      })
      .catch(err=> console.log(err))
  }, [])


  return (
    <div className='row'>
      {
        productList.map((eachProduct)=>
          <div key={eachProduct._id} className='col'>
            <h3>{eachProduct.title}</h3>
            <img src={eachProduct.imgUrl} className='img-thumbnail'/>
            <p>Price: {eachProduct.price}</p>
            <p>{eachProduct.isAvailable ? "(Available)" : "(Not Available)"}</p>
            <Link to={`/products/${eachProduct._id}`}>Details</Link>
          </div>
        )
      }
    </div>
  )
}

export default DashboardPage
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
  // Get id from params: useParams (Like Details)

  // Create all the state variables for each form input (Like Create)

  // Instantiate navigate to be used later

  useEffect(()=>{
    // Get the product data from API, and set the state variables for each form input
  }, [])

  const handleSubmit = (e)=>{
    e.preventDefault();
    // Send a PUT request with the form data to the backend  (Like Create)
    // navigate to other pages if it is successful
  }

  

  const handleDelete = ()=>{
    // Create handleDelete to delete product from the API, navigate to dashboard if successful
  }

  return (
    <div>
      {/* 
         Same as CreatePage, make sure all input have value referencing the state variable 
         For submit button, any button will work, no onClick is needed
         For Delete button, make sure it's either outside the form, OR have type="button" with onClick  
      */}
    </div>
  )
}

export default EditPage
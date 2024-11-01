import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
// get data from API: axios
// get data on load: useEffect
// variable change when loading API: useState

const DashboardPage = () => {
    // Create state variable to store the product list

  useEffect(()=>{
    // Axios to get the data from API (Postman route to get ONE)
    // store the data in product list 
  }, [])


  return (
    <div className='row'>
      {  
      /* DISPLAY THE LIST USING .map */
      }
    </div>
  )
}

export default DashboardPage
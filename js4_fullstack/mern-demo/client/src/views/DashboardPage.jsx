import React from 'react'
// get data from API: axios
// get data on load: useEffect
// variable change when loading API: useState

const DashboardPage = () => {
    // Create state variable to store the product list

  useEffect(()=>{
    // Axios to get the data from API (Postman route to get ONE)
    // store the data in product list 
  }, [])

  const handleDelete = (deleteId)=>{
    /*
      To add handleDelete, make sure the function takes an ID
      After deleting from backend, filter the productList and update the state variable (Refer to CRUD form / todoList)
    */

  }
  return (
    <div className='row'>
      {  
      /* 
          DISPLAY THE LIST USING .map 
          To add the delete button, make sure the id of that product is sent
          i.e.  onClick={()=>handleDelete(eachProduct._id)}
      */
      }
    </div>
  )
}

export default DashboardPage
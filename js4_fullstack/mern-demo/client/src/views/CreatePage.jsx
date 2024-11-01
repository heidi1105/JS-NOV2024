import React from 'react'
// store the form input: state variable
// after hitting submit, send the form data to API: axios
// After posting the data, redirect to dashboard page: useNavigate


const CreatePage = () => {
  // Create state variables for each form input

  // Instantiate navigate 

  const handleSubmit = (e)=>{
    e.preventDefault();
    // send the newProduct with all the input to axios post
    // For successful create, redirect users to other pages
  }

  return (
    <div>
      <h1>Add a new product</h1>
      {/* REFER TO REACTIVE FORM, Create a form with all the inputs */}
    </div>
  )
}

export default CreatePage
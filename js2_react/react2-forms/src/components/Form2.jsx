// 1. import useState
import React, { useState } from 'react'

const Form2 = () => {
    // 2. initialize the state variables
    const [flavor, setFlavor] = useState("Vanilla");
    const [quantity, setQuantity] = useState(0);

    // State variable to handle whether the form is submitted
    const [isSubmitted , setIsSubmitted] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();

        const newIcecream = {
            flavor: flavor,
            quantity: quantity
        }

        // alternative:
        // const newIcecream = {flavor,quantity }

        // send all the icecream info to the server 
        console.log(newIcecream)

        // update the state variable if the form is submitted
        setIsSubmitted(true);
    }

    return (
        <fieldset>
            <legend>Form2.jsx</legend>
            <h2>Icecream store - Form2 (Ternary)</h2>
            {
                isSubmitted?
                <h3>Thank you for submitting the form</h3>:
                <h3>Please fill in the form</h3>
            }
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Flavor</label>
                    <input type="text" name="flavor" value={flavor} onChange={e=> setFlavor(e.target.value)}/>
                    {
                        flavor.length < 3 &&
                        <p style={{color: "red"}}>Flavor must be at least 3 characters</p>
                    }
                </div>
                <div>
                    <label>Quantity</label>
                    <input type="number" name="quantity" value={quantity} onChange={e=> setQuantity(e.target.value)}/>
                    {
                        quantity <1 &&
                        <p style={{color: "red"}}>Quantity must be positive</p>
                    }
                </div>
                <button type="submit">Submit</button>
            </form>
            
            <p>Flavor: {flavor} | Quantity: {quantity}</p>
        </fieldset>
    )
}

export default Form2
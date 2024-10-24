// 1. import useState
import React, { useState } from 'react'

const Form1 = () => {
    // 2. initialize the state variables
    const [flavor, setFlavor] = useState("Vanilla");
    const [quantity, setQuantity] = useState(0);

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
    }

    return (
        <fieldset>
            <legend>Form1.jsx</legend>
            <h2>Icecream store - Form1 (Without error message)</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Flavor</label>
                    <input type="text" name="flavor" value={flavor} onChange={e=> setFlavor(e.target.value)}/>
                </div>
                <div>
                    <label>Quantity</label>
                    <input type="number" name="quantity" value={quantity} onChange={e=> setQuantity(e.target.value)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
            
            <p>Flavor: {flavor} | Quantity: {quantity}</p>
        </fieldset>
    )
}

export default Form1
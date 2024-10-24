// 1. import useState
import React, { useState } from 'react'

const Form3 = () => {
    // 2. initialize the state variables
    const [flavor, setFlavor] = useState("Vanilla");
    const [quantity, setQuantity] = useState(0);

    const [isSubmitted , setIsSubmitted] = useState(false);

    // error messages
    const [flavorErr, setFlavorErr] = useState("");
    const [quantityErr, setQuantityErr] = useState(true);


    const handleSubmit = (e)=>{
        e.preventDefault();

        if(quantityErr || flavorErr){
            alert("Invalid Form")
        }else{
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
    }

    const formMessage = ()=>{
        if(isSubmitted){
            return "Thank you for submitting the form"
        }else{
            return "Please fill in the form"
        }
    }

    const handleFlavor = (e) =>{
        const {value} = e.target;
        setFlavor(value); // take time to set the state variables
        if(value.length< 1){
            setFlavorErr("Flavor is required");
        }else if(value.length < 3){
            setFlavorErr("Flavor must be at least 3 characters");
        }else{
            setFlavorErr("");
        }
    }

    const handleQuantity = (e) =>{
        const {value} = e.target;
        setQuantity(value);
        if(value <= 0){
            setQuantityErr("Quantity must be positive");
        }else{
            setQuantityErr("");
        }
    }
    return (
        <fieldset>
            <legend>Form3.jsx</legend>
            <h2>Icecream store - Form3 (using functions - more recommended)</h2>
            <h3>{formMessage()}</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Flavor</label>
                    <input type="text" name="flavor" value={flavor} onChange={handleFlavor}/>
                    <p style={{color: "red"}}>{flavorErr}</p>
                </div>
                <div>
                    <label>Quantity</label>
                    <input type="number" name="quantity" value={quantity} onChange={handleQuantity}/>
                    <p style={{color: "red"}}>{quantityErr}</p>
                </div>
                <button type="submit" >Submit</button>
            </form>
            
            <p>Flavor: {flavor} | Quantity: {quantity}</p>
        </fieldset>
    )
}

export default Form3